// // // // import React, { useState, useCallback } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import { Button, Card, CardContent, CardHeader, CardTitle, MotionCard, CardDescription } from '../components/ui';
// // // // import { PerformanceEvaluation } from '../types';
// // // // import { evaluatePerformanceWithAI } from '../services/geminiService';
// // // // import { BrainCircuitIcon, TrendingUpIcon } from '../components/icons';
// // // // import { useAppContext } from '../context/AppContext';

// // // // const formatCurrency = (value: number) => {
// // // //     return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);
// // // // };

// // // // const PerformanceEvaluationCard: React.FC<{ evaluation: PerformanceEvaluation; onApprove: (evaluation: PerformanceEvaluation) => void; isActioned: boolean }> = ({ evaluation, onApprove, isActioned }) => {
// // // //     const confidenceColor = evaluation.confidenceScore > 0.8 ? 'text-green-500' : evaluation.confidenceScore > 0.6 ? 'text-yellow-500' : 'text-red-500';

// // // //     let suggestionText;
// // // //     if (evaluation.suggestion === 'Promote' && evaluation.suggestedRole) {
// // // //         suggestionText = <>Promote to <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">{evaluation.suggestedRole}</span></>;
// // // //     } else if (evaluation.suggestion === 'Salary Increment' && evaluation.suggestedSalary) {
// // // //         suggestionText = <>Salary Hike to <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">{formatCurrency(evaluation.suggestedSalary)}</span></>;
// // // //     } else {
// // // //         suggestionText = 'Maintain Current Status';
// // // //     }

// // // //     return (
// // // //         <MotionCard
// // // //             layout
// // // //             initial={{ opacity: 0, scale: 0.95 }}
// // // //             animate={{ opacity: 1, scale: 1 }}
// // // //             exit={{ opacity: 0 }}
// // // //         >
// // // //             <CardHeader>
// // // //                 <div className="flex justify-between items-start">
// // // //                     <div>
// // // //                         <CardTitle>{evaluation.employeeName}</CardTitle>
// // // //                         <CardDescription>{suggestionText}</CardDescription>
// // // //                     </div>
// // // //                     <div className="text-right">
// // // //                         <p className="text-sm text-muted-foreground">Confidence</p>
// // // //                         <p className={`font-bold text-lg ${confidenceColor}`}>{Math.round(evaluation.confidenceScore * 100)}%</p>
// // // //                     </div>
// // // //                 </div>
// // // //             </CardHeader>
// // // //             <CardContent className="space-y-4">
// // // //                 <div>
// // // //                     <h4 className="font-semibold mb-1 text-sm">AI Reasoning:</h4>
// // // //                     <p className="text-sm text-muted-foreground">{evaluation.reasoning}</p>
// // // //                 </div>
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                     <div>
// // // //                         <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">Strengths</h4>
// // // //                         <ul className="list-disc list-inside space-y-1 text-sm">
// // // //                             {evaluation.strengths.map((s, i) => <li key={i}>{s}</li>)}
// // // //                         </ul>
// // // //                     </div>
// // // //                     <div>
// // // //                         <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">Weaknesses</h4>
// // // //                         <ul className="list-disc list-inside space-y-1 text-sm">
// // // //                             {evaluation.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
// // // //                         </ul>
// // // //                     </div>
// // // //                 </div>
// // // //                 {evaluation.suggestion !== 'Maintain' && (
// // // //                      <div className="flex justify-end pt-2 border-t border-border">
// // // //                         <Button size="sm" onClick={() => onApprove(evaluation)} disabled={isActioned}>
// // // //                             {isActioned ? 'Suggestion Approved' : 'Approve Suggestion'}
// // // //                         </Button>
// // // //                     </div>
// // // //                 )}
// // // //             </CardContent>
// // // //         </MotionCard>
// // // //     );
// // // // };

// // // // export const PerformancePage = () => {
// // // //     const { employees, updateEmployee } = useAppContext();
// // // //     const [evaluations, setEvaluations] = useState<PerformanceEvaluation[]>([]);
// // // //     const [isLoading, setIsLoading] = useState(false);
// // // //     const [error, setError] = useState<string | null>(null);

// // // //     const handleGetEvaluations = useCallback(async () => {
// // // //         setIsLoading(true);
// // // //         setError(null);
// // // //         setEvaluations([]);
// // // //         try {
// // // //             const result = await evaluatePerformanceWithAI(employees);
// // // //             setEvaluations(result);
// // // //         } catch (e: any) {
// // // //             setError(e.message || "An unknown error occurred.");
// // // //         } finally {
// // // //             setIsLoading(false);
// // // //         }
// // // //     }, [employees]);

// // // //     const handleApproveSuggestion = (evaluation: PerformanceEvaluation) => {
// // // //         const updates: Partial<typeof employees[0]> = {
// // // //             lastPromotionDate: new Date().toISOString().split('T')[0]
// // // //         };
// // // //         if(evaluation.suggestion === 'Promote' && evaluation.suggestedRole) {
// // // //             updates.role = evaluation.suggestedRole;
// // // //         }
// // // //         if (evaluation.suggestion === 'Salary Increment' && evaluation.suggestedSalary) {
// // // //             updates.salary = evaluation.suggestedSalary;
// // // //         }
// // // //         updateEmployee(evaluation.employeeId, updates);
// // // //     };

// // // //     const containerVariants = {
// // // //         hidden: { opacity: 1 },
// // // //         visible: {
// // // //             opacity: 1,
// // // //             transition: { staggerChildren: 0.05 }
// // // //         }
// // // //     };

// // // //     const itemVariants = {
// // // //         hidden: { y: 20, opacity: 0 },
// // // //         visible: { y: 0, opacity: 1 }
// // // //     };

// // // //     return (
// // // //         <div className="space-y-6">
// // // //             <Card>
// // // //                 <CardHeader>
// // // //                     <CardTitle>AI Employee Performance Evaluation</CardTitle>
// // // //                     <CardDescription>Use AI to analyze performance data and identify employees eligible for promotion or salary increases.</CardDescription>
// // // //                 </CardHeader>
// // // //                 <CardContent className="text-center space-y-4">
// // // //                     <Button onClick={handleGetEvaluations} isLoading={isLoading} disabled={isLoading}>
// // // //                          <TrendingUpIcon className="w-5 h-5 mr-2" />
// // // //                         {isLoading ? 'Analyzing Performance Data...' : 'Generate AI Evaluations'}
// // // //                     </Button>
// // // //                      <div className="text-center text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
// // // //                         <BrainCircuitIcon className="w-4 h-4 inline-block mr-1" />
// // // //                         <strong>AI is used as a suggestion tool.</strong> Final promotion decisions must be made by human HR/admin staff.
// // // //                     </div>
// // // //                 </CardContent>
// // // //             </Card>

// // // //             <AnimatePresence>
// // // //                 {error && (
// // // //                      <motion.div
// // // //                         initial={{ opacity: 0 }}
// // // //                         animate={{ opacity: 1 }}
// // // //                         exit={{ opacity: 0 }}
// // // //                         className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
// // // //                     >
// // // //                         {error}
// // // //                     </motion.div>
// // // //                 )}
// // // //             </AnimatePresence>

// // // //             {evaluations.length > 0 && (
// // // //                  <div className="space-y-4">
// // // //                     <h3 className="text-2xl font-bold text-center">AI Evaluation Results</h3>
// // // //                     <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
// // // //                         {evaluations.map(evaluation => {
// // // //                             const employee = employees.find(e => e.id === evaluation.employeeId);
// // // //                             const isActioned = (evaluation.suggestion === 'Promote' && employee?.role === evaluation.suggestedRole) || (evaluation.suggestion === 'Salary Increment' && employee?.salary === evaluation.suggestedSalary);
// // // //                             return <PerformanceEvaluationCard key={evaluation.employeeId} evaluation={evaluation} onApprove={handleApproveSuggestion} isActioned={isActioned} />
// // // //                         })}
// // // //                     </div>
// // // //                  </div>
// // // //             )}

// // // //             <Card>
// // // //                 <CardHeader>
// // // //                     <CardTitle>Employee Directory</CardTitle>
// // // //                     <CardDescription>List of all current employees and their performance metrics.</CardDescription>
// // // //                 </CardHeader>
// // // //                 <CardContent>
// // // //                     <motion.div
// // // //                         className="overflow-x-auto"
// // // //                         variants={containerVariants}
// // // //                         initial="hidden"
// // // //                         animate="visible"
// // // //                     >
// // // //                         <table className="w-full text-sm text-left">
// // // //                             <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
// // // //                                 <tr>
// // // //                                     <th className="px-6 py-3">Name</th>
// // // //                                     <th className="px-6 py-3">Role</th>
// // // //                                     <th className="px-6 py-3">Salary</th>
// // // //                                     <th className="px-6 py-3 text-center">Manager Rating</th>
// // // //                                     <th className="px-6 py-3 text-center">Performance</th>
// // // //                                 </tr>
// // // //                             </thead>
// // // //                             <tbody>
// // // //                                 {employees.map(emp => (
// // // //                                     <motion.tr key={emp.id} className="border-b border-border hover:bg-muted/50" variants={itemVariants}>
// // // //                                         <td className="px-6 py-4 font-medium">{emp.name}</td>
// // // //                                         <td className="px-6 py-4">{emp.role}</td>
// // // //                                         <td className="px-6 py-4">{formatCurrency(emp.salary)}</td>
// // // //                                         <td className="px-6 py-4 text-center">{emp.managerRating} / 5</td>
// // // //                                         <td className="px-6 py-4 text-center">{emp.performanceScore} / 5</td>
// // // //                                     </tr >
// // // //                                 ))}
// // // //                             </tbody>
// // // //                         </table>
// // // //                     </motion.div>
// // // //                 </CardContent>
// // // //             </Card>
// // // //         </div>
// // // //     );
// // // // };import React, { useState, useCallback } from 'react';
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   Button,
// // //   Card,
// // //   CardContent,
// // //   CardHeader,
// // //   CardTitle,
// // //   MotionCard,
// // //   CardDescription,
// // // } from "../components/ui";
// // // import { PerformanceEvaluation } from "../types";
// // // import { evaluatePerformanceWithAI } from "../services/geminiService";
// // // import { BrainCircuitIcon, TrendingUpIcon } from "../components/icons";
// // // import { useAppContext } from "../context/AppContext";

// // // const formatCurrency = (value: number) => {
// // //   return new Intl.NumberFormat("en-US", {
// // //     style: "currency",
// // //     currency: "USD",
// // //     minimumFractionDigits: 0,
// // //     maximumFractionDigits: 0,
// // //   }).format(value);
// // // };

// // // const PerformanceEvaluationCard: React.FC<{
// // //   evaluation: PerformanceEvaluation;
// // //   onApprove: (evaluation: PerformanceEvaluation) => void;
// // //   isActioned: boolean;
// // // }> = ({ evaluation, onApprove, isActioned }) => {
// // //   const confidenceColor =
// // //     evaluation.confidenceScore > 0.8
// // //       ? "text-green-500"
// // //       : evaluation.confidenceScore > 0.6
// // //       ? "text-yellow-500"
// // //       : "text-red-500";

// // //   let suggestionText;
// // //   if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
// // //     suggestionText = (
// // //       <>
// // //         Promote to{" "}
// // //         <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
// // //           {evaluation.suggestedRole}
// // //         </span>
// // //       </>
// // //     );
// // //   } else if (
// // //     evaluation.suggestion === "Salary Increment" &&
// // //     evaluation.suggestedSalary
// // //   ) {
// // //     suggestionText = (
// // //       <>
// // //         Salary Hike to{" "}
// // //         <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
// // //           {formatCurrency(evaluation.suggestedSalary)}
// // //         </span>
// // //       </>
// // //     );
// // //   } else {
// // //     suggestionText = "Maintain Current Status";
// // //   }

// // //   return (
// // //     <MotionCard
// // //       layout
// // //       initial={{ opacity: 0, scale: 0.95 }}
// // //       animate={{ opacity: 1, scale: 1 }}
// // //       exit={{ opacity: 0 }}
// // //     >
// // //       <CardHeader>
// // //         <div className="flex justify-between items-start">
// // //           <div>
// // //             <CardTitle>{evaluation.employeeName}</CardTitle>
// // //             <CardDescription>{suggestionText}</CardDescription>
// // //           </div>
// // //           <div className="text-right">
// // //             <p className="text-sm text-muted-foreground">Confidence</p>
// // //             {/* FIX: Used template literal for className */}
// // //             <p className={`font-bold text-lg ${confidenceColor}`}>
// // //               {Math.round(evaluation.confidenceScore * 100)}%
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent className="space-y-4">
// // //         <div>
// // //           <h4 className="font-semibold mb-1 text-sm">AI Reasoning:</h4>
// // //           <p className="text-sm text-muted-foreground">
// // //             {evaluation.reasoning}
// // //           </p>
// // //         </div>
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           <div>
// // //             <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
// // //               Strengths
// // //             </h4>
// // //             <ul className="list-disc list-inside space-y-1 text-sm">
// // //               {evaluation.strengths.map((s, i) => (
// // //                 <li key={i}>{s}</li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //           <div>
// // //             <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
// // //               Weaknesses
// // //             </h4>
// // //             <ul className="list-disc list-inside space-y-1 text-sm">
// // //               {evaluation.weaknesses.map((w, i) => (
// // //                 <li key={i}>{w}</li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </div>
// // //         {evaluation.suggestion !== "Maintain" && (
// // //           <div className="flex justify-end pt-2 border-t border-border">
// // //             <Button
// // //               size="sm"
// // //               onClick={() => onApprove(evaluation)}
// // //               disabled={isActioned}
// // //             >
// // //               {isActioned ? "Suggestion Approved" : "Approve Suggestion"}
// // //             </Button>
// // //           </div>
// // //         )}
// // //       </CardContent>
// // //     </MotionCard>
// // //   );
// // // };

// // // export const PerformancePage = () => {
// // //   const { employees, updateEmployee } = useAppContext();
// // //   const [evaluations, setEvaluations] = useState<PerformanceEvaluation[]>([]);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState<string | null>(null);

// // //   const handleGetEvaluations = useCallback(async () => {
// // //     setIsLoading(true);
// // //     setError(null);
// // //     setEvaluations([]);
// // //     try {
// // //       const result = await evaluatePerformanceWithAI(employees);
// // //       setEvaluations(result);
// // //     } catch (e: any) {
// // //       setError(e.message || "An unknown error occurred.");
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   }, [employees]);

// // //   const handleApproveSuggestion = (evaluation: PerformanceEvaluation) => {
// // //     const updates: Partial<(typeof employees)[0]> = {
// // //       lastPromotionDate: new Date().toISOString().split("T")[0],
// // //     };
// // //     if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
// // //       updates.role = evaluation.suggestedRole;
// // //     }
// // //     if (
// // //       evaluation.suggestion === "Salary Increment" &&
// // //       evaluation.suggestedSalary
// // //     ) {
// // //       updates.salary = evaluation.suggestedSalary;
// // //     }
// // //     updateEmployee(evaluation.employeeId, updates);
// // //   };

// // //   const containerVariants = {
// // //     hidden: { opacity: 1 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: { staggerChildren: 0.05 },
// // //     },
// // //   };

// // //   const itemVariants = {
// // //     hidden: { y: 20, opacity: 0 },
// // //     visible: { y: 0, opacity: 1 },
// // //   };

// // //   return (
// // //     <div className="space-y-6">
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>AI Employee Performance Evaluation</CardTitle>
// // //           <CardDescription>
// // //             Use AI to analyze performance data and identify employees eligible
// // //             for promotion or salary increases.
// // //           </CardDescription>
// // //         </CardHeader>
// // //         <CardContent className="text-center space-y-4">
// // //           <Button
// // //             onClick={handleGetEvaluations}
// // //             isLoading={isLoading}
// // //             disabled={isLoading}
// // //           >
// // //             <TrendingUpIcon className="w-5 h-5 mr-2" />
// // //             {isLoading
// // //               ? "Analyzing Performance Data..."
// // //               : "Generate AI Evaluations"}
// // //           </Button>
// // //           <div className="text-center text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
// // //             <BrainCircuitIcon className="w-4 h-4 inline-block mr-1" />
// // //             <strong>AI is used as a suggestion tool.</strong> Final promotion
// // //             decisions must be made by human HR/admin staff.
// // //           </div>
// // //         </CardContent>
// // //       </Card>

// // //       <AnimatePresence>
// // //         {error && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
// // //           >
// // //             {error}
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>

// // //       {evaluations.length > 0 && (
// // //         <div className="space-y-4">
// // //           <h3 className="text-2xl font-bold text-center">
// // //             AI Evaluation Results
// // //           </h3>
// // //           <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
// // //             {evaluations.map((evaluation) => {
// // //               const employee = employees.find(
// // //                 (e) => e.id === evaluation.employeeId
// // //               );
// // //               const isActioned =
// // //                 (evaluation.suggestion === "Promote" &&
// // //                   employee?.role === evaluation.suggestedRole) ||
// // //                 (evaluation.suggestion === "Salary Increment" &&
// // //                   employee?.salary === evaluation.suggestedSalary);
// // //               return (
// // //                 <PerformanceEvaluationCard
// // //                   key={evaluation.employeeId}
// // //                   evaluation={evaluation}
// // //                   onApprove={handleApproveSuggestion}
// // //                   isActioned={isActioned}
// // //                 />
// // //               );
// // //             })}
// // //           </div>
// // //         </div>
// // //       )}

// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Employee Directory</CardTitle>
// // //           <CardDescription>
// // //             List of all current employees and their performance metrics.
// // //           </CardDescription>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <motion.div
// // //             className="overflow-x-auto"
// // //             variants={containerVariants}
// // //             initial="hidden"
// // //             animate="visible"
// // //           >
// // //             <table className="w-full text-sm text-left">
// // //               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
// // //                 <tr>
// // //                   <th className="px-6 py-3">Name</th>
// // //                   <th className="px-6 py-3">Role</th>
// // //                   <th className="px-6 py-3">Salary</th>
// // //                   <th className="px-6 py-3 text-center">Manager Rating</th>
// // //                   <th className="px-6 py-3 text-center">Performance</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {employees.map((emp) => (
// // //                   <motion.tr
// // //                     key={emp.id}
// // //                     className="border-b border-border hover:bg-muted/50"
// // //                     variants={itemVariants}
// // //                   >
// // //                     <td className="px-6 py-4 font-medium">{emp.name}</td>
// // //                     <td className="px-6 py-4">{emp.role}</td>
// // //                     <td className="px-6 py-4">{formatCurrency(emp.salary)}</td>
// // //                     <td className="px-6 py-4 text-center">
// // //                       {emp.managerRating} / 5
// // //                     </td>
// // //                     <td className="px-6 py-4 text-center">
// // //                       {emp.performanceScore} / 5
// // //                     </td>
// // //                     {/* FIX: Changed </tr> to </motion.tr> to match the opening tag */}
// // //                   </motion.tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </motion.div>
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   );
// // // };
// // // FIX: Make sure all necessary hooks and types are imported from React
// // import React, { useState, useCallback } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Button,
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle,
// //   MotionCard,
// //   CardDescription,
// // } from "../components/ui";
// // import { PerformanceEvaluation } from "../types";
// // import { evaluatePerformanceWithAI } from "../services/geminiService";
// // import { BrainCircuitIcon, TrendingUpIcon } from "../components/icons";
// // import { useAppContext } from "../context/AppContext";

// // const formatCurrency = (value: number) => {
// //   return new Intl.NumberFormat("en-US", {
// //     style: "currency",
// //     currency: "USD",
// //     minimumFractionDigits: 0,
// //     maximumFractionDigits: 0,
// //   }).format(value);
// // };

// // // The props for this component are already correctly typed. No changes needed here.
// // const PerformanceEvaluationCard: React.FC<{
// //   evaluation: PerformanceEvaluation;
// //   onApprove: (evaluation: PerformanceEvaluation) => void;
// //   isActioned: boolean;
// // }> = ({ evaluation, onApprove, isActioned }) => {
// //   const confidenceColor =
// //     evaluation.confidenceScore > 0.8
// //       ? "text-green-500"
// //       : evaluation.confidenceScore > 0.6
// //       ? "text-yellow-500"
// //       : "text-red-500";

// //   let suggestionText;
// //   if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
// //     suggestionText = (
// //       <>
// //         Promote to{" "}
// //         <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
// //           {evaluation.suggestedRole}
// //         </span>
// //       </>
// //     );
// //   } else if (
// //     evaluation.suggestion === "Salary Increment" &&
// //     evaluation.suggestedSalary
// //   ) {
// //     suggestionText = (
// //       <>
// //         Salary Hike to{" "}
// //         <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
// //           {formatCurrency(evaluation.suggestedSalary)}
// //         </span>
// //       </>
// //     );
// //   } else {
// //     suggestionText = "Maintain Current Status";
// //   }

// //   return (
// //     <MotionCard
// //       layout
// //       initial={{ opacity: 0, scale: 0.95 }}
// //       animate={{ opacity: 1, scale: 1 }}
// //       exit={{ opacity: 0 }}
// //     >
// //       <CardHeader>
// //         <div className="flex justify-between items-start">
// //           <div>
// //             <CardTitle>{evaluation.employeeName}</CardTitle>
// //             <CardDescription>{suggestionText}</CardDescription>
// //           </div>
// //           <div className="text-right">
// //             <p className="text-sm text-muted-foreground">Confidence</p>
// //             <p className={`font-bold text-lg ${confidenceColor}`}>
// //               {Math.round(evaluation.confidenceScore * 100)}%
// //             </p>
// //           </div>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="space-y-4">
// //         <div>
// //           <h4 className="font-semibold mb-1 text-sm">AI Reasoning:</h4>
// //           <p className="text-sm text-muted-foreground">
// //             {evaluation.reasoning}
// //           </p>
// //         </div>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //           <div>
// //             <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
// //               Strengths
// //             </h4>
// //             <ul className="list-disc list-inside space-y-1 text-sm">
// //               {evaluation.strengths.map((s, i) => (
// //                 <li key={i}>{s}</li>
// //               ))}
// //             </ul>
// //           </div>
// //           <div>
// //             <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
// //               Weaknesses
// //             </h4>
// //             <ul className="list-disc list-inside space-y-1 text-sm">
// //               {evaluation.weaknesses.map((w, i) => (
// //                 <li key={i}>{w}</li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //         {evaluation.suggestion !== "Maintain" && (
// //           <div className="flex justify-end pt-2 border-t border-border">
// //             <Button
// //               size="sm"
// //               onClick={() => onApprove(evaluation)}
// //               disabled={isActioned}
// //             >
// //               {isActioned ? "Suggestion Approved" : "Approve Suggestion"}
// //             </Button>
// //           </div>
// //         )}
// //       </CardContent>
// //     </MotionCard>
// //   );
// // };

// // export const PerformancePage = () => {
// //   const { employees, updateEmployee } = useAppContext();
// //   const [evaluations, setEvaluations] = useState<PerformanceEvaluation[]>([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState<string | null>(null);

// //   const handleGetEvaluations = useCallback(async () => {
// //     setIsLoading(true);
// //     setError(null);
// //     setEvaluations([]);
// //     try {
// //       const result = await evaluatePerformanceWithAI(employees);
// //       setEvaluations(result);
// //     } catch (e: any) {
// //       setError(e.message || "An unknown error occurred.");
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   }, [employees]);

// //   const handleApproveSuggestion = (evaluation: PerformanceEvaluation) => {
// //     const updates: Partial<(typeof employees)[0]> = {
// //       lastPromotionDate: new Date().toISOString().split("T")[0],
// //     };
// //     if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
// //       updates.role = evaluation.suggestedRole;
// //     }
// //     if (
// //       evaluation.suggestion === "Salary Increment" &&
// //       evaluation.suggestedSalary
// //     ) {
// //       updates.salary = evaluation.suggestedSalary;
// //     }
// //     updateEmployee(evaluation.employeeId, updates);
// //   };

// //   const containerVariants = {
// //     hidden: { opacity: 1 },
// //     visible: {
// //       opacity: 1,
// //       transition: { staggerChildren: 0.05 },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { y: 0, opacity: 1 },
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>AI Employee Performance Evaluation</CardTitle>
// //           <CardDescription>
// //             Use AI to analyze performance data and identify employees eligible
// //             for promotion or salary increases.
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent className="text-center space-y-4">
// //           <Button
// //             onClick={handleGetEvaluations}
// //             isLoading={isLoading}
// //             disabled={isLoading}
// //           >
// //             <TrendingUpIcon className="w-5 h-5 mr-2" />
// //             {isLoading
// //               ? "Analyzing Performance Data..."
// //               : "Generate AI Evaluations"}
// //           </Button>
// //           <div className="text-center text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
// //             <BrainCircuitIcon className="w-4 h-4 inline-block mr-1" />
// //             <strong>AI is used as a suggestion tool.</strong> Final promotion
// //             decisions must be made by human HR/admin staff.
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <AnimatePresence>
// //         {error && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
// //           >
// //             {error}
// //           </motion.div>
// //         )}
// //       </AnimatePresence>

// //       {evaluations.length > 0 && (
// //         <div className="space-y-4">
// //           <h3 className="text-2xl font-bold text-center">
// //             AI Evaluation Results
// //           </h3>
// //           <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
// //             {/* FIX: Add the 'PerformanceEvaluation' type to the parameter */}
// //             {evaluations.map((evaluation: PerformanceEvaluation) => {
// //               const employee = employees.find(
// //                 (e) => e.id === evaluation.employeeId
// //               );
// //               const isActioned =
// //                 !!employee &&
// //                 ((evaluation.suggestion === "Promote" &&
// //                   employee.role === evaluation.suggestedRole) ||
// //                   (evaluation.suggestion === "Salary Increment" &&
// //                     employee.salary === evaluation.suggestedSalary));
// //               return (
// //                 <PerformanceEvaluationCard
// //                   key={evaluation.employeeId}
// //                   evaluation={evaluation}
// //                   onApprove={handleApproveSuggestion}
// //                   isActioned={isActioned}
// //                 />
// //               );
// //             })}
// //           </div>
// //         </div>
// //       )}

// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Employee Directory</CardTitle>
// //           <CardDescription>
// //             List of all current employees and their performance metrics.
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           <motion.div
// //             className="overflow-x-auto"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             <table className="w-full text-sm text-left">
// //               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
// //                 <tr>
// //                   <th className="px-6 py-3">Name</th>
// //                   <th className="px-6 py-3">Role</th>
// //                   <th className="px-6 py-3">Salary</th>
// //                   <th className="px-6 py-3 text-center">Manager Rating</th>
// //                   <th className="px-6 py-3 text-center">Performance</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {employees.map((emp) => (
// //                   <motion.tr
// //                     key={emp.id}
// //                     className="border-b border-border hover:bg-muted/50"
// //                     variants={itemVariants}
// //                   >
// //                     <td className="px-6 py-4 font-medium">{emp.name}</td>
// //                     <td className="px-6 py-4">{emp.role}</td>
// //                     <td className="px-6 py-4">{formatCurrency(emp.salary)}</td>
// //                     <td className="px-6 py-4 text-center">
// //                       {emp.managerRating} / 5
// //                     </td>
// //                     <td className="px-6 py-4 text-center">
// //                       {emp.performanceScore} / 5
// //                     </td>
// //                   </motion.tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </motion.div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };
// // FIX: Ensured all React hooks are imported.
// import React, { useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Button,
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   MotionCard,
//   CardDescription,
// } from "../components/ui";
// // FIX: Ensured types are imported.
// import { Employee, PerformanceEvaluation } from "../types";
// import { evaluatePerformanceWithAI } from "../services/geminiService";
// import { BrainCircuitIcon, TrendingUpIcon } from "../components/icons";
// import { useAppContext } from "../context/AppContext";

// const formatCurrency = (value: number) => {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(value);
// };

// const PerformanceEvaluationCard: React.FC<{
//   evaluation: PerformanceEvaluation;
//   onApprove: (evaluation: PerformanceEvaluation) => void;
//   isActioned: boolean;
// }> = ({ evaluation, onApprove, isActioned }) => {
//   // ... (This component's code remains the same, it was already correct) ...
//   const confidenceColor =
//     evaluation.confidenceScore > 0.8
//       ? "text-green-500"
//       : evaluation.confidenceScore > 0.6
//       ? "text-yellow-500"
//       : "text-red-500";

//   let suggestionText;
//   if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
//     suggestionText = (
//       <>
//         Promote to{" "}
//         <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
//           {evaluation.suggestedRole}
//         </span>
//       </>
//     );
//   } else if (
//     evaluation.suggestion === "Salary Increment" &&
//     evaluation.suggestedSalary
//   ) {
//     suggestionText = (
//       <>
//         Salary Hike to{" "}
//         <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">
//           {formatCurrency(evaluation.suggestedSalary)}
//         </span>
//       </>
//     );
//   } else {
//     suggestionText = "Maintain Current Status";
//   }

//   return (
//     <MotionCard
//       layout
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <CardHeader>
//         <div className="flex justify-between items-start">
//           <div>
//             <CardTitle>{evaluation.employeeName}</CardTitle>
//             <CardDescription>{suggestionText}</CardDescription>
//           </div>
//           <div className="text-right">
//             <p className="text-sm text-muted-foreground">Confidence</p>
//             <p className={`font-bold text-lg ${confidenceColor}`}>
//               {Math.round(evaluation.confidenceScore * 100)}%
//             </p>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div>
//           <h4 className="font-semibold mb-1 text-sm">AI Reasoning:</h4>
//           <p className="text-sm text-muted-foreground">
//             {evaluation.reasoning}
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
//               Strengths
//             </h4>
//             <ul className="list-disc list-inside space-y-1 text-sm">
//               {evaluation.strengths.map((s, i) => (
//                 <li key={i}>{s}</li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
//               Weaknesses
//             </h4>
//             <ul className="list-disc list-inside space-y-1 text-sm">
//               {evaluation.weaknesses.map((w, i) => (
//                 <li key={i}>{w}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {evaluation.suggestion !== "Maintain" && (
//           <div className="flex justify-end pt-2 border-t border-border">
//             <Button
//               size="sm"
//               onClick={() => onApprove(evaluation)}
//               disabled={isActioned}
//             >
//               {isActioned ? "Suggestion Approved" : "Approve Suggestion"}
//             </Button>
//           </div>
//         )}
//       </CardContent>
//     </MotionCard>
//   );
// };

// export const PerformancePage = () => {
//   const { employees, updateEmployee } = useAppContext();
//   const [evaluations, setEvaluations] = useState<PerformanceEvaluation[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleGetEvaluations = useCallback(async () => {
//     setIsLoading(true);
//     setError(null);
//     setEvaluations([]);
//     try {
//       const result = await evaluatePerformanceWithAI(employees);
//       setEvaluations(result);
//     } catch (e: any) {
//       setError(e.message || "An unknown error occurred.");
//     } finally {
//       setIsLoading(false);
//     }
//   }, [employees]);

//   const handleApproveSuggestion = (evaluation: PerformanceEvaluation) => {
//     const updates: Partial<Employee> = {
//       lastPromotionDate: new Date().toISOString().split("T")[0],
//     };
//     if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
//       updates.role = evaluation.suggestedRole;
//     }
//     if (
//       evaluation.suggestion === "Salary Increment" &&
//       evaluation.suggestedSalary
//     ) {
//       updates.salary = evaluation.suggestedSalary;
//     }
//     updateEmployee(evaluation.employeeId, updates);
//   };

//   const containerVariants = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.05 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <div className="space-y-6">
//       <Card>
//         <CardHeader>
//           <CardTitle>AI Employee Performance Evaluation</CardTitle>
//           <CardDescription>
//             Use AI to analyze performance data and identify employees eligible
//             for promotion or salary increases.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="text-center space-y-4">
//           <Button
//             onClick={handleGetEvaluations}
//             isLoading={isLoading}
//             disabled={isLoading}
//           >
//             <TrendingUpIcon className="w-5 h-5 mr-2" />
//             {isLoading
//               ? "Analyzing Performance Data..."
//               : "Generate AI Evaluations"}
//           </Button>
//           <div className="text-center text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
//             <BrainCircuitIcon className="w-4 h-4 inline-block mr-1" />
//             <strong>AI is used as a suggestion tool.</strong> Final promotion
//             decisions must be made by human HR/admin staff.
//           </div>
//         </CardContent>
//       </Card>

//       <AnimatePresence>
//         {error && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
//           >
//             {error}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {evaluations.length > 0 && (
//         <div className="space-y-4">
//           <h3 className="text-2xl font-bold text-center">
//             AI Evaluation Results
//           </h3>
//           <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
//             {/* FIX: Added explicit type for the 'evaluation' parameter */}
//             {evaluations.map((evaluation: PerformanceEvaluation) => {
//               const employee = employees.find(
//                 (e) => e.id === evaluation.employeeId
//               );
//               const isActioned =
//                 !!employee &&
//                 ((evaluation.suggestion === "Promote" &&
//                   employee.role === evaluation.suggestedRole) ||
//                   (evaluation.suggestion === "Salary Increment" &&
//                     employee.salary === evaluation.suggestedSalary));
//               return (
//                 <PerformanceEvaluationCard
//                   key={evaluation.employeeId}
//                   evaluation={evaluation}
//                   onApprove={handleApproveSuggestion}
//                   isActioned={isActioned}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       )}

//       <Card>
//         <CardHeader>
//           <CardTitle>Employee Directory</CardTitle>
//           <CardDescription>
//             List of all current employees and their performance metrics.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <motion.div
//             className="overflow-x-auto"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             <table className="w-full text-sm text-left">
//               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                 <tr>
//                   <th className="px-6 py-3">Name</th>
//                   <th className="px-6 py-3">Role</th>
//                   <th className="px-6 py-3">Salary</th>
//                   <th className="px-6 py-3 text-center">Manager Rating</th>
//                   <th className="px-6 py-3 text-center">Performance</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* FIX: Added explicit type for 'emp' parameter */}
//                 {employees.map((emp: Employee) => (
//                   <motion.tr
//                     key={emp.id}
//                     className="border-b border-border hover:bg-muted/50"
//                     variants={itemVariants}
//                   >
//                     <td className="px-6 py-4 font-medium">{emp.name}</td>
//                     <td className="px-6 py-4">{emp.role}</td>
//                     <td className="px-6 py-4">{formatCurrency(emp.salary)}</td>
//                     <td className="px-6 py-4 text-center">
//                       {emp.managerRating} / 5
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       {emp.performanceScore} / 5
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </motion.div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  MotionCard,
  CardDescription,
  Skeleton,
} from "../components/ui";
import { Employee, PerformanceEvaluation } from "../types";
import { evaluatePerformanceWithAI } from "../services/geminiService";
import { BrainCircuitIcon, TrendingUpIcon } from "../components/icons";
import { useAppContext } from "../context/AppContext";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const PerformanceEvaluationCard: React.FC<{
  evaluation: PerformanceEvaluation;
  onApprove: (evaluation: PerformanceEvaluation) => void;
  isActioned: boolean;
}> = ({ evaluation, onApprove, isActioned }) => {
  const confidenceColor =
    evaluation.confidenceScore > 0.8
      ? "text-green-500"
      : evaluation.confidenceScore > 0.6
      ? "text-yellow-500"
      : "text-red-500";
  let suggestionText;
  if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
    suggestionText = (
      <>
        Promote to{" "}
        <span className="font-semibold text-primary">
          {evaluation.suggestedRole}
        </span>
      </>
    );
  } else if (
    evaluation.suggestion === "Salary Increment" &&
    evaluation.suggestedSalary
  ) {
    suggestionText = (
      <>
        Salary Hike to{" "}
        <span className="font-semibold text-primary">
          {formatCurrency(evaluation.suggestedSalary)}
        </span>
      </>
    );
  } else {
    suggestionText = "Maintain Current Status";
  }
  return (
    <MotionCard
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{evaluation.employeeName}</CardTitle>
            <CardDescription>{suggestionText}</CardDescription>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Confidence</p>
            <p className={`font-bold text-lg ${confidenceColor}`}>
              {Math.round(evaluation.confidenceScore * 100)}%
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-sm">AI Reasoning:</h4>
          <p className="text-sm text-muted-foreground">
            {evaluation.reasoning}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
              Strengths
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {evaluation.strengths.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-red-600 dark:text-red-400">
              Weaknesses
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {evaluation.weaknesses.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </div>
        </div>
        {evaluation.suggestion !== "Maintain" && (
          <div className="flex justify-end pt-2 border-t border-border">
            <Button
              size="sm"
              onClick={() => onApprove(evaluation)}
              disabled={isActioned}
            >
              {isActioned ? "Suggestion Approved" : "Approve Suggestion"}
            </Button>
          </div>
        )}
      </CardContent>
    </MotionCard>
  );
};

const PerformanceSkeletonCard = () => (
  <Card>
    <CardHeader>
      <div className="flex justify-between items-start">
        <div>
          <Skeleton className="h-6 w-36 mb-2" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div className="text-right">
          <Skeleton className="h-4 w-20 ml-auto" />
          <Skeleton className="h-8 w-12 ml-auto mt-1" />
        </div>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="h-4 w-full" />
    </CardContent>
  </Card>
);

export const PerformancePage = () => {
  const { employees, updateEmployee } = useAppContext();
  const [evaluations, setEvaluations] = useState<PerformanceEvaluation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetEvaluations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setEvaluations([]);
    try {
      const result = await evaluatePerformanceWithAI(employees);
      setEvaluations(result);
    } catch (e: any) {
      setError(e.message || "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [employees]);

  const handleApproveSuggestion = (evaluation: PerformanceEvaluation) => {
    const updates: Partial<Employee> = {
      lastPromotionDate: new Date().toISOString().split("T")[0],
    };
    if (evaluation.suggestion === "Promote" && evaluation.suggestedRole) {
      updates.role = evaluation.suggestedRole;
    }
    if (
      evaluation.suggestion === "Salary Increment" &&
      evaluation.suggestedSalary
    ) {
      updates.salary = evaluation.suggestedSalary;
    }
    updateEmployee(evaluation.employeeId, updates);
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Employee Performance Evaluation</CardTitle>
          <CardDescription>
            Use AI to analyze performance data and identify employees eligible
            for promotion or salary increases.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <Button
            onClick={handleGetEvaluations}
            isLoading={isLoading}
            disabled={isLoading}
          >
            <TrendingUpIcon className="w-5 h-5 mr-2" />
            {isLoading
              ? "Analyzing Performance Data..."
              : "Generate AI Evaluations"}
          </Button>
          <div className="text-center text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg max-w-3xl mx-auto">
            <BrainCircuitIcon className="w-4 h-4 inline-block mr-1" />
            <strong>AI is used as a suggestion tool.</strong> Final promotion
            decisions must be made by human HR/admin staff.
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

      {isLoading && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">
            Generating AI Evaluations...
          </h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            <PerformanceSkeletonCard />
            <PerformanceSkeletonCard />
          </div>
        </div>
      )}

      {!isLoading && evaluations.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center">
            AI Evaluation Results
          </h3>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {evaluations.map((evaluation) => {
              const employee = employees.find(
                (e) => e.id === evaluation.employeeId
              );
              const isActioned =
                !!employee &&
                ((evaluation.suggestion === "Promote" &&
                  employee.role === evaluation.suggestedRole) ||
                  (evaluation.suggestion === "Salary Increment" &&
                    employee.salary === evaluation.suggestedSalary));
              return (
                <PerformanceEvaluationCard
                  key={evaluation.employeeId}
                  evaluation={evaluation}
                  onApprove={handleApproveSuggestion}
                  isActioned={isActioned}
                />
              );
            })}
          </div>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Employee Directory</CardTitle>
          <CardDescription>
            List of all current employees and their performance metrics.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <motion.div
            className="overflow-x-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Role</th>
                  <th className="px-6 py-3">Salary</th>
                  <th className="px-6 py-3 text-center">Manager Rating</th>
                  <th className="px-6 py-3 text-center">Performance</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp: Employee) => (
                  <motion.tr
                    key={emp.id}
                    className="border-b border-border hover:bg-muted/50"
                    variants={itemVariants}
                  >
                    <td className="px-6 py-4 font-medium">{emp.name}</td>
                    <td className="px-6 py-4">{emp.role}</td>
                    <td className="px-6 py-4">{formatCurrency(emp.salary)}</td>
                    <td className="px-6 py-4 text-center">
                      {emp.managerRating} / 5
                    </td>
                    <td className="px-6 py-4 text-center">
                      {emp.performanceScore} / 5
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
};
