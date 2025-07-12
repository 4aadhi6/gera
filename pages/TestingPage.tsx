// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   CardHeader,
// // // //   CardTitle,
// // // //   CardDescription,
// // // // } from "../components/ui";
// // // // import { mockTests } from "../data/mockData";
// // // // import { Test } from "../types";

// // // // const getResultColor = (result: "Pass" | "Fail") => {
// // // //   return result === "Pass"
// // // //     ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
// // // //     : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
// // // // };

// // // // export const TestingPage = () => {
// // // //   const containerVariants = {
// // // //     hidden: { opacity: 0 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       transition: { staggerChildren: 0.05 },
// // // //     },
// // // //   };

// // // //   const itemVariants = {
// // // //     hidden: { y: 20, opacity: 0 },
// // // //     visible: { y: 0, opacity: 1 },
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       initial="hidden"
// // // //       animate="visible"
// // // //       variants={containerVariants}
// // // //       className="space-y-6"
// // // //     >
// // // //       <Card>
// // // //         <CardHeader>
// // // //           <CardTitle>System Test Case Management</CardTitle>
// // // //           <CardDescription>
// // // //             Overview of automated and manual test cases for the platform's core
// // // //             features.
// // // //           </CardDescription>
// // // //         </CardHeader>
// // // //         <CardContent>
// // // //           <div className="overflow-x-auto">
// // // //             <table className="w-full text-sm text-left">
// // // //               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
// // // //                 <tr>
// // // //                   <th className="px-6 py-3">ID</th>
// // // //                   <th className="px-6 py-3">Scenario</th>
// // // //                   <th className="px-6 py-3">Expected Result</th>
// // // //                   <th className="px-6 py-3">Actual Result</th>
// // // //                   <th className="px-6 py-3 text-center">Status</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody>
// // // //                 {mockTests.map((test: Test) => (
// // // //                   <motion.tr
// // // //                     key={test.id}
// // // //                     className="border-b border-border hover:bg-muted/50"
// // // //                     variants={itemVariants}
// // // //                   >
// // // //                     <td className="px-6 py-4 font-mono text-xs">{test.id}</td>
// // // //                     <td className="px-6 py-4 font-medium">{test.scenario}</td>
// // // //                     <td className="px-6 py-4 text-muted-foreground">
// // // //                       {test.expected}
// // // //                     </td>
// // // //                     <td className="px-6 py-4 text-muted-foreground">
// // // //                       {test.actual}
// // // //                     </td>
// // // //                     <td className="px-6 py-4 text-center">
// // // //                       <span
// // // //                         className={`px-2 py-1 font-semibold text-xs rounded-full ${getResultColor(
// // // //                           test.result
// // // //                         )}`}
// // // //                       >
// // // //                         {test.result}
// // // //                       </span>
// // // //                     </td>
// // // //                   </motion.tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         </CardContent>
// // // //       </Card>
// // // //     </motion.div>
// // // //   );
// // // // };
// // // // src/pages/TestingPage.tsx

// // // // FIX: Removed unused 'React' import.
// // // import { motion } from "framer-motion";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   CardHeader,
// // //   CardTitle,
// // //   CardDescription,
// // // } from "../components/ui";
// // // import { mockTests } from "../data/mockData";
// // // import { Test } from "../types";

// // // // ... rest of the file is correct ...
// // // const getResultColor = (result: "Pass" | "Fail") => {
// // //   return result === "Pass"
// // //     ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
// // //     : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
// // // };

// // // export const TestingPage = () => {
// // //   const containerVariants = {
// // //     hidden: { opacity: 0 },
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
// // //     <motion.div
// // //       initial="hidden"
// // //       animate="visible"
// // //       variants={containerVariants}
// // //       className="space-y-6"
// // //     >
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>System Test Case Management</CardTitle>
// // //           <CardDescription>
// // //             Overview of automated and manual test cases for the platform's core
// // //             features.
// // //           </CardDescription>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full text-sm text-left">
// // //               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
// // //                 <tr>
// // //                   <th className="px-6 py-3">ID</th>
// // //                   <th className="px-6 py-3">Scenario</th>
// // //                   <th className="px-6 py-3">Expected Result</th>
// // //                   <th className="px-6 py-3">Actual Result</th>
// // //                   <th className="px-6 py-3 text-center">Status</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {mockTests.map((test: Test) => (
// // //                   <motion.tr
// // //                     key={test.id}
// // //                     className="border-b border-border hover:bg-muted/50"
// // //                     variants={itemVariants}
// // //                   >
// // //                     <td className="px-6 py-4 font-mono text-xs">{test.id}</td>
// // //                     <td className="px-6 py-4 font-medium">{test.scenario}</td>
// // //                     <td className="px-6 py-4 text-muted-foreground">
// // //                       {test.expected}
// // //                     </td>
// // //                     <td className="px-6 py-4 text-muted-foreground">
// // //                       {test.actual}
// // //                     </td>
// // //                     <td className="px-6 py-4 text-center">
// // //                       <span
// // //                         className={`px-2 py-1 font-semibold text-xs rounded-full ${getResultColor(
// // //                           test.result
// // //                         )}`}
// // //                       >
// // //                         {test.result}
// // //                       </span>
// // //                     </td>
// // //                   </motion.tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </CardContent>
// // //       </Card>
// // //     </motion.div>
// // //   );
// // // };
// // // FIX: Imported useState to handle form state
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle,
// //   CardDescription,
// //   Button,
// // } from "../components/ui";
// // import { useAppContext } from "../context/AppContext";
// // import { Test } from "../types";

// // // NEW: Test form is enhanced to handle initial data for editing
// // const TestForm = ({
// //   onSubmit,
// //   onCancel,
// //   initialData,
// // }: {
// //   onSubmit: (data: Omit<Test, "id">) => void;
// //   onCancel: () => void;
// //   initialData?: Test; // Optional prop for editing
// // }) => {
// //   const [scenario, setScenario] = useState(initialData?.scenario || "");
// //   const [input, setInput] = useState(initialData?.input || "");
// //   const [expected, setExpected] = useState(initialData?.expected || "");
// //   const [actual, setActual] = useState(initialData?.actual || "");
// //   const [result, setResult] = useState<"Pass" | "Fail" | "Pending">(
// //     initialData?.result || "Pending"
// //   );

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     onSubmit({ scenario, input, expected, actual, result });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-4">
// //       <div>
// //         <label htmlFor="scenario" className="block text-sm font-medium mb-1">
// //           Scenario
// //         </label>
// //         <input
// //           id="scenario"
// //           type="text"
// //           value={scenario}
// //           onChange={(e) => setScenario(e.target.value)}
// //           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
// //           required
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="input" className="block text-sm font-medium mb-1">
// //           Input Data
// //         </label>
// //         <textarea
// //           id="input"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           rows={3}
// //           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
// //         />
// //       </div>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //         <div>
// //           <label htmlFor="expected" className="block text-sm font-medium mb-1">
// //             Expected Result
// //           </label>
// //           <textarea
// //             id="expected"
// //             value={expected}
// //             onChange={(e) => setExpected(e.target.value)}
// //             rows={2}
// //             className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="actual" className="block text-sm font-medium mb-1">
// //             Actual Result
// //           </label>
// //           <textarea
// //             id="actual"
// //             value={actual}
// //             onChange={(e) => setActual(e.target.value)}
// //             rows={2}
// //             className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
// //           />
// //         </div>
// //       </div>
// //       <div>
// //         <label htmlFor="result" className="block text-sm font-medium mb-1">
// //           Result
// //         </label>
// //         <select
// //           id="result"
// //           value={result}
// //           onChange={(e) => setResult(e.target.value as any)}
// //           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
// //         >
// //           <option>Pending</option>
// //           <option>Pass</option>
// //           <option>Fail</option>
// //         </select>
// //       </div>
// //       <div className="flex justify-end space-x-2 pt-4">
// //         <Button type="button" variant="secondary" onClick={onCancel}>
// //           Cancel
// //         </Button>
// //         <Button type="submit">Save Test Case</Button>
// //       </div>
// //     </form>
// //   );
// // };

// // const getResultColor = (result: "Pass" | "Fail" | "Pending") => {
// //   switch (result) {
// //     case "Pass":
// //       return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
// //     case "Fail":
// //       return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
// //     case "Pending":
// //       return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
// //   }
// // };

// // export const TestingPage = () => {
// //   // NEW: Get update and delete functions from context
// //   const { tests, addTest, updateTest, deleteTest, showModal, hideModal } =
// //     useAppContext();

// //   const handleOpenAddModal = () => {
// //     const handleAdd = (data: Omit<Test, "id">) => {
// //       addTest(data);
// //       hideModal();
// //     };
// //     showModal(
// //       <TestForm onSubmit={handleAdd} onCancel={hideModal} />,
// //       "Add New Test Case"
// //     );
// //   };

// //   // NEW: Function to open the modal for editing an existing test
// //   const handleOpenEditModal = (testToEdit: Test) => {
// //     const handleUpdate = (data: Omit<Test, "id">) => {
// //       updateTest(testToEdit.id, data);
// //       hideModal();
// //     };
// //     showModal(
// //       <TestForm
// //         onSubmit={handleUpdate}
// //         onCancel={hideModal}
// //         initialData={testToEdit}
// //       />,
// //       `Edit Test Case: ${testToEdit.id}`
// //     );
// //   };

// //   // NEW: Function to handle test deletion with a confirmation
// //   const handleDeleteTest = (testId: string) => {
// //     if (
// //       window.confirm(`Are you sure you want to delete test case ${testId}?`)
// //     ) {
// //       deleteTest(testId);
// //     }
// //   };

// //   const containerVariants = {
// //     hidden: { opacity: 0 },
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
// //     <motion.div
// //       initial="hidden"
// //       animate="visible"
// //       variants={containerVariants}
// //       className="space-y-6"
// //     >
// //       <Card>
// //         <CardHeader>
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <CardTitle>System Test Case Management</CardTitle>
// //               <CardDescription>
// //                 Add, edit, or delete test cases for the platform.
// //               </CardDescription>
// //             </div>
// //             <Button onClick={handleOpenAddModal}>Add Test Case</Button>
// //           </div>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-sm text-left">
// //               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
// //                 <tr>
// //                   <th className="px-6 py-3">ID</th>
// //                   <th className="px-6 py-3">Scenario</th>
// //                   <th className="px-6 py-3">Expected Result</th>
// //                   <th className="px-6 py-3">Actual Result</th>
// //                   <th className="px-6 py-3 text-center">Status</th>
// //                   {/* NEW: Column for action buttons */}
// //                   <th className="px-6 py-3 text-right">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {tests.map((test: Test) => (
// //                   <motion.tr
// //                     key={test.id}
// //                     className="border-b border-border hover:bg-muted/50"
// //                     variants={itemVariants}
// //                     layout
// //                   >
// //                     <td className="px-6 py-4 font-mono text-xs">{test.id}</td>
// //                     <td className="px-6 py-4 font-medium">{test.scenario}</td>
// //                     <td className="px-6 py-4 text-muted-foreground">
// //                       {test.expected}
// //                     </td>
// //                     <td className="px-6 py-4 text-muted-foreground">
// //                       {test.actual}
// //                     </td>
// //                     <td className="px-6 py-4 text-center">
// //                       <span
// //                         className={`px-2 py-1 font-semibold text-xs rounded-full ${getResultColor(
// //                           test.result
// //                         )}`}
// //                       >
// //                         {test.result}
// //                       </span>
// //                     </td>
// //                     {/* NEW: Action buttons for each row */}
// //                     <td className="px-6 py-4 text-right space-x-2">
// //                       <Button
// //                         variant="secondary"
// //                         size="sm"
// //                         onClick={() => handleOpenEditModal(test)}
// //                       >
// //                         Edit
// //                       </Button>
// //                       <Button
// //                         variant="destructive"
// //                         size="sm"
// //                         onClick={() => handleDeleteTest(test.id)}
// //                       >
// //                         Delete
// //                       </Button>
// //                     </td>
// //                   </motion.tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </motion.div>
// //   );
// // };
// // src/pages/TestingPage.tsx

// // FIX: Added 'React' to the import statement.
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   Button,
// } from "../components/ui";
// import { useAppContext } from "../context/AppContext";
// import { Test } from "../types";

// // The rest of the file is correct from the previous step.
// const TestForm = ({
//   onSubmit,
//   onCancel,
//   initialData,
// }: {
//   onSubmit: (data: Omit<Test, "id">) => void;
//   onCancel: () => void;
//   initialData?: Test;
// }) => {
//   const [scenario, setScenario] = useState(initialData?.scenario || "");
//   const [input, setInput] = useState(initialData?.input || "");
//   const [expected, setExpected] = useState(initialData?.expected || "");
//   const [actual, setActual] = useState(initialData?.actual || "");
//   const [result, setResult] = useState<"Pass" | "Fail" | "Pending">(
//     initialData?.result || "Pending"
//   );

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ scenario, input, expected, actual, result });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="scenario" className="block text-sm font-medium mb-1">
//           Scenario
//         </label>
//         <input
//           id="scenario"
//           type="text"
//           value={scenario}
//           onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//             setScenario(e.target.value)
//           }
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="input" className="block text-sm font-medium mb-1">
//           Input Data
//         </label>
//         <textarea
//           id="input"
//           value={input}
//           onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//             setInput(e.target.value)
//           }
//           rows={3}
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="expected" className="block text-sm font-medium mb-1">
//             Expected Result
//           </label>
//           <textarea
//             id="expected"
//             value={expected}
//             onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//               setExpected(e.target.value)
//             }
//             rows={2}
//             className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//           />
//         </div>
//         <div>
//           <label htmlFor="actual" className="block text-sm font-medium mb-1">
//             Actual Result
//           </label>
//           <textarea
//             id="actual"
//             value={actual}
//             onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//               setActual(e.target.value)
//             }
//             rows={2}
//             className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//           />
//         </div>
//       </div>
//       <div>
//         <label htmlFor="result" className="block text-sm font-medium mb-1">
//           Result
//         </label>
//         <select
//           id="result"
//           value={result}
//           onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
//             setResult(e.target.value as any)
//           }
//           className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
//         >
//           <option>Pending</option>
//           <option>Pass</option>
//           <option>Fail</option>
//         </select>
//       </div>
//       <div className="flex justify-end space-x-2 pt-4">
//         <Button type="button" variant="secondary" onClick={onCancel}>
//           Cancel
//         </Button>
//         <Button type="submit">Save Test Case</Button>
//       </div>
//     </form>
//   );
// };

// const getResultColor = (result: "Pass" | "Fail" | "Pending") => {
//   switch (result) {
//     case "Pass":
//       return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
//     case "Fail":
//       return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
//     case "Pending":
//       return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
//   }
// };

// export const TestingPage = () => {
//   const { tests, addTest, updateTest, deleteTest, showModal, hideModal } =
//     useAppContext();

//   const handleOpenAddModal = () => {
//     const handleAdd = (data: Omit<Test, "id">) => {
//       addTest(data);
//       hideModal();
//     };
//     showModal(
//       <TestForm onSubmit={handleAdd} onCancel={hideModal} />,
//       "Add New Test Case"
//     );
//   };

//   const handleOpenEditModal = (testToEdit: Test) => {
//     const handleUpdate = (data: Omit<Test, "id">) => {
//       updateTest(testToEdit.id, data);
//       hideModal();
//     };
//     showModal(
//       <TestForm
//         onSubmit={handleUpdate}
//         onCancel={hideModal}
//         initialData={testToEdit}
//       />,
//       `Edit Test Case: ${testToEdit.id}`
//     );
//   };

//   const handleDeleteTest = (testId: string) => {
//     if (
//       window.confirm(`Are you sure you want to delete test case ${testId}?`)
//     ) {
//       deleteTest(testId);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
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
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//       className="space-y-6"
//     >
//       <Card>
//         <CardHeader>
//           <div className="flex justify-between items-center">
//             <div>
//               <CardTitle>System Test Case Management</CardTitle>
//               <CardDescription>
//                 Add, edit, or delete test cases for the platform.
//               </CardDescription>
//             </div>
//             <Button onClick={handleOpenAddModal}>Add Test Case</Button>
//           </div>
//         </CardHeader>
//         <CardContent>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm text-left">
//               <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                 <tr>
//                   <th className="px-6 py-3">ID</th>
//                   <th className="px-6 py-3">Scenario</th>
//                   <th className="px-6 py-3">Expected Result</th>
//                   <th className="px-6 py-3">Actual Result</th>
//                   <th className="px-6 py-3 text-center">Status</th>
//                   <th className="px-6 py-3 text-right">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {tests.map((test: Test) => (
//                   <motion.tr
//                     key={test.id}
//                     className="border-b border-border hover:bg-muted/50"
//                     variants={itemVariants}
//                     layout
//                   >
//                     <td className="px-6 py-4 font-mono text-xs">{test.id}</td>
//                     <td className="px-6 py-4 font-medium">{test.scenario}</td>
//                     <td className="px-6 py-4 text-muted-foreground">
//                       {test.expected}
//                     </td>
//                     <td className="px-6 py-4 text-muted-foreground">
//                       {test.actual}
//                     </td>
//                     <td className="px-6 py-4 text-center">
//                       <span
//                         className={`px-2 py-1 font-semibold text-xs rounded-full ${getResultColor(
//                           test.result
//                         )}`}
//                       >
//                         {test.result}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 text-right space-x-2">
//                       <Button
//                         variant="secondary"
//                         size="sm"
//                         onClick={() => handleOpenEditModal(test)}
//                       >
//                         Edit
//                       </Button>
//                       <Button
//                         variant="destructive"
//                         size="sm"
//                         onClick={() => handleDeleteTest(test.id)}
//                       >
//                         Delete
//                       </Button>
//                     </td>
//                   </motion.tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };
// FINAL, FULLY CORRECTED VERSION of src/pages/TestingPage.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Button,
} from "../components/ui";
import { useAppContext } from "../context/AppContext";
import { Test } from "../types";

const TestForm = ({
  onSubmit,
  onCancel,
  initialData,
}: {
  onSubmit: (data: Omit<Test, "id">) => void;
  onCancel: () => void;
  initialData?: Test;
}) => {
  const [scenario, setScenario] = useState(initialData?.scenario || "");
  const [input, setInput] = useState(initialData?.input || "");
  const [expected, setExpected] = useState(initialData?.expected || "");
  const [actual, setActual] = useState(initialData?.actual || "");
  const [result, setResult] = useState<"Pass" | "Fail" | "Pending">(
    initialData?.result || "Pending"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ scenario, input, expected, actual, result });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="scenario" className="block text-sm font-medium mb-1">
          Scenario
        </label>
        <input
          id="scenario"
          type="text"
          value={scenario}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setScenario(e.target.value)
          }
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
          required
        />
      </div>
      <div>
        <label htmlFor="input" className="block text-sm font-medium mb-1">
          Input Data
        </label>
        <textarea
          id="input"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setInput(e.target.value)
          }
          rows={3}
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="expected" className="block text-sm font-medium mb-1">
            Expected Result
          </label>
          <textarea
            id="expected"
            value={expected}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setExpected(e.target.value)
            }
            rows={2}
            className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="actual" className="block text-sm font-medium mb-1">
            Actual Result
          </label>
          <textarea
            id="actual"
            value={actual}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setActual(e.target.value)
            }
            rows={2}
            className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
      <div>
        <label htmlFor="result" className="block text-sm font-medium mb-1">
          Result
        </label>
        <select
          id="result"
          value={result}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setResult(e.target.value as any)
          }
          className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
        >
          <option>Pending</option>
          <option>Pass</option>
          <option>Fail</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Test Case</Button>
      </div>
    </form>
  );
};

const getResultColor = (result: "Pass" | "Fail" | "Pending") => {
  switch (result) {
    case "Pass":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Fail":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    case "Pending":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
  }
};

export const TestingPage = () => {
  const { tests, addTest, updateTest, deleteTest, showModal, hideModal } =
    useAppContext();

  const handleOpenAddModal = () => {
    const handleAdd = (data: Omit<Test, "id">) => {
      addTest(data);
      hideModal();
    };
    showModal(
      <TestForm onSubmit={handleAdd} onCancel={hideModal} />,
      "Add New Test Case"
    );
  };

  const handleOpenEditModal = (testToEdit: Test) => {
    const handleUpdate = (data: Omit<Test, "id">) => {
      updateTest(testToEdit.id, data);
      hideModal();
    };
    showModal(
      <TestForm
        onSubmit={handleUpdate}
        onCancel={hideModal}
        initialData={testToEdit}
      />,
      `Edit Test Case: ${testToEdit.id}`
    );
  };

  const handleDeleteTest = (testId: string) => {
    if (
      window.confirm(`Are you sure you want to delete test case ${testId}?`)
    ) {
      deleteTest(testId);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-6"
    >
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>System Test Case Management</CardTitle>
              <CardDescription>
                Add, edit, or delete test cases for the platform.
              </CardDescription>
            </div>
            <Button onClick={handleOpenAddModal}>Add Test Case</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Scenario</th>
                  <th className="px-6 py-3">Expected Result</th>
                  <th className="px-6 py-3">Actual Result</th>
                  <th className="px-6 py-3 text-center">Status</th>
                  <th className="px-6 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tests.map((test: Test) => (
                  <motion.tr
                    key={test.id}
                    className="border-b border-border hover:bg-muted/50"
                    variants={itemVariants}
                    // FIX: Removed the 'layout' prop to prevent the first-render glitch.
                    // The fade-in animation will still work perfectly.
                  >
                    <td className="px-6 py-4 font-mono text-xs">{test.id}</td>
                    <td className="px-6 py-4 font-medium">{test.scenario}</td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {test.expected}
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {test.actual}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-2 py-1 font-semibold text-xs rounded-full ${getResultColor(
                          test.result
                        )}`}
                      >
                        {test.result}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleOpenEditModal(test)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteTest(test.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
