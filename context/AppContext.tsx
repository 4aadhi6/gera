// import {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   ReactNode,
// } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { XCircleIcon } from "../components/icons";
// import { Job, Candidate, Employee, Test } from "../types";
// import {
//   mockJobs,
//   mockCandidates,
//   mockEmployees,
//   mockTests,
// } from "../data/mockData";

// type Theme = "light" | "dark";

// interface AppContextType {
//   theme: Theme;
//   toggleTheme: () => void;
//   showModal: (content: ReactNode, title?: string) => void;
//   hideModal: () => void;
//   jobs: Job[];
//   candidates: Candidate[];
//   employees: Employee[];
//   tests: Test[];
//   addJob: (jobData: Omit<Job, "id" | "status">) => void;
//   addCandidate: (candidateData: Omit<Candidate, "id" | "status">) => void;
//   hireCandidate: (candidateId: number, jobId: number) => void;
//   addEmployee: (
//     employeeData: Omit<
//       Employee,
//       | "id"
//       | "performanceScore"
//       | "tenure"
//       | "salary"
//       | "managerRating"
//       | "tasksCompleted"
//       | "trainings"
//       | "lastPromotionDate"
//     >
//   ) => void;
//   promoteEmployee: (employeeId: number, newRole: string) => void;
//   updateEmployee: (employeeId: number, updates: Partial<Employee>) => void;
//   addTest: (testData: Omit<Test, "id">) => void;
//   updateTest: (testId: string, updates: Omit<Test, "id">) => void;
//   deleteTest: (testId: string) => void;
// }

// const AppContext = createContext<AppContextType | undefined>(undefined);

// export const AppProvider = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>(() => {
//     const savedTheme = localStorage.getItem("theme");
//     return savedTheme === "light" || savedTheme === "dark"
//       ? savedTheme
//       : "dark";
//   });

//   const [modalContent, setModalContent] = useState<ReactNode | null>(null);
//   const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

//   const [jobs, setJobs] = useState<Job[]>(mockJobs);
//   const [candidates, setCandidates] = useState<Candidate[]>(mockCandidates);
//   const [employees, setEmployees] = useState<Employee[]>(mockEmployees);
//   const [tests, setTests] = useState<Test[]>(mockTests);

//   useEffect(() => {
//     const root = window.document.documentElement;
//     root.classList.remove("light", "dark");
//     root.classList.add(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   const showModal = (content: ReactNode, title?: string) => {
//     setModalContent(content);
//     setModalTitle(title);
//   };

//   const hideModal = () => {
//     setModalContent(null);
//     setModalTitle(undefined);
//   };

//   const addJob = (jobData: Omit<Job, "id" | "status">) => {
//     const newJob: Job = { ...jobData, id: Date.now(), status: "Open" };
//     setJobs((prev) => [newJob, ...prev]);
//   };

//   const addCandidate = (candidateData: Omit<Candidate, "id" | "status">) => {
//     const newCandidate: Candidate = {
//       ...candidateData,
//       id: Date.now(),
//       status: "Active",
//     };
//     setCandidates((prev) => [...prev, newCandidate]);
//   };

//   const hireCandidate = (candidateId: number, jobId: number) => {
//     setCandidates((prev) =>
//       prev.map((c) => {
//         if (c.jobId === jobId) {
//           return c.id === candidateId
//             ? { ...c, status: "Hired" }
//             : { ...c, status: "Rejected" };
//         }
//         return c;
//       })
//     );
//     setJobs((prev) =>
//       prev.map((j) => (j.id === jobId ? { ...j, status: "Closed" } : j))
//     );
//   };

//   const addEmployee = (
//     employeeData: Omit<
//       Employee,
//       | "id"
//       | "performanceScore"
//       | "tenure"
//       | "salary"
//       | "managerRating"
//       | "tasksCompleted"
//       | "trainings"
//       | "lastPromotionDate"
//     >
//   ) => {
//     const newEmployee: Employee = {
//       ...employeeData,
//       id: Date.now(),
//       performanceScore: parseFloat((Math.random() * 2 + 3).toFixed(1)),
//       tenure: 0,
//       salary: 60000,
//       managerRating: 4,
//       tasksCompleted: 10,
//       trainings: [],
//       lastPromotionDate: new Date().toISOString().split("T")[0],
//     };
//     setEmployees((prev) => [newEmployee, ...prev]);
//   };

//   const promoteEmployee = (employeeId: number, newRole: string) => {
//     setEmployees((prev) =>
//       prev.map((e) => (e.id === employeeId ? { ...e, role: newRole } : e))
//     );
//   };

//   const updateEmployee = (employeeId: number, updates: Partial<Employee>) => {
//     setEmployees((prev) =>
//       prev.map((e) => (e.id === employeeId ? { ...e, ...updates } : e))
//     );
//   };

//   const addTest = (testData: Omit<Test, "id">) => {
//     const newTest: Test = {
//       ...testData,
//       id: `TC${String(tests.length + 1).padStart(3, "0")}`,
//     };
//     setTests((prev) => [newTest, ...prev]);
//   };

//   const updateTest = (testId: string, updates: Omit<Test, "id">) => {
//     setTests((prev) =>
//       prev.map((test) =>
//         test.id === testId ? { id: test.id, ...updates } : test
//       )
//     );
//   };

//   const deleteTest = (testId: string) => {
//     setTests((prev) => prev.filter((test) => test.id !== testId));
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         theme,
//         toggleTheme,
//         showModal,
//         hideModal,
//         jobs,
//         candidates,
//         employees,
//         tests,
//         addJob,
//         addCandidate,
//         hireCandidate,
//         addEmployee,
//         promoteEmployee,
//         updateEmployee,
//         addTest,
//         updateTest,
//         deleteTest,
//       }}
//     >
//       {children}
//       <AnimatePresence>
//         {modalContent && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
//             onClick={hideModal}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//               className="relative w-full max-w-2xl m-4 bg-card text-card-foreground rounded-lg shadow-xl border border-border"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-center justify-between p-4 border-b border-border">
//                 {modalTitle && (
//                   <h3 className="text-lg font-semibold">{modalTitle}</h3>
//                 )}
//                 <button
//                   onClick={hideModal}
//                   className="p-1 rounded-full text-muted-foreground hover:bg-muted transition-colors"
//                 >
//                   <XCircleIcon className="w-6 h-6" />
//                 </button>
//               </div>
//               <div className="p-6 max-h-[80vh] overflow-y-auto">
//                 {modalContent}
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (context === undefined) {
//     throw new Error("useAppContext must be used within an AppProvider");
//   }
//   return context;
// };
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XCircleIcon } from "../components/icons";
import { Job, Candidate, Employee, Test } from "../types";
import {
  mockJobs,
  mockCandidates,
  mockEmployees,
  mockTests,
} from "../data/mockData";

// Helper function to safely get data from localStorage
function getInitialState<T>(key: string, defaultValue: T): T {
  try {
    const savedItem = localStorage.getItem(key);
    return savedItem ? JSON.parse(savedItem) : defaultValue;
  } catch (error) {
    console.error(`Error reading ${key} from localStorage`, error);
    return defaultValue;
  }
}

type Theme = "light" | "dark";

interface AppContextType {
  theme: Theme;
  toggleTheme: () => void;
  showModal: (content: ReactNode, title?: string) => void;
  hideModal: () => void;
  jobs: Job[];
  candidates: Candidate[];
  employees: Employee[];
  tests: Test[];
  addJob: (jobData: Omit<Job, "id" | "status">) => void;
  addCandidate: (candidateData: Omit<Candidate, "id" | "status">) => void;
  hireCandidate: (candidateId: number, jobId: number) => void;
  addEmployee: (
    employeeData: Omit<
      Employee,
      | "id"
      | "performanceScore"
      | "tenure"
      | "salary"
      | "managerRating"
      | "tasksCompleted"
      | "trainings"
      | "lastPromotionDate"
    >
  ) => void;
  promoteEmployee: (employeeId: number, newRole: string) => void;
  updateEmployee: (employeeId: number, updates: Partial<Employee>) => void;
  addTest: (testData: Omit<Test, "id">) => void;
  updateTest: (testId: string, updates: Omit<Test, "id">) => void;
  deleteTest: (testId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : "dark";
  });

  const [modalContent, setModalContent] = useState<ReactNode | null>(null);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  // FIX: All state now initializes from localStorage or falls back to the mock data.
  const [jobs, setJobs] = useState<Job[]>(() =>
    getInitialState("app_jobs", mockJobs)
  );
  const [candidates, setCandidates] = useState<Candidate[]>(() =>
    getInitialState("app_candidates", mockCandidates)
  );
  const [employees, setEmployees] = useState<Employee[]>(() =>
    getInitialState("app_employees", mockEmployees)
  );
  const [tests, setTests] = useState<Test[]>(() =>
    getInitialState("app_tests", mockTests)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // FIX: This new useEffect saves all data to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("app_jobs", JSON.stringify(jobs));
    localStorage.setItem("app_candidates", JSON.stringify(candidates));
    localStorage.setItem("app_employees", JSON.stringify(employees));
    localStorage.setItem("app_tests", JSON.stringify(tests));
  }, [jobs, candidates, employees, tests]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const showModal = (content: ReactNode, title?: string) => {
    setModalContent(content);
    setModalTitle(title);
  };

  const hideModal = () => {
    setModalContent(null);
    setModalTitle(undefined);
  };

  const addJob = (jobData: Omit<Job, "id" | "status">) => {
    const newJob: Job = { ...jobData, id: Date.now(), status: "Open" };
    setJobs((prev) => [newJob, ...prev]);
  };

  const addCandidate = (candidateData: Omit<Candidate, "id" | "status">) => {
    const newCandidate: Candidate = {
      ...candidateData,
      id: Date.now(),
      status: "Active",
    };
    setCandidates((prev) => [...prev, newCandidate]);
  };

  const hireCandidate = (candidateId: number, jobId: number) => {
    setCandidates((prev) =>
      prev.map((c) =>
        c.jobId === jobId
          ? c.id === candidateId
            ? { ...c, status: "Hired" }
            : { ...c, status: "Rejected" }
          : c
      )
    );
    setJobs((prev) =>
      prev.map((j) => (j.id === jobId ? { ...j, status: "Closed" } : j))
    );
  };

  const addEmployee = (
    employeeData: Omit<
      Employee,
      | "id"
      | "performanceScore"
      | "tenure"
      | "salary"
      | "managerRating"
      | "tasksCompleted"
      | "trainings"
      | "lastPromotionDate"
    >
  ) => {
    const newEmployee: Employee = {
      ...employeeData,
      id: Date.now(),
      performanceScore: parseFloat((Math.random() * 2 + 3).toFixed(1)),
      tenure: 0,
      salary: 60000,
      managerRating: 4,
      tasksCompleted: 10,
      trainings: [],
      lastPromotionDate: new Date().toISOString().split("T")[0],
    };
    setEmployees((prev) => [newEmployee, ...prev]);
  };

  const promoteEmployee = (employeeId: number, newRole: string) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === employeeId ? { ...e, role: newRole } : e))
    );
  };

  const updateEmployee = (employeeId: number, updates: Partial<Employee>) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === employeeId ? { ...e, ...updates } : e))
    );
  };

  const addTest = (testData: Omit<Test, "id">) => {
    const newTest: Test = {
      ...testData,
      id: `TC${String(tests.length + 1).padStart(3, "0")}`,
    };
    setTests((prev) => [newTest, ...prev]);
  };

  const updateTest = (testId: string, updates: Omit<Test, "id">) => {
    setTests((prev) =>
      prev.map((test) =>
        test.id === testId ? { id: test.id, ...updates } : test
      )
    );
  };

  const deleteTest = (testId: string) => {
    setTests((prev) => prev.filter((test) => test.id !== testId));
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        showModal,
        hideModal,
        jobs,
        candidates,
        employees,
        tests,
        addJob,
        addCandidate,
        hireCandidate,
        addEmployee,
        promoteEmployee,
        updateEmployee,
        addTest,
        updateTest,
        deleteTest,
      }}
    >
      {children}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={hideModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl m-4 bg-card text-card-foreground rounded-lg shadow-xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                {modalTitle && (
                  <h3 className="text-lg font-semibold">{modalTitle}</h3>
                )}
                <button
                  onClick={hideModal}
                  className="p-1 rounded-full text-muted-foreground hover:bg-muted transition-colors"
                >
                  <XCircleIcon className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 max-h-[80vh] overflow-y-auto">
                {modalContent}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
