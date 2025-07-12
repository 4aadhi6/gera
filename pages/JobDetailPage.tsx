import React, { useState, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, Button, MotionCard } from '../components/ui';
import { rankCandidatesWithAI } from '../services/geminiService';
import { Candidate, Job, RankedCandidate } from '../types';
import { BrainCircuitIcon } from '../components/icons';
import { useAppContext } from '../context/AppContext';

const NewCandidateForm = ({ onSubmit, onCancel }: { onSubmit: (data: Omit<Candidate, 'id' | 'status' | 'jobId'>) => void; onCancel: () => void; }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [resumeSummary, setResumeSummary] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            name,
            email,
            experience: Number(experience),
            skills: skills.split(',').map(s => s.trim()),
            resumeSummary
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                    <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
                </div>
            </div>
            <div>
                <label htmlFor="experience" className="block text-sm font-medium mb-1">Experience (Years)</label>
                <input id="experience" type="number" value={experience} onChange={e => setExperience(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
            </div>
            <div>
                <label htmlFor="skills" className="block text-sm font-medium mb-1">Skills (comma-separated)</label>
                <input id="skills" type="text" value={skills} onChange={e => setSkills(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
            </div>
            <div>
                <label htmlFor="resumeSummary" className="block text-sm font-medium mb-1">Resume Summary</label>
                <textarea id="resumeSummary" value={resumeSummary} onChange={e => setResumeSummary(e.target.value)} rows={3} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button type="submit">Add Candidate</Button>
            </div>
        </form>
    );
};

const CandidateCard: React.FC<{ rankedCandidate: RankedCandidate; job: Job; onGenerateLetter: (type: 'Offer' | 'Rejection', candidateName: string, jobTitle: string) => void; onHire: (candidateId: number) => void; }> = ({ rankedCandidate, job, onGenerateLetter, onHire }) => {
    return (
        <MotionCard
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="overflow-hidden"
        >
            <CardHeader className="flex flex-row items-center justify-between !pb-2">
                <div>
                    <CardTitle>{rankedCandidate.candidateName}</CardTitle>
                    <CardDescription>Rank: {rankedCandidate.rank}</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Fit Score</span>
                    <div className="text-2xl font-bold text-primary-btn dark:text-primary-btn-foreground">{rankedCandidate.fitScore}</div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{rankedCandidate.reasoning}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Strengths</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {rankedCandidate.strengths.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Weaknesses</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {rankedCandidate.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                        </ul>
                    </div>
                </div>
                 <div className="border-t border-border mt-4 pt-4 flex justify-end space-x-2">
                    <Button size="sm" variant="secondary" onClick={() => onGenerateLetter('Rejection', rankedCandidate.candidateName, job.title)}>Generate Rejection</Button>
                    <Button size="sm" variant="secondary" onClick={() => onGenerateLetter('Offer', rankedCandidate.candidateName, job.title)}>Generate Offer</Button>
                    <Button size="sm" onClick={() => onHire(rankedCandidate.candidateId)}>Hire Candidate</Button>
                </div>
            </CardContent>
        </MotionCard>
    );
};

export const JobDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [rankedCandidates, setRankedCandidates] = useState<RankedCandidate[]>([]);
    const { jobs, candidates, showModal, hideModal, addCandidate, hireCandidate } = useAppContext();

    const job = useMemo(() => jobs.find(j => j.id === parseInt(id!)), [id, jobs]);
    const jobCandidates = useMemo(() => candidates.filter(c => c.jobId === parseInt(id!)), [id, candidates]);

    const handleRankCandidates = useCallback(async () => {
        if (!job || !jobCandidates.length) return;
        setIsLoading(true);
        setError(null);
        setRankedCandidates([]);
        try {
            const result = await rankCandidatesWithAI(job, jobCandidates.filter(c => c.status === 'Active'));
            const rankedWithIds = result.map(rc => {
                const originalCandidate = jobCandidates.find(c => c.name === rc.candidateName);
                return { ...rc, candidateId: originalCandidate?.id || 0 };
            }).filter(rc => rc.candidateId !== 0);
            setRankedCandidates(rankedWithIds);
        } catch (e: any) {
            setError(e.message || "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, [job, jobCandidates]);
    
    const handleGenerateLetter = (type: 'Offer' | 'Rejection', candidateName: string, jobTitle: string) => {
        const subject = `${type} Letter for ${jobTitle} Position`;
        const content = type === 'Offer' ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
                <h4>Offer of Employment</h4>
                <p>Dear {candidateName},</p>
                <p>We are delighted to offer you the position of <strong>{jobTitle}</strong> at TalentOS. We were very impressed with your interview and believe your skills and experience will be a valuable asset to our team.</p>
                <p>This letter contains the general terms of your potential employment. A detailed offer package will be sent to you shortly.</p>
                <p>We look forward to welcoming you to the team.</p>
                <br/>
                <p>Sincerely,</p>
                <p>The TalentOS HR Team</p>
            </div>
        ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none">
                <h4>Update on Your Application</h4>
                <p>Dear {candidateName},</p>
                <p>Thank you for your interest in the <strong>{jobTitle}</strong> position at TalentOS and for taking the time to interview with our team.</p>
                <p>The selection process was very competitive. While we were impressed with your qualifications, we have decided to move forward with other candidates whose experience more closely matches the specific requirements of this role at this time.</p>
                <p>We appreciate you sharing your experience with us and wish you the best of luck in your job search.</p>
                <br/>
                <p>Sincerely,</p>
                <p>The TalentOS HR Team</p>
            </div>
        );

        showModal(content, subject);
    };

    const handleHire = (candidateId: number) => {
        if (job) {
            hireCandidate(candidateId, job.id);
        }
    };

    const handleAddCandidate = (data: Omit<Candidate, 'id' | 'status' | 'jobId'>) => {
        if(job) {
            addCandidate({ ...data, jobId: job.id });
            hideModal();
        }
    };

    const openAddCandidateModal = () => {
        showModal(<NewCandidateForm onSubmit={handleAddCandidate} onCancel={hideModal} />, 'Add New Candidate');
    };

    if (!job) {
        return <div className="text-center p-8">Job not found.</div>;
    }

    const jobStatusPill = job.status === 'Open'
        ? <span className="text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full">{job.status}</span>
        : <span className="text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-2 py-1 rounded-full">{job.status}</span>

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>{job.department} &middot; {job.location}</CardDescription>
                        </div>
                         <div className="flex items-center space-x-4">
                            {jobStatusPill}
                            <span className="text-xs font-medium bg-secondary-btn text-secondary-btn-foreground px-2 py-1 rounded-full">{job.type}</span>
                         </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">{job.description}</p>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Candidates ({jobCandidates.length})</CardTitle>
                            <CardDescription>Applicants for this position.</CardDescription>
                        </div>
                        {job.status === 'Open' && <Button onClick={openAddCandidateModal}>Add Candidate</Button>}
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {jobCandidates.map(candidate => (
                            <div key={candidate.id} className={`p-4 border rounded-lg bg-muted/50 ${candidate.status !== 'Active' ? 'opacity-50' : ''}`}>
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold">{candidate.name}</h4>
                                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                                        candidate.status === 'Hired' ? 'bg-green-500 text-white' :
                                        candidate.status === 'Rejected' ? 'bg-red-500 text-white' :
                                        'bg-blue-500 text-white'
                                    }`}>{candidate.status}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{candidate.email}</p>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {job.status === 'Open' && (
                <div className="text-center my-6">
                    <Button onClick={handleRankCandidates} isLoading={isLoading} disabled={isLoading}>
                        <BrainCircuitIcon className="w-5 h-5 mr-2" />
                        {isLoading ? 'Analyzing...' : 'Use AI to Rank Active Candidates'}
                    </Button>
                </div>
            )}

            <AnimatePresence>
                {error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>

            {rankedCandidates.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center">AI-Powered Candidate Ranking</h3>
                     <div className="text-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
                        <BrainCircuitIcon className="w-5 h-5 inline-block mr-2" />
                        <strong>AI-Powered Decision Support:</strong> This ranking is generated by an AI model. Please use it as a support tool and conduct a thorough review yourself. Final decisions must be made by HR personnel.
                    </div>
                    <motion.div 
                        className="space-y-4"
                        layout
                    >
                        {rankedCandidates.map(rc => (
                            <CandidateCard key={rc.candidateId} rankedCandidate={rc} job={job} onGenerateLetter={handleGenerateLetter} onHire={handleHire} />
                        ))}
                    </motion.div>
                </div>
            )}
        </div>
    );
};