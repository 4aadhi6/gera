// import { ReactNode } from 'react';

// export interface Job {
//   id: number;
//   title: string;
//   department: string;
//   location: string;
//   type: 'Full-time' | 'Part-time' | 'Contract';
//   description: string;
//   requirements: string[];
//   status: 'Open' | 'Closed';
// }

// export interface Candidate {
//   id: number;
//   name: string;
//   email: string;
//   jobId: number;
//   experience: number; // years
//   skills: string[];
//   resumeSummary: string;
//   status: 'Active' | 'Hired' | 'Rejected';
// }

// export interface Employee {
//   id: number;
//   name:string;
//   role: string;
//   department: string;
//   email: string;
//   performanceScore: number; // out of 5
//   tenure: number; // in years
//   salary: number;
//   managerRating: number; // out of 5
//   tasksCompleted: number;
//   trainings: string[];
//   lastPromotionDate: string;
// }

// export interface Test {
//   id: string;
//   scenario: string;
//   input: string;
//   expected: string;
//   actual: string;
//   result: 'Pass' | 'Fail' | 'Pending';
// }

// export interface RankedCandidate {
//   candidateId: number;
//   rank: number;
//   candidateName: string;
//   fitScore: number;
//   reasoning: string;
//   strengths: string[];
//   weaknesses: string[];
// }

// export interface PromotionSuggestion {
//     employeeName: string;
//     suggestedRole: string;
//     reasoning: string;
//     confidenceScore: number;
// }

// export interface PerformanceEvaluation {
//     employeeId: number;
//     employeeName: string;
//     suggestion: 'Promote' | 'Salary Increment' | 'Maintain';
//     suggestedRole?: string;
//     suggestedSalary?: number;
//     reasoning: string;
//     strengths: string[];
//     weaknesses: string[];
//     confidenceScore: number;
// }

// export interface NavItem {
//   path: string;
//   label: string;
//   icon: ReactNode;
// }

// export interface SuccessorAssignment {
//     roleId: string;
//     roleTitle: string;
//     department: string;
//     successor?: {
//         employeeId: number;
//         employeeName: string;
//     };
//     readiness: 'Ready Now' | '1-2 Years' | '3-5 Years' | 'Not Assigned';
// }

// export interface OnboardingTask {
//   id: string;
//   title: string;
//   completed: boolean;
//   details: string;
// }// NEW: Added the 'Test' type for the new module
export interface Test {
  id: string;
  scenario: string;
  input: string;
  expected: string;
  actual: string;
  // FIX: Ensure this is the single source of truth for the result type
  result: "Pass" | "Fail" | "Pending";
}

export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
  requirements: string[];
  status: "Open" | "Closed";
}

export interface Candidate {
  id: number;
  name: string;
  email: string;
  jobId: number;
  experience: number;
  skills: string[];
  resumeSummary: string;
  status: "Active" | "Hired" | "Rejected";
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  performanceScore: number;
  tenure: number;
  email: string;
  salary: number;
  managerRating: number;
  tasksCompleted: number;
  trainings: string[];
  lastPromotionDate: string;
}

export interface PromotionSuggestion {
  employeeName: string;
  suggestedRole: string;
  reasoning: string;
  confidenceScore: number;
}

export interface PerformanceEvaluation {
  employeeId: number;
  employeeName: string;
  suggestion: "Promote" | "Salary Increment" | "Maintain";
  suggestedRole?: string;
  suggestedSalary?: number;
  reasoning: string;
  strengths: string[];
  weaknesses: string[];
  confidenceScore: number;
}

export interface RankedCandidate {
  candidateId: number;
  rank: number;
  candidateName: string;
  fitScore: number;
  reasoning: string;
  strengths: string[];
  weaknesses: string[];
}

export interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export interface SuccessorAssignment {
  roleId: string;
  roleTitle: string;
  department: string;
  successor?: {
    employeeId: number;
    employeeName: string;
  };
  readiness: "Ready Now" | "1-2 Years" | "3-5 Years" | "Not Assigned";
}

export interface OnboardingTask {
  id: string;
  title: string;
  completed: boolean;
  details: string;
}
