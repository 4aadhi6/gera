// // src/pages/TestCasesPage.tsx

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "../components/ui";
// import { CheckCircleIcon, FileTextIcon } from "../components/icons";

// // Mock data for the JIRA table
// const jiraTasks = [
//   {
//     id: "PROJ-123",
//     summary: "Implement user login authentication flow",
//     status: "Done",
//     priority: "High",
//   },
//   {
//     id: "PROJ-124",
//     summary: "Design user profile update UI",
//     status: "Done",
//     priority: "Medium",
//   },
//   {
//     id: "PROJ-125",
//     summary: "Develop admin user management table",
//     status: "In Progress",
//     priority: "High",
//   },
//   {
//     id: "PROJ-126",
//     summary: "Fix navigation bug on mobile devices",
//     status: "In Review",
//     priority: "Medium",
//   },
//   {
//     id: "PROJ-127",
//     summary: "Set up push notification service",
//     status: "To Do",
//     priority: "Low",
//   },
// ];

// // Mock data for the formatted test case table
// const sampleTestCases = [
//   {
//     id: "TC-AUTH-01",
//     feature: "User Authentication",
//     description: "User enters valid credentials and clicks login.",
//     expected: "User is successfully logged in and redirected to the dashboard.",
//     actual: "User is successfully logged in and redirected to the dashboard.",
//     status: "Pass",
//   },
//   {
//     id: "TC-AUTH-02",
//     feature: "User Authentication",
//     description: "User enters invalid password and clicks login.",
//     expected: "An error message 'Invalid credentials' is displayed.",
//     actual: "An error message 'Invalid credentials' is displayed.",
//     status: "Pass",
//   },
//   {
//     id: "TC-PROF-01",
//     feature: "Profile Management",
//     description: "User updates their profile name and clicks save.",
//     expected: "A success message is shown and the name is updated.",
//     actual: "Awaiting test execution.",
//     status: "Pending",
//   },
// ];

// // Data for the categorized test case cards
// const testCategories = [
//   {
//     title: "User Authentication",
//     description: "Login, Logout, Registration, Password Reset",
//     count: 6,
//   },
//   {
//     title: "Profile Management & Feedback",
//     description: "Profile updates, feedback submission, error handling",
//     count: 6,
//   },
//   {
//     title: "Admin Features",
//     description: "Admin login, user management, dashboard functionality",
//     count: 6,
//   },
//   {
//     title: "Navigation & UI Flow",
//     description: "Screen transitions, invalid navigation, menu buttons",
//     count: 6,
//   },
//   {
//     title: "Notifications & Performance",
//     description: "Push notifications, idle timeout, session handling",
//     count: 6,
//   },
//   {
//     title: "JIRA Task Table",
//     description: "Mapping of test scenarios to development tasks",
//     count: 10, // 6 for features + 4 for other items
//   },
// ];

// export const GeraPage = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1 },
//   };

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="space-y-8"
//     >
//       {/* Section 1: Assigned Task Description */}
//       <motion.div variants={itemVariants}>
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center">
//               <FileTextIcon className="w-6 h-6 mr-3 text-primary" />
//               Assigned Task – Test Case Documentation
//             </CardTitle>
//             <CardDescription>
//               This section includes detailed progress on test case creation for
//               various modules of the system, JIRA task support, and
//               documentation efforts including proofreading and formatting.
//             </CardDescription>
//           </CardHeader>
//         </Card>
//       </motion.div>

//       {/* Section 2: Progress Summary */}
//       <motion.div variants={itemVariants}>
//         <Card className="bg-primary/5 border-primary/20">
//           <CardHeader>
//             <CardTitle>Progress Summary</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-3 text-card-foreground">
//               <li className="flex items-start">
//                 <CheckCircleIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
//                 <span>
//                   Compiled **40 structured test cases** categorized across all
//                   major application modules.
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircleIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
//                 <span>
//                   Updated progress on **JIRA task table with 5–7 entries** to
//                   ensure alignment with development sprints.
//                 </span>
//               </li>
//               <li className="flex items-start">
//                 <CheckCircleIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
//                 <span>
//                   Completed comprehensive **formatting, proofreading, and
//                   consistency checks** on the entire test suite document.
//                 </span>
//               </li>
//             </ul>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Section 3: Categorized Test Cases */}
//       <motion.div variants={itemVariants}>
//         <h2 className="text-2xl font-bold mb-4">Categorized Test Cases</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {testCategories.map((category) => (
//             <Card
//               key={category.title}
//               className="hover:shadow-md transition-shadow"
//             >
//               <CardHeader>
//                 <div className="flex justify-between items-center">
//                   <CardTitle>{category.title}</CardTitle>
//                   <span className="text-sm font-bold bg-primary/10 text-primary px-2 py-1 rounded-md">
//                     {category.count}
//                   </span>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">{category.description}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </motion.div>

//       {/* Section 4: JIRA Task Table */}
//       <motion.div variants={itemVariants}>
//         <Card>
//           <CardHeader>
//             <CardTitle>JIRA Task Table Summary</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-left">
//                 <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                   <tr>
//                     <th className="px-6 py-3">Task ID</th>
//                     <th className="px-6 py-3">Summary</th>
//                     <th className="px-6 py-3">Status</th>
//                     <th className="px-6 py-3">Priority</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {jiraTasks.map((task) => (
//                     <tr key={task.id} className="border-b border-border">
//                       <td className="px-6 py-4 font-mono">{task.id}</td>
//                       <td className="px-6 py-4">{task.summary}</td>
//                       <td className="px-6 py-4">{task.status}</td>
//                       <td className="px-6 py-4">{task.priority}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Section 5: Formatted Test Case Table */}
//       <motion.div variants={itemVariants}>
//         <Card>
//           <CardHeader>
//             <CardTitle>Formatted Test Case Sample</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="overflow-x-auto">
//               <table className="w-full text-sm text-left">
//                 <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                   <tr>
//                     <th className="px-4 py-3">ID</th>
//                     <th className="px-4 py-3">Feature</th>
//                     <th className="px-4 py-3">Step Description</th>
//                     <th className="px-4 py-3">Expected Output</th>
//                     <th className="px-4 py-3">Actual Output</th>
//                     <th className="px-4 py-3">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {sampleTestCases.map((tc) => (
//                     <tr key={tc.id} className="border-b border-border">
//                       <td className="px-4 py-3 font-mono text-xs">{tc.id}</td>
//                       <td className="px-4 py-3">{tc.feature}</td>
//                       <td className="px-4 py-3">{tc.description}</td>
//                       <td className="px-4 py-3">{tc.expected}</td>
//                       <td className="px-4 py-3">{tc.actual}</td>
//                       <td className="px-4 py-3">
//                         <span
//                           className={`px-2 py-1 font-semibold text-xs rounded-full ${
//                             tc.status === "Pass"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {tc.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <p className="text-right text-muted-foreground mt-4 font-semibold">
//               Total Test Cases Prepared: 40
//             </p>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </motion.div>
//   );
// };
// FINAL, CORRECTED VERSION of src/pages/TestCasesPage.tsx

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui";
import { CheckCircleIcon, FileTextIcon, RocketIcon } from "../components/icons";

// --- Static Data Definitions ---

const jiraTasks = [
  {
    id: "PROJ-123",
    summary: "Implement user login authentication flow",
    status: "Done",
    priority: "High",
  },
  {
    id: "PROJ-124",
    summary: "Design user profile update UI",
    status: "Done",
    priority: "Medium",
  },
  {
    id: "PROJ-125",
    summary: "Develop admin user management table",
    status: "In Progress",
    priority: "High",
  },
  {
    id: "PROJ-126",
    summary: "Fix navigation bug on mobile devices",
    status: "In Review",
    priority: "Medium",
  },
  {
    id: "PROJ-127",
    summary: "Set up push notification service",
    status: "To Do",
    priority: "Low",
  },
  {
    id: "PROJ-128",
    summary: "Write API documentation for authentication",
    status: "To Do",
    priority: "Low",
  },
];

const sampleTestCases = [
  {
    id: "TC-AUTH-01",
    feature: "User Authentication",
    description: "User enters valid credentials and clicks login.",
    expected: "User is successfully logged in and redirected to the dashboard.",
    actual: "User is successfully logged in and redirected to the dashboard.",
    status: "Pass",
  },
  {
    id: "TC-AUTH-02",
    feature: "User Authentication",
    description: "User enters invalid password and clicks login.",
    expected: "An error message 'Invalid credentials' is displayed.",
    actual: "An error message 'Invalid credentials' is displayed.",
    status: "Pass",
  },
  {
    id: "TC-PROF-01",
    feature: "Profile Management",
    description: "User updates their profile name and clicks save.",
    expected: "A success message is shown and the name is updated.",
    actual: "Awaiting test execution.",
    status: "Pending",
  },
];

const testCategories = [
  {
    title: "User Authentication",
    description: "Login, Logout, Registration, Password Reset",
    count: 6,
  },
  {
    title: "Profile Management & Feedback",
    description: "Profile updates, feedback submission, error handling",
    count: 6,
  },
  {
    title: "Admin Features",
    description: "Admin login, user management, dashboard functionality",
    count: 6,
  },
  {
    title: "Navigation & UI Flow",
    description: "Screen transitions, invalid navigation, menu buttons",
    count: 6,
  },
  {
    title: "Notifications & Performance",
    description: "Push notifications, idle timeout, session handling",
    count: 6,
  },
  {
    title: "Documentation & JIRA",
    description: "Formatting, proofreading, and task compilation",
    count: 10,
  },
];

export const TestCasesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Section 1: Assigned Task Description */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <RocketIcon className="w-6 h-6 mr-3 text-primary" />
              Assigned Task – Test Case Documentation
            </CardTitle>
            <CardDescription className="pt-2 text-base">
              This section includes detailed progress on test case creation for
              various modules of the system, JIRA task support, and
              documentation efforts including proofreading and formatting.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      {/* Section 2: Progress Update Summary */}
      <motion.div variants={itemVariants}>
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Progress Update Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-card-foreground">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                <span>
                  Compiled <strong>40 structured test cases</strong> categorized
                  across all major application modules.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                <span>
                  Updated progress on{" "}
                  <strong>JIRA task table with 5–7 entries</strong> to ensure
                  alignment with development sprints.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                <span>
                  Completed comprehensive{" "}
                  <strong>
                    formatting, proofreading, and consistency checks
                  </strong>{" "}
                  on the entire test suite document.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Section 3: Categorized Test Cases */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">
          Categorized Test Cases (40 Total)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testCategories.map((category) => (
            <Card
              key={category.title}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{category.title}</CardTitle>
                  <span className="text-sm font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Section 4: JIRA Task Table Summary */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>JIRA Task Table Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Task ID</th>
                    <th className="px-6 py-3">Summary</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Priority</th>
                  </tr>
                </thead>
                <tbody>
                  {jiraTasks.map((task) => (
                    <tr
                      key={task.id}
                      className="border-b border-border hover:bg-muted/50"
                    >
                      <td className="px-6 py-4 font-mono">{task.id}</td>
                      <td className="px-6 py-4">{task.summary}</td>
                      <td className="px-6 py-4">{task.status}</td>
                      <td className="px-6 py-4">{task.priority}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          {/* FIX: The closing tag was </card> and has been changed to </Card> */}
        </Card>
      </motion.div>

      {/* Section 5: Formatted Test Case Sample */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Formatted Test Case Sample</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Feature</th>
                    <th className="px-4 py-3">Step Description</th>
                    <th className="px-4 py-3">Expected Output</th>
                    <th className="px-4 py-3">Actual Output</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleTestCases.map((tc) => (
                    <tr
                      key={tc.id}
                      className="border-b border-border hover:bg-muted/50"
                    >
                      <td className="px-4 py-3 font-mono text-xs">{tc.id}</td>
                      <td className="px-4 py-3">{tc.feature}</td>
                      <td className="px-4 py-3">{tc.description}</td>
                      <td className="px-4 py-3">{tc.expected}</td>
                      <td className="px-4 py-3">{tc.actual}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 font-semibold text-xs rounded-full ${
                            tc.status === "Pass"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {tc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-right text-muted-foreground mt-4 font-semibold">
              Total Test Cases Prepared: 40
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};
