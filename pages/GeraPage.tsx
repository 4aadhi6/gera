import React, { useState } from "react"; // FIX: Imported useState
import { motion, AnimatePresence } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  KpiCard,
} from "../components/ui";
import {
  CheckCircleIcon,
  RocketIcon,
  ClipboardListIcon,
  ChevronDownIcon,
} from "../components/icons"; // FIX: ChevronDownIcon will now be found

// --- Static Data with Detailed Descriptions ---
const timelineData = [
  {
    weeks: "1-2",
    activity: "Requirement Gathering & Analysis",
    status: "Completed",
    summary:
      "Defining project scope, objectives, and key deliverables with stakeholders.",
    details: [
      "Conduct stakeholder interviews to identify pain points and needs.",
      "Analyze existing systems and workflows to find opportunities for improvement.",
      "Create a detailed Software Requirement Specification (SRS) document.",
      "Finalize project scope and get sign-off from all key parties.",
    ],
  },
  {
    weeks: "3-4",
    activity: "UI/UX & System Design",
    status: "Completed",
    summary:
      "Creating design mockups, user flow diagrams, and the database schema.",
    details: [
      "Develop low-fidelity wireframes for all major application screens.",
      "Create high-fidelity mockups and a clickable prototype in Figma.",
      "Design the MongoDB schema and define data relationships.",
      "Architect the overall system, including frontend/backend separation of concerns.",
    ],
  },
  {
    weeks: "5-6",
    activity: "Core Module Development",
    status: "In Progress",
    summary: "Building the job posting and candidate sourcing features.",
    details: [
      "Set up the MERN stack project structure with Express.js and React.",
      "Develop the API endpoints for creating, reading, updating, and deleting job postings.",
      "Build the React components for displaying job lists and individual job pages.",
      "Implement the candidate application form and connect it to the backend.",
    ],
  },
  {
    weeks: "7",
    activity: "Automation Implementation",
    status: "In Progress",
    summary: "Developing automated shortlisting and letter generation.",
    details: [
      "Implement AI-powered candidate ranking based on job descriptions.",
      "Create templates for automated offer and rejection letters.",
      "Integrate a service for sending emails directly from the platform.",
      "Build the UI for HR managers to trigger and review automated actions.",
    ],
  },
  {
    weeks: "8",
    activity: "Onboarding & Workflow Creation",
    status: "Not Started",
    summary: "Designing the interfaces for new hire onboarding workflows.",
    details: [
      "Design a dynamic checklist for new hires to track onboarding progress.",
      "Create a portal for uploading required documents securely.",
      "Develop a dashboard for HR to monitor the onboarding status of all new employees.",
    ],
  },
  {
    weeks: "11",
    activity: "System Testing & Feedback",
    status: "Not Started",
    summary: "Conducting end-to-end testing and gathering user feedback.",
    details: [
      "Write and execute unit tests for critical backend and frontend logic.",
      "Perform integration testing to ensure all modules work together seamlessly.",
      "Conduct User Acceptance Testing (UAT) with a select group of stakeholders.",
      "Collect and document feedback for the final iteration.",
    ],
  },
  {
    weeks: "12",
    activity: "Deployment & Presentation",
    status: "Not Started",
    summary:
      "Final deployment, creating documentation, and presenting the project.",
    details: [
      "Configure production environment and set up CI/CD pipelines.",
      "Deploy the application to a cloud hosting service.",
      "Create comprehensive user and technical documentation.",
      "Prepare and deliver the final project presentation to stakeholders.",
    ],
  },
];

const COLORS = {
  Completed: "#22c55e",
  "In Progress": "#f59e0b",
  "Not Started": "#ef4444",
};

// --- Accordion Item Component for the Timeline ---
const TimelineItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: (typeof timelineData)[0];
  isOpen: boolean;
  onClick: () => void;
}) => {
  const statusColor =
    item.status === "Completed"
      ? "bg-green-500"
      : item.status === "In Progress"
      ? "bg-amber-500"
      : "bg-muted";
  return (
    <div className="relative pl-8">
      <div
        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-card ${statusColor}`}
      ></div>
      <div className="cursor-pointer" onClick={onClick}>
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <p className="text-xs font-semibold text-muted-foreground">
              WEEK(S) {item.weeks}
            </p>
            <h4 className="font-semibold text-lg">{item.activity}</h4>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pl-4 border-l-2 border-dashed border-border ml-1.5">
              <p className="italic text-muted-foreground mb-4">
                {item.summary}
              </p>
              <ul className="space-y-2">
                {item.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main Page Component ---
export const GeraPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const totalPhases = timelineData.length;
  const completedCount = timelineData.filter(
    (d) => d.status === "Completed"
  ).length;
  const inProgressCount = timelineData.filter(
    (d) => d.status === "In Progress"
  ).length;

  const chartData = [
    { name: "Completed", value: completedCount },
    { name: "In Progress", value: inProgressCount },
    {
      name: "Not Started",
      value: totalPhases - completedCount - inProgressCount,
    },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-card/70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              Gera – Performance & Progress Tracking Module
            </CardTitle>
            <CardDescription className="pt-2">
              Gera is a smart visual module designed to track the progress,
              performance, and task status of individuals or teams. It helps
              present a clear summary of activities such as onboarding, project
              tracking, or employee progress.
            </CardDescription>
          </CardHeader>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            title="Total Project Phases"
            value={String(totalPhases)}
            icon={<ClipboardListIcon className="w-6 h-6" />}
          />
          <KpiCard
            title="Phases Completed"
            value={String(completedCount)}
            icon={<CheckCircleIcon className="w-6 h-6" />}
          />
          <KpiCard
            title="Phases In Progress"
            value={String(inProgressCount)}
            icon={<RocketIcon className="w-6 h-6" />}
          />
          <div className="lg:h-48 h-64 md:col-span-2 lg:col-span-1 bg-card/70 backdrop-blur-lg border rounded-lg p-4 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name as keyof typeof COLORS]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value} Phases`} />
                <Legend iconSize={10} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-card/70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Project Timeline</CardTitle>
            <CardDescription>
              Click on each phase to expand and view detailed activities.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-6">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
