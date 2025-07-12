import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  Button,
  MotionCard,
} from "../components/ui";
import { rankCandidatesWithAI } from "../services/geminiService";
import { Candidate, Job, RankedCandidate } from "../types";
import { BrainCircuitIcon, SparklesIcon } from "../components/icons";
import { useAppContext } from "../context/AppContext";

const defaultJobDescription = `Job Title: Senior Frontend React Engineer

Location: Remote

Department: Engineering

Job Type: Full-time

Required Skills:
- 5+ years of experience with React.js and its ecosystem.
- Deep understanding of TypeScript, modern JavaScript (ES6+).
- Proficient with state management libraries like Redux or Zustand.
- Experience with Tailwind CSS for building modern UIs.
- Strong knowledge of RESTful APIs and modern authorization mechanisms.
- Experience with testing frameworks like Jest and React Testing Library.
- Familiarity with CI/CD pipelines.`;

const SandboxCandidateCard: React.FC<{ rankedCandidate: RankedCandidate }> = ({
  rankedCandidate,
}) => {
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
          <div className="text-2xl font-bold text-primary-btn dark:text-primary-btn-foreground">
            {rankedCandidate.fitScore}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {rankedCandidate.reasoning}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Strengths
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {rankedCandidate.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
              Weaknesses
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {rankedCandidate.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </MotionCard>
  );
};

export const AIRankerPage: React.FC = () => {
  const [jobDescription, setJobDescription] = useState(defaultJobDescription);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rankedCandidates, setRankedCandidates] = useState<RankedCandidate[]>(
    []
  );
  const { candidates } = useAppContext();

  const handleRankCandidates = useCallback(async () => {
    if (!jobDescription.trim()) {
      setError("Job description cannot be empty.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setRankedCandidates([]);

    const tempJob: Job = {
      id: Date.now(),
      title: "Custom AI Analysis",
      description: jobDescription,
      department: "N/A",
      location: "N/A",
      type: "Full-time",
      requirements: [],
      status: "Open",
    };

    try {
      const result = await rankCandidatesWithAI(tempJob, candidates);
      const rankedWithIds = result
        .map((rc) => {
          const originalCandidate = candidates.find(
            (c) => c.name === rc.candidateName
          );
          return { ...rc, candidateId: originalCandidate?.id || 0 };
        })
        .filter((rc) => rc.candidateId !== 0);
      setRankedCandidates(rankedWithIds);
    } catch (e: any) {
      setError(e.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [jobDescription, candidates]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Ranker Sandbox</CardTitle>
          <CardDescription>
            Paste a job description below. The AI will rank all candidates in
            the system against it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={15}
            className="w-full p-4 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring font-mono text-sm"
            placeholder="Paste job description here..."
          />
          <div className="text-center">
            <Button
              onClick={handleRankCandidates}
              isLoading={isLoading}
              disabled={isLoading}
            >
              <SparklesIcon className="w-5 h-5 mr-2" />
              {isLoading ? "Analyzing..." : "Analyze Candidates"}
            </Button>
          </div>
        </CardContent>
      </Card>

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
          <h3 className="text-2xl font-bold text-center">
            AI Analysis Results
          </h3>
          <div className="text-center text-sm text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
            <BrainCircuitIcon className="w-5 h-5 inline-block mr-2" />
            <strong>AI-Powered Decision Support:</strong> This ranking is
            generated by an AI model. Please use it as a support tool and
            conduct a thorough review yourself. Final decisions must be made by
            HR personnel.
          </div>
          <motion.div className="space-y-4" layout>
            {rankedCandidates.map((rc) => (
              <SandboxCandidateCard key={rc.candidateId} rankedCandidate={rc} />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};
