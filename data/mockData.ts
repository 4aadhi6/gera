// import { Job, Candidate, Employee, Test, SuccessorAssignment, OnboardingTask } from '../types';

// export const mockJobs: Job[] = [
//   {
//     id: 1,
//     title: 'Senior Frontend Engineer',
//     department: 'Engineering',
//     location: 'Remote',
//     type: 'Full-time',
//     description: 'We are seeking a highly skilled Senior Frontend Engineer to lead the development of our user-facing applications. You will be responsible for architecting and building modern, responsive, and performant web applications using React and TypeScript.',
//     requirements: ['5+ years of React experience', 'Expert in TypeScript', 'Strong understanding of modern CSS', 'Experience with state management libraries'],
//     status: 'Open',
//   },
//   {
//     id: 2,
//     title: 'UX/UI Designer',
//     department: 'Design',
//     location: 'New York, NY',
//     type: 'Full-time',
//     description: 'We are looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts.',
//     requirements: ['Proven UI experience', 'Demonstrable UI design skills with a strong portfolio', 'Proficiency in Figma, Sketch, or Adobe XD', 'Excellent visual design skills'],
//     status: 'Open',
//   },
//   {
//     id: 3,
//     title: 'Data Scientist',
//     department: 'Data & Analytics',
//     location: 'San Francisco, CA',
//     type: 'Full-time',
//     description: 'We are looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. We will rely on you to build data products to extract valuable business insights.',
//     requirements: ['Proven experience as a Data Scientist or Data Analyst', 'Experience in data mining', 'Understanding of machine-learning and operations research', 'Knowledge of Python, SQL and R'],
//     status: 'Open',
//   }
// ];

// export const mockCandidates: Candidate[] = [
//   {
//     id: 101,
//     name: 'Aisha Khan',
//     email: 'aisha.k@example.com',
//     jobId: 1,
//     experience: 7,
//     skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Jest', 'CI/CD'],
//     resumeSummary: 'Seasoned Frontend Engineer with 7 years of experience building scalable and maintainable web applications. Proven ability to lead projects and mentor junior developers. Passionate about performance and user experience.',
//     status: 'Active',
//   },
//   {
//     id: 102,
//     name: 'Bob Williams',
//     email: 'bob.w@example.com',
//     jobId: 1,
//     experience: 4,
//     skills: ['React', 'JavaScript', 'Redux', 'Sass'],
//     resumeSummary: 'Mid-level Frontend Developer with a strong foundation in React and state management. Eager to grow and take on more challenging projects. A collaborative team player with a good eye for detail.',
//     status: 'Active',
//   },
//   {
//     id: 103,
//     name: 'Marcus Chen',
//     email: 'marcus.c@example.com',
//     jobId: 1,
//     experience: 8,
//     skills: ['Angular', 'Vue.js', 'TypeScript', 'Node.js'],
//     resumeSummary: 'Experienced web developer with a background in various frameworks, including Angular and Vue. Recently started working with React. Strong backend skills with Node.js.',
//     status: 'Active',
//   },
//   {
//     id: 201,
//     name: 'Diana Prince',
//     email: 'diana.p@example.com',
//     jobId: 2,
//     experience: 6,
//     skills: ['Figma', 'User Research', 'Prototyping', 'Wireframing'],
//     resumeSummary: 'Creative and detail-oriented UX/UI designer with a passion for crafting intuitive and beautiful user interfaces. Strong portfolio showcasing a range of projects from mobile apps to complex web platforms.',
//     status: 'Active',
//   },
//   {
//     id: 301,
//     name: 'Ethan Hunt',
//     email: 'ethan.h@example.com',
//     jobId: 3,
//     experience: 5,
//     skills: ['Python', 'Pandas', 'scikit-learn', 'TensorFlow', 'SQL'],
//     resumeSummary: 'Data Scientist with 5 years of experience in building machine learning models and performing complex data analysis. Skilled in translating data into actionable business insights.',
//     status: 'Active',
//   }
// ];

// export const mockEmployees: Employee[] = [
//   { id: 1, name: 'John Doe', role: 'Frontend Developer', department: 'Engineering', performanceScore: 4.5, tenure: 3, email: 'j.doe@corp.com', salary: 95000, managerRating: 4, tasksCompleted: 150, trainings: ['Advanced React', 'State Management Patterns'], lastPromotionDate: '2022-01-15' },
//   { id: 2, name: 'Jane Smith', role: 'Product Manager', department: 'Product', performanceScore: 4.8, tenure: 5, email: 'j.smith@corp.com', salary: 130000, managerRating: 5, tasksCompleted: 80, trainings: ['Agile Leadership', 'Market Analysis'], lastPromotionDate: '2021-06-20' },
//   { id: 3, name: 'Peter Jones', role: 'Backend Developer', department: 'Engineering', performanceScore: 4.2, tenure: 2, email: 'p.jones@corp.com', salary: 90000, managerRating: 4, tasksCompleted: 180, trainings: ['Database Optimization'], lastPromotionDate: '2023-02-10' },
//   { id: 4, name: 'Mary Davis', role: 'Marketing Lead', department: 'Marketing', performanceScore: 4.9, tenure: 6, email: 'm.davis@corp.com', salary: 110000, managerRating: 5, tasksCompleted: 120, trainings: ['SEO Strategy', 'Digital Campaign Management'], lastPromotionDate: '2020-03-01' },
//   { id: 5, name: 'Chris Wilson', role: 'QA Engineer', department: 'Engineering', performanceScore: 4.0, tenure: 4, email: 'c.wilson@corp.com', salary: 85000, managerRating: 4, tasksCompleted: 250, trainings: ['Automation Testing with Cypress'], lastPromotionDate: '2021-11-01' },
//   { id: 6, name: 'Patricia Taylor', role: 'Junior UX Designer', department: 'Design', performanceScore: 4.7, tenure: 1.5, email: 'p.taylor@corp.com', salary: 75000, managerRating: 5, tasksCompleted: 95, trainings: ['Advanced Figma', 'User Research Techniques'], lastPromotionDate: '2023-01-01' }
// ];

// export const mockTests: Test[] = [
//     {
//         id: 'TC001',
//         scenario: 'AI Ranking with perfect match',
//         input: 'Job description for a Senior Frontend React Engineer matching Aisha Khan perfectly.',
//         expected: 'Aisha Khan gets score > 90.',
//         actual: 'Aisha Khan scored 95.',
//         result: 'Pass'
//     },
//     {
//         id: 'TC002',
//         scenario: 'AI Ranking with poor match',
//         input: 'Job description for a backend Java developer.',
//         expected: 'All candidates get low scores.',
//         actual: 'Marcus Chen scored 30, others lower.',
//         result: 'Pass'
//     },
//     {
//         id: 'TC003',
//         scenario: 'Empty job description submission',
//         input: 'User clicks "Analyze" with empty text area.',
//         expected: 'Error message is shown.',
//         actual: 'Error message "Job description cannot be empty." is displayed.',
//         result: 'Pass'
//     },
//     {
//         id: 'TC004',
//         scenario: 'Handle API failure gracefully',
//         input: 'Simulate Gemini API key error.',
//         expected: 'User-friendly error message about API is shown.',
//         actual: 'Error message about API key is shown.',
//         result: 'Fail'
//     },
//     {
//         id: 'TC005',
//         scenario: 'Responsive view on mobile',
//         input: 'Open app on a 375px width screen.',
//         expected: 'Layout adjusts, sidebar is hidden or stacked.',
//         actual: 'Sidebar collapses, content is visible.',
//         result: 'Pass'
//     },
// ];

// export const mockSuccessionPlan: SuccessorAssignment[] = [
//     { roleId: 'ENG_LEAD', roleTitle: 'Engineering Lead', department: 'Engineering', successor: { employeeId: 2, employeeName: 'Jane Smith'}, readiness: '1-2 Years' },
//     { roleId: 'MKT_HEAD', roleTitle: 'Head of Marketing', department: 'Marketing', successor: { employeeId: 4, employeeName: 'Mary Davis' }, readiness: 'Ready Now' },
//     { roleId: 'PROD_DIR', roleTitle: 'Product Director', department: 'Product', readiness: 'Not Assigned' },
//     { roleId: 'QA_LEAD', roleTitle: 'QA Lead', department: 'Engineering', successor: { employeeId: 5, employeeName: 'Chris Wilson' }, readiness: '3-5 Years' }
// ];

// export const mockOnboardingTasks: OnboardingTask[] = [
//   { id: 'task1', title: 'Sign Employment Contract', completed: true, details: 'Review and sign the contract sent to your email.' },
//   { id: 'task2', title: 'Upload ID Document', completed: true, details: 'Upload a government-issued photo ID (e.g., Passport, Driver\'s License).' },
//   { id: 'task3', title: 'Complete HR Information Form', completed: false, details: 'Fill out your personal details, emergency contacts, and bank information in the HR portal.' },
//   { id: 'task4', title: 'Set up Company Accounts', completed: false, details: 'Follow the IT instructions to set up your email and other software accounts.' },
//   { id: 'task5', title: 'Schedule Orientation Session', completed: false, details: 'Book your spot in one of the upcoming new hire orientation sessions.' },
// ];
// FIX: Added import for the new Test type
import {
  Job,
  Candidate,
  Employee,
  Test,
  SuccessorAssignment,
  OnboardingTask,
} from "../types";

// ... (mockJobs, mockCandidates, mockEmployees remain the same) ...
export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "We are seeking a highly skilled Senior Frontend Engineer to lead the development of our user-facing applications. You will be responsible for architecting and building modern, responsive, and performant web applications using React and TypeScript.",
    requirements: [
      "5+ years of React experience",
      "Expert in TypeScript",
      "Strong understanding of modern CSS",
      "Experience with state management libraries",
    ],
    status: "Open",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We are looking for a talented UX/UI Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts.",
    requirements: [
      "Proven UI experience",
      "Demonstrable UI design skills with a strong portfolio",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Excellent visual design skills",
    ],
    status: "Open",
  },
  {
    id: 3,
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "We are looking for a Data Scientist to analyze large amounts of raw information to find patterns that will help improve our company. We will rely on you to build data products to extract valuable business insights.",
    requirements: [
      "Proven experience as a Data Scientist or Data Analyst",
      "Experience in data mining",
      "Understanding of machine-learning and operations research",
      "Knowledge of Python, SQL and R",
    ],
    status: "Open",
  },
];

export const mockCandidates: Candidate[] = [
  {
    id: 101,
    name: "Aisha Khan",
    email: "aisha.k@example.com",
    jobId: 1,
    experience: 7,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "GraphQL",
      "Tailwind CSS",
      "Jest",
      "CI/CD",
    ],
    resumeSummary:
      "Seasoned Frontend Engineer with 7 years of experience building scalable and maintainable web applications. Proven ability to lead projects and mentor junior developers. Passionate about performance and user experience.",
    status: "Active",
  },
  {
    id: 102,
    name: "Bob Williams",
    email: "bob.w@example.com",
    jobId: 1,
    experience: 4,
    skills: ["React", "JavaScript", "Redux", "Sass"],
    resumeSummary:
      "Mid-level Frontend Developer with a strong foundation in React and state management. Eager to grow and take on more challenging projects. A collaborative team player with a good eye for detail.",
    status: "Active",
  },
  {
    id: 103,
    name: "Marcus Chen",
    email: "marcus.c@example.com",
    jobId: 1,
    experience: 8,
    skills: ["Angular", "Vue.js", "TypeScript", "Node.js"],
    resumeSummary:
      "Experienced web developer with a background in various frameworks, including Angular and Vue. Recently started working with React. Strong backend skills with Node.js.",
    status: "Rejected",
  },
  {
    id: 201,
    name: "Diana Prince",
    email: "diana.p@example.com",
    jobId: 2,
    experience: 6,
    skills: ["Figma", "User Research", "Prototyping", "Wireframing"],
    resumeSummary:
      "Creative and detail-oriented UX/UI designer with a passion for crafting intuitive and beautiful user interfaces. Strong portfolio showcasing a range of projects from mobile apps to complex web platforms.",
    status: "Active",
  },
  {
    id: 301,
    name: "Ethan Hunt",
    email: "ethan.h@example.com",
    jobId: 3,
    experience: 5,
    skills: ["Python", "Pandas", "scikit-learn", "TensorFlow", "SQL"],
    resumeSummary:
      "Data Scientist with 5 years of experience in building machine learning models and performing complex data analysis. Skilled in translating data into actionable business insights.",
    status: "Active",
  },
];

export const mockEmployees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    department: "Engineering",
    performanceScore: 4.5,
    tenure: 3,
    email: "j.doe@corp.com",
    salary: 95000,
    managerRating: 4,
    tasksCompleted: 150,
    trainings: ["Advanced React", "State Management Patterns"],
    lastPromotionDate: "2022-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager",
    department: "Product",
    performanceScore: 4.8,
    tenure: 5,
    email: "j.smith@corp.com",
    salary: 130000,
    managerRating: 5,
    tasksCompleted: 80,
    trainings: ["Agile Leadership", "Market Analysis"],
    lastPromotionDate: "2021-06-20",
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Backend Developer",
    department: "Engineering",
    performanceScore: 4.2,
    tenure: 2,
    email: "p.jones@corp.com",
    salary: 90000,
    managerRating: 4,
    tasksCompleted: 180,
    trainings: ["Database Optimization"],
    lastPromotionDate: "2023-02-10",
  },
  {
    id: 4,
    name: "Mary Davis",
    role: "Marketing Lead",
    department: "Marketing",
    performanceScore: 4.9,
    tenure: 6,
    email: "m.davis@corp.com",
    salary: 110000,
    managerRating: 5,
    tasksCompleted: 120,
    trainings: ["SEO Strategy", "Digital Campaign Management"],
    lastPromotionDate: "2020-03-01",
  },
  {
    id: 5,
    name: "Chris Wilson",
    role: "QA Engineer",
    department: "Engineering",
    performanceScore: 4.0,
    tenure: 4,
    email: "c.wilson@corp.com",
    salary: 85000,
    managerRating: 4,
    tasksCompleted: 250,
    trainings: ["Automation Testing with Cypress"],
    lastPromotionDate: "2021-11-01",
  },
  {
    id: 6,
    name: "Patricia Taylor",
    role: "Junior UX Designer",
    department: "Design",
    performanceScore: 4.7,
    tenure: 1.5,
    email: "p.taylor@corp.com",
    salary: 75000,
    managerRating: 5,
    tasksCompleted: 95,
    trainings: ["Advanced Figma", "User Research Techniques"],
    lastPromotionDate: "2023-01-01",
  },
];

// NEW: Mock data for the Testing page
export const mockTests: Test[] = [
  {
    id: "TC001",
    scenario: "AI Ranking with perfect match",
    input:
      "Job description for a Senior Frontend React Engineer matching Aisha Khan perfectly.",
    expected: "Aisha Khan gets score > 90.",
    actual: "Aisha Khan scored 95.",
    result: "Pass",
  },
  {
    id: "TC002",
    scenario: "AI Ranking with poor match",
    input: "Job description for a backend Java developer.",
    expected: "All candidates get low scores.",
    actual: "Marcus Chen scored 30, others lower.",
    result: "Pass",
  },
  {
    id: "TC003",
    scenario: "Empty job description submission",
    input: 'User clicks "Analyze" with empty text area.',
    expected: "Error message is shown.",
    actual: 'Error message "Job description cannot be empty." is displayed.',
    result: "Pass",
  },
  {
    id: "TC004",
    scenario: "Handle API failure gracefully",
    input: "Simulate Gemini API key error.",
    expected: "User-friendly error message about API is shown.",
    actual: 'Error message "Failed to get AI-powered ranking..." is shown.',
    result: "Fail",
  },
  {
    id: "TC005",
    scenario: "Responsive view on mobile",
    input: "Open app on a 375px width screen.",
    expected: "Layout adjusts, sidebar is hidden or stacked.",
    actual: "Sidebar collapses, content is visible.",
    result: "Pass",
  },
];

export const mockSuccessionPlan: SuccessorAssignment[] = [
  {
    roleId: "ENG_LEAD",
    roleTitle: "Engineering Lead",
    department: "Engineering",
    successor: { employeeId: 2, employeeName: "Jane Smith" },
    readiness: "1-2 Years",
  },
  {
    roleId: "MKT_HEAD",
    roleTitle: "Head of Marketing",
    department: "Marketing",
    successor: { employeeId: 4, employeeName: "Mary Davis" },
    readiness: "Ready Now",
  },
  {
    roleId: "PROD_DIR",
    roleTitle: "Product Director",
    department: "Product",
    readiness: "Not Assigned",
  },
  {
    roleId: "QA_LEAD",
    roleTitle: "QA Lead",
    department: "Engineering",
    successor: { employeeId: 5, employeeName: "Chris Wilson" },
    readiness: "3-5 Years",
  },
];

export const mockOnboardingTasks: OnboardingTask[] = [
  {
    id: "task1",
    title: "Sign Employment Contract",
    completed: true,
    details: "Review and sign the contract sent to your email.",
  },
  {
    id: "task2",
    title: "Upload ID Document",
    completed: true,
    details:
      "Upload a government-issued photo ID (e.g., Passport, Driver's License).",
  },
  {
    id: "task3",
    title: "Complete HR Information Form",
    completed: false,
    details:
      "Fill out your personal details, emergency contacts, and bank information in the HR portal.",
  },
  {
    id: "task4",
    title: "Set up Company Accounts",
    completed: false,
    details:
      "Follow the IT instructions to set up your email and other software accounts.",
  },
  {
    id: "task5",
    title: "Schedule Orientation Session",
    completed: false,
    details:
      "Book your spot in one of the upcoming new hire orientation sessions.",
  },
];
