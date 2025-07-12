// // import React, { useEffect, useRef } from 'react';
// // import { Chart, BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
// // import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { Card, CardHeader, CardTitle, CardContent, KpiCard, MotionCard, CardDescription, Button } from '../components/ui';
// // import { useAppContext } from '../context/AppContext';
// // import { BrainCircuitIcon, UsersIcon, FileTextIcon, RocketIcon } from '../components/icons';
// // import { Job } from '../types';

// // Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// // const NewJobForm = ({ onSubmit, onCancel }: { onSubmit: (job: Omit<Job, 'id' | 'status'>) => void; onCancel: () => void; }) => {
// //     const [title, setTitle] = React.useState('');
// //     const [department, setDepartment] = React.useState('');
// //     const [location, setLocation] = React.useState('');
// //     const [type, setType] = React.useState<'Full-time' | 'Part-time' | 'Contract'>('Full-time');
// //     const [description, setDescription] = React.useState('');
// //     const [requirements, setRequirements] = React.useState('');

// //     const handleSubmit = (e: React.FormEvent) => {
// //         e.preventDefault();
// //         onSubmit({
// //             title,
// //             department,
// //             location,
// //             type,
// //             description,
// //             requirements: requirements.split(',').map(r => r.trim()),
// //         });
// //     };

// //     return (
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //             <div>
// //                 <label htmlFor="title" className="block text-sm font-medium mb-1">Job Title</label>
// //                 <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                  <div>
// //                     <label htmlFor="department" className="block text-sm font-medium mb-1">Department</label>
// //                     <input id="department" type="text" value={department} onChange={e => setDepartment(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
// //                 </div>
// //                 <div>
// //                     <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
// //                     <input id="location" type="text" value={location} onChange={e => setLocation(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
// //                 </div>
// //             </div>
// //             <div>
// //                 <label htmlFor="type" className="block text-sm font-medium mb-1">Job Type</label>
// //                 <select id="type" value={type} onChange={e => setType(e.target.value as any)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring">
// //                     <option>Full-time</option>
// //                     <option>Part-time</option>
// //                     <option>Contract</option>
// //                 </select>
// //             </div>
// //             <div>
// //                 <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
// //                 <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
// //             </div>
// //             <div>
// //                 <label htmlFor="requirements" className="block text-sm font-medium mb-1">Requirements (comma-separated)</label>
// //                 <input id="requirements" type="text" value={requirements} onChange={e => setRequirements(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
// //             </div>
// //             <div className="flex justify-end space-x-2 pt-4">
// //                 <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
// //                 <Button type="submit">Create Job</Button>
// //             </div>
// //         </form>
// //     );
// // };

// // const SourceOfHireChart = () => {
// //     const chartRef = useRef<HTMLCanvasElement>(null);
// //     const chartInstance = useRef<Chart | null>(null);
// //     const { theme } = useAppContext();

// //     useEffect(() => {
// //         if (!chartRef.current) return;

// //         const isDark = theme === 'dark';
// //         const gridColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
// //         const textColor = isDark ? '#e2e8f0' : '#334155';

// //         const data = {
// //             labels: ['LinkedIn', 'Referrals', 'Indeed', 'Website', 'Other'],
// //             datasets: [{
// //                 label: 'Hires',
// //                 data: [18, 12, 9, 7, 3],
// //                 backgroundColor: [
// //                     'rgba(59, 130, 246, 0.7)',
// //                     'rgba(168, 85, 247, 0.7)',
// //                     'rgba(236, 72, 153, 0.7)',
// //                     'rgba(20, 184, 166, 0.7)',
// //                     'rgba(107, 114, 128, 0.7)'
// //                 ],
// //                 borderColor: [
// //                     'rgba(59, 130, 246, 1)',
// //                     'rgba(168, 85, 247, 1)',
// //                     'rgba(236, 72, 153, 1)',
// //                     'rgba(20, 184, 166, 1)',
// //                     'rgba(107, 114, 128, 1)'
// //                 ],
// //                 borderWidth: 1
// //             }]
// //         };

// //         if (chartInstance.current) {
// //             chartInstance.current.destroy();
// //         }

// //         chartInstance.current = new Chart(chartRef.current, {
// //             type: 'bar',
// //             data: data,
// //             options: {
// //                 responsive: true,
// //                 maintainAspectRatio: false,
// //                 plugins: {
// //                     legend: { display: false },
// //                     title: { display: false }
// //                 },
// //                 scales: {
// //                     y: {
// //                         beginAtZero: true,
// //                         ticks: { color: textColor },
// //                         grid: { color: gridColor }
// //                     },
// //                     x: {
// //                         ticks: { color: textColor },
// //                         grid: { display: false }
// //                     }
// //                 }
// //             }
// //         });

// //         return () => {
// //             chartInstance.current?.destroy();
// //         };
// //     }, [theme]);

// //     return <canvas ref={chartRef} />;
// // };

// // export const DashboardPage = () => {
// //     const navigate = useNavigate();
// //     const { showModal, hideModal, jobs, candidates, addJob } = useAppContext();

// //     const handleAddNewJob = (newJobData: Omit<Job, 'id' | 'status'>) => {
// //         addJob(newJobData);
// //         hideModal();
// //     };

// //     const openNewJobModal = () => {
// //         showModal(<NewJobForm onSubmit={handleAddNewJob} onCancel={hideModal} />, 'Create New Job Posting');
// //     };

// //     const openPositions = jobs.filter(j => j.status === 'Open').length;
// //     const totalCandidates = candidates.length;
// //     const hiredCount = candidates.filter(c => c.status === 'Hired').length;
// //     const screeningCount = Math.round(totalCandidates * 0.7);
// //     const interviewCount = Math.round(totalCandidates * 0.4);

// //     const kpiData = [
// //         { title: 'Open Positions', value: String(openPositions), icon: <FileTextIcon className="w-6 h-6"/> },
// //         { title: 'Total Candidates', value: String(totalCandidates), icon: <UsersIcon className="w-6 h-6"/> },
// //         { title: 'Avg. Time to Hire', value: '32 days', icon: <RocketIcon className="w-6 h-6"/> },
// //         { title: 'Total Hired', value: String(hiredCount), icon: <BrainCircuitIcon className="w-6 h-6"/> },
// //     ];

// //     const funnelData = [
// //         { stage: 'Total Candidates', count: totalCandidates, color: 'bg-blue-500' },
// //         { stage: 'Screening', count: screeningCount, color: 'bg-indigo-500' },
// //         { stage: 'Interview', count: interviewCount, color: 'bg-purple-500' },
// //         { stage: 'Offer', count: hiredCount + Math.floor(hiredCount * 0.2), color: 'bg-pink-500' },
// //         { stage: 'Hired', count: hiredCount, color: 'bg-teal-500' },
// //     ];

// //     const listVariants = {
// //         hidden: { opacity: 0 },
// //         visible: {
// //             opacity: 1,
// //             transition: {
// //                 staggerChildren: 0.1
// //             }
// //         }
// //     };

// //     const itemVariants = {
// //         hidden: { opacity: 0, y: 20 },
// //         visible: { opacity: 1, y: 0 }
// //     };

// //     return (
// //         <div className="space-y-6">
// //             <motion.div
// //               className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
// //               variants={listVariants}
// //               initial="hidden"
// //               animate="visible"
// //             >
// //                 {kpiData.map((item, index) => (
// //                     <motion.div key={index} variants={itemVariants}>
// //                         <KpiCard title={item.title} value={item.value} icon={item.icon} />
// //                     </motion.div>
// //                 ))}
// //             </motion.div>

// //             <div className="grid gap-6 lg:grid-cols-3">
// //                 <MotionCard
// //                     className="lg:col-span-2"
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.2 }}
// //                 >
// //                     <CardHeader>
// //                         <CardTitle>Source of Hire</CardTitle>
// //                     </CardHeader>
// //                     <CardContent>
// //                         <div className="h-80"><SourceOfHireChart /></div>
// //                     </CardContent>
// //                 </MotionCard>
// //                 <MotionCard
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ delay: 0.3 }}
// //                 >
// //                     <CardHeader>
// //                         <CardTitle>Candidate Funnel</CardTitle>
// //                     </CardHeader>
// //                     <CardContent>
// //                         <ul className="space-y-4">
// //                             {funnelData.map((item, index) => (
// //                                 <li key={index}>
// //                                     <div className="flex justify-between text-sm font-medium mb-1">
// //                                         <span>{item.stage}</span>
// //                                         <span>{item.count}</span>
// //                                     </div>
// //                                     <div className="w-full bg-muted rounded-full h-2.5">
// //                                         <div
// //                                             className={`${item.color} h-2.5 rounded-full`}
// //                                             style={{ width: `${(item.count / funnelData[0].count) * 100}%` }}
// //                                         ></div>
// //                                     </div>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </CardContent>
// //                 </MotionCard>
// //             </div>

// //             <MotionCard
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 0.4 }}
// //             >
// //                 <CardHeader>
// //                    <div className="flex justify-between items-center">
// //                         <div>
// //                             <CardTitle>Active Job Postings</CardTitle>
// //                             <CardDescription>Click on a job to view details and rank candidates.</CardDescription>
// //                         </div>
// //                         <Button onClick={openNewJobModal}>New Job</Button>
// //                     </div>
// //                 </CardHeader>
// //                 <CardContent>
// //                     <div className="space-y-4">
// //                         {jobs.filter(j => j.status === 'Open').map(job => (
// //                             <div key={job.id} onClick={() => navigate(`/job/${job.id}`)}
// //                                 className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors">
// //                                 <div className="flex justify-between items-start">
// //                                     <div>
// //                                         <h4 className="font-semibold text-primary-btn dark:text-primary-btn-foreground">{job.title}</h4>
// //                                         <p className="text-sm text-muted-foreground">{job.department} &middot; {job.location}</p>
// //                                     </div>
// //                                     <span className="text-xs font-medium bg-secondary-btn text-secondary-btn-foreground px-2 py-1 rounded-full">{job.type}</span>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                          {jobs.filter(j => j.status === 'Closed').length > 0 && (
// //                             <div className="pt-4 mt-4 border-t border-border">
// //                                 <h4 className="text-sm font-semibold text-muted-foreground mb-2">Closed Postings</h4>
// //                                 {jobs.filter(j => j.status === 'Closed').map(job => (
// //                                     <div key={job.id} onClick={() => navigate(`/job/${job.id}`)}
// //                                         className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors opacity-60">
// //                                         <div className="flex justify-between items-start">
// //                                             <div>
// //                                                 <h4 className="font-semibold">{job.title}</h4>
// //                                                 <p className="text-sm text-muted-foreground">{job.department} &middot; {job.location}</p>
// //                                             </div>
// //                                             <span className="text-xs font-medium bg-destructive/20 text-destructive px-2 py-1 rounded-full">Closed</span>
// //                                         </div>
// //                                     </div>
// //                                 ))}
// //                             </div>
// //                         )}
// //                     </div>
// //                 </CardContent>
// //             </MotionCard>
// //         </div>
// //     );
// // };// FIX: Added full React import statement with all necessary hooks.
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Chart,
//   BarController,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// // FIX: Removed unused 'Card' import, as 'MotionCard' is used for the top-level wrappers.
// import {
//   CardHeader,
//   CardTitle,
//   CardContent,
//   KpiCard,
//   MotionCard,
//   CardDescription,
//   Button,
// } from "../components/ui";
// import { useAppContext } from "../context/AppContext";
// import {
//   BrainCircuitIcon,
//   UsersIcon,
//   FileTextIcon,
//   RocketIcon,
// } from "../components/icons";
// import { Job } from "../types";
// import { CandidateStatusPieChart } from "../components/charts/CandidateStatusPieChart";

// Chart.register(
//   BarController,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );

// const NewJobForm = ({
//   onSubmit,
//   onCancel,
// }: {
//   onSubmit: (job: Omit<Job, "id" | "status">) => void;
//   onCancel: () => void;
// }) => {
//   const [title, setTitle] = useState("");
//   const [department, setDepartment] = useState("");
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState<"Full-time" | "Part-time" | "Contract">(
//     "Full-time"
//   );
//   const [description, setDescription] = useState("");
//   const [requirements, setRequirements] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({
//       title,
//       department,
//       location,
//       type,
//       description,
//       requirements: requirements.split(",").map((r) => r.trim()),
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="title" className="block text-sm font-medium mb-1">
//           Job Title
//         </label>
//         <input
//           id="title"
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//           required
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label
//             htmlFor="department"
//             className="block text-sm font-medium mb-1"
//           >
//             Department
//           </label>
//           <input
//             id="department"
//             type="text"
//             value={department}
//             onChange={(e) => setDepartment(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="location" className="block text-sm font-medium mb-1">
//             Location
//           </label>
//           <input
//             id="location"
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//             required
//           />
//         </div>
//       </div>
//       <div>
//         <label htmlFor="type" className="block text-sm font-medium mb-1">
//           Job Type
//         </label>
//         <select
//           id="type"
//           value={type}
//           onChange={(e) => setType(e.target.value as any)}
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//         >
//           <option>Full-time</option>
//           <option>Part-time</option>
//           <option>Contract</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="description" className="block text-sm font-medium mb-1">
//           Description
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           rows={3}
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//           required
//         />
//       </div>
//       <div>
//         <label
//           htmlFor="requirements"
//           className="block text-sm font-medium mb-1"
//         >
//           Requirements (comma-separated)
//         </label>
//         <input
//           id="requirements"
//           type="text"
//           value={requirements}
//           onChange={(e) => setRequirements(e.target.value)}
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//           required
//         />
//       </div>
//       <div className="flex justify-end space-x-2 pt-4">
//         <Button type="button" variant="secondary" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button type="submit">Create Job</Button>
//       </div>
//     </form>
//   );
// };

// const SourceOfHireChart = () => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart | null>(null);
//   const { theme } = useAppContext();

//   useEffect(() => {
//     if (!chartRef.current) return;

//     const isDark = theme === "dark";
//     const gridColor = isDark
//       ? "rgba(255, 255, 255, 0.2)"
//       : "rgba(0, 0, 0, 0.1)";
//     const textColor = isDark ? "#e2e8f0" : "#334155";

//     const data = {
//       labels: ["LinkedIn", "Referrals", "Indeed", "Website", "Other"],
//       datasets: [
//         {
//           label: "Hires",
//           data: [18, 12, 9, 7, 3],
//           backgroundColor: [
//             "rgba(59, 130, 246, 0.7)",
//             "rgba(168, 85, 247, 0.7)",
//             "rgba(236, 72, 153, 0.7)",
//             "rgba(20, 184, 166, 0.7)",
//             "rgba(107, 114, 128, 0.7)",
//           ],
//           borderColor: [
//             "rgba(59, 130, 246, 1)",
//             "rgba(168, 85, 247, 1)",
//             "rgba(236, 72, 153, 1)",
//             "rgba(20, 184, 166, 1)",
//             "rgba(107, 114, 128, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     };

//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     chartInstance.current = new Chart(chartRef.current, {
//       type: "bar",
//       data: data,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: { display: false },
//           title: { display: false },
//         },
//         scales: {
//           y: {
//             beginAtZero: true,
//             ticks: { color: textColor },
//             grid: { color: gridColor },
//           },
//           x: {
//             ticks: { color: textColor },
//             grid: { display: false },
//           },
//         },
//       },
//     });

//     return () => {
//       chartInstance.current?.destroy();
//     };
//   }, [theme]);

//   return <canvas ref={chartRef} />;
// };

// export const DashboardPage = () => {
//   const navigate = useNavigate();
//   const { showModal, hideModal, jobs, candidates, addJob } = useAppContext();

//   const handleAddNewJob = (newJobData: Omit<Job, "id" | "status">) => {
//     addJob(newJobData);
//     hideModal();
//   };

//   const openNewJobModal = () => {
//     showModal(
//       <NewJobForm onSubmit={handleAddNewJob} onCancel={hideModal} />,
//       "Create New Job Posting"
//     );
//   };

//   const openPositions = jobs.filter((j) => j.status === "Open").length;
//   const totalCandidates = candidates.length;
//   const hiredCount = candidates.filter((c) => c.status === "Hired").length;

//   const kpiData = [
//     {
//       title: "Open Positions",
//       value: String(openPositions),
//       icon: <FileTextIcon className="w-6 h-6" />,
//     },
//     {
//       title: "Total Candidates",
//       value: String(totalCandidates),
//       icon: <UsersIcon className="w-6 h-6" />,
//     },
//     {
//       title: "Avg. Time to Hire",
//       value: "32 days",
//       icon: <RocketIcon className="w-6 h-6" />,
//     },
//     {
//       title: "Total Hired",
//       value: String(hiredCount),
//       icon: <BrainCircuitIcon className="w-6 h-6" />,
//     },
//   ];

//   const listVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="space-y-6">
//       <motion.div
//         className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
//         variants={listVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {kpiData.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={itemVariants}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <KpiCard title={item.title} value={item.value} icon={item.icon} />
//           </motion.div>
//         ))}
//       </motion.div>

//       <div className="grid gap-6 lg:grid-cols-5">
//         <MotionCard
//           className="lg:col-span-3"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <CardHeader>
//             <CardTitle>Source of Hire</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-80">
//               <SourceOfHireChart />
//             </div>
//           </CardContent>
//         </MotionCard>
//         <MotionCard
//           className="lg:col-span-2"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <CardHeader>
//             <CardTitle>Candidates by Status</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-80">
//               <CandidateStatusPieChart />
//             </div>
//           </CardContent>
//         </MotionCard>
//       </div>

//       <MotionCard
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <div>
//               <CardTitle>Active Job Postings</CardTitle>
//               <CardDescription>
//                 Click on a job to view details and rank candidates.
//               </CardDescription>
//             </div>
//             <Button onClick={openNewJobModal}>New Job</Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {jobs
//               .filter((j) => j.status === "Open")
//               .map((job) => (
//                 <motion.div
//                   key={job.id}
//                   onClick={() => navigate(`/job/${job.id}`)}
//                   className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
//                   whileHover={{ scale: 1.02, x: 5 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h4 className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
//                         {job.title}
//                       </h4>
//                       <p className="text-sm text-muted-foreground">
//                         {job.department} · {job.location}
//                       </p>
//                     </div>
//                     <span className="text-xs font-medium bg-secondary-btn text-secondary-btn-foreground px-2 py-1 rounded-full">
//                       {job.type}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
//             {jobs.filter((j) => j.status === "Closed").length > 0 && (
//               <div className="pt-4 mt-4 border-t border-border">
//                 <h4 className="text-sm font-semibold text-muted-foreground mb-2">
//                   Closed Postings
//                 </h4>
//                 {jobs
//                   .filter((j) => j.status === "Closed")
//                   .map((job) => (
//                     <div
//                       key={job.id}
//                       onClick={() => navigate(`/job/${job.id}`)}
//                       className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors opacity-60"
//                     >
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h4 className="font-semibold">{job.title}</h4>
//                           <p className="text-sm text-muted-foreground">
//                             {job.department} · {job.location}
//                           </p>
//                         </div>
//                         <span className="text-xs font-medium bg-destructive/20 text-destructive px-2 py-1 rounded-full">
//                           Closed
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </MotionCard>
//     </div>
//   );
// };
// FIX: Ensured React and all necessary hooks are explicitly imported.
import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
// FIX: Removed the unused 'Card' import.
import {
  CardHeader,
  CardTitle,
  CardContent,
  KpiCard,
  MotionCard,
  CardDescription,
  Button,
} from "../components/ui";
import { useAppContext } from "../context/AppContext";
import {
  BrainCircuitIcon,
  UsersIcon,
  FileTextIcon,
  RocketIcon,
} from "../components/icons";
import { Job } from "../types";
import { CandidateStatusPieChart } from "../components/charts/CandidateStatusPieChart";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const NewJobForm = ({
  onSubmit,
  onCancel,
}: {
  onSubmit: (job: Omit<Job, "id" | "status">) => void;
  onCancel: () => void;
}) => {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState<"Full-time" | "Part-time" | "Contract">(
    "Full-time"
  );
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      department,
      location,
      type,
      description,
      requirements: requirements.split(",").map((r) => r.trim()),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Job Title
        </label>
        {/* FIX: Added explicit types for all onChange events */}
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="department"
            className="block text-sm font-medium mb-1"
          >
            Department
          </label>
          <input
            id="department"
            type="text"
            value={department}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDepartment(e.target.value)
            }
            className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLocation(e.target.value)
            }
            className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium mb-1">
          Job Type
        </label>
        <select
          id="type"
          value={type}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setType(e.target.value as any)
          }
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
        </select>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          rows={3}
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
          required
        />
      </div>
      <div>
        <label
          htmlFor="requirements"
          className="block text-sm font-medium mb-1"
        >
          Requirements (comma-separated)
        </label>
        <input
          id="requirements"
          type="text"
          value={requirements}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRequirements(e.target.value)
          }
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
          required
        />
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create Job</Button>
      </div>
    </form>
  );
};

const SourceOfHireChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const { theme } = useAppContext();

  useEffect(() => {
    if (!chartRef.current) return;

    const isDark = theme === "dark";
    const gridColor = isDark
      ? "rgba(255, 255, 255, 0.2)"
      : "rgba(0, 0, 0, 0.1)";
    const textColor = isDark ? "#e2e8f0" : "#334155";

    const data = {
      labels: ["LinkedIn", "Referrals", "Indeed", "Website", "Other"],
      datasets: [
        {
          label: "Hires",
          data: [18, 12, 9, 7, 3],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(168, 85, 247, 0.7)",
            "rgba(236, 72, 153, 0.7)",
            "rgba(20, 184, 166, 0.7)",
            "rgba(107, 114, 128, 0.7)",
          ],
          borderColor: [
            "rgba(59, 130, 246, 1)",
            "rgba(168, 85, 247, 1)",
            "rgba(236, 72, 153, 1)",
            "rgba(20, 184, 166, 1)",
            "rgba(107, 114, 128, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: textColor },
            grid: { color: gridColor },
          },
          x: {
            ticks: { color: textColor },
            grid: { display: false },
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, [theme]);

  return <canvas ref={chartRef} />;
};

export const DashboardPage = () => {
  const navigate = useNavigate();
  const { showModal, hideModal, jobs, candidates, addJob } = useAppContext();

  const handleAddNewJob = (newJobData: Omit<Job, "id" | "status">) => {
    addJob(newJobData);
    hideModal();
  };

  const openNewJobModal = () => {
    showModal(
      <NewJobForm onSubmit={handleAddNewJob} onCancel={hideModal} />,
      "Create New Job Posting"
    );
  };

  const openPositions = jobs.filter((j) => j.status === "Open").length;
  const totalCandidates = candidates.length;
  const hiredCount = candidates.filter((c) => c.status === "Hired").length;

  const kpiData = [
    {
      title: "Open Positions",
      value: String(openPositions),
      icon: <FileTextIcon className="w-6 h-6" />,
    },
    {
      title: "Total Candidates",
      value: String(totalCandidates),
      icon: <UsersIcon className="w-6 h-6" />,
    },
    {
      title: "Avg. Time to Hire",
      value: "32 days",
      icon: <RocketIcon className="w-6 h-6" />,
    },
    {
      title: "Total Hired",
      value: String(hiredCount),
      icon: <BrainCircuitIcon className="w-6 h-6" />,
    },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {kpiData.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <KpiCard title={item.title} value={item.value} icon={item.icon} />
          </motion.div>
        ))}
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-5">
        <MotionCard
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <CardHeader>
            <CardTitle>Source of Hire</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <SourceOfHireChart />
            </div>
          </CardContent>
        </MotionCard>
        <MotionCard
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <CardHeader>
            <CardTitle>Candidates by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <CandidateStatusPieChart />
            </div>
          </CardContent>
        </MotionCard>
      </div>

      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Active Job Postings</CardTitle>
              <CardDescription>
                Click on a job to view details and rank candidates.
              </CardDescription>
            </div>
            <Button onClick={openNewJobModal}>New Job</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {jobs
              .filter((j) => j.status === "Open")
              .map((job) => (
                <motion.div
                  key={job.id}
                  onClick={() => navigate(`/job/${job.id}`)}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
                        {job.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {job.department} · {job.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium bg-secondary-btn text-secondary-btn-foreground px-2 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            {jobs.filter((j) => j.status === "Closed").length > 0 && (
              <div className="pt-4 mt-4 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">
                  Closed Postings
                </h4>
                {jobs
                  .filter((j) => j.status === "Closed")
                  .map((job) => (
                    <div
                      key={job.id}
                      onClick={() => navigate(`/job/${job.id}`)}
                      className="p-4 border border-border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors opacity-60"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{job.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {job.department} · {job.location}
                          </p>
                        </div>
                        <span className="text-xs font-medium bg-destructive/20 text-destructive px-2 py-1 rounded-full">
                          Closed
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </CardContent>
      </MotionCard>
    </div>
  );
};
