import { useState } from "react";
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
} from "../components/ui"; // Assumed to exist
import {
  CheckCircleIcon,
  RocketIcon,
  ClipboardListIcon,
  ChevronDownIcon,
} from "../components/icons"; // Assumed to exist

// --- TYPE DEFINITION for our data structure ---
interface TimelineData {
  weeks: string;
  activity: string;
  status: string;
  summary: string;
  details: string[];
}

// --- DATA SOURCE 1: Your New Project Timeline Data ---
const projectTimelineData: TimelineData[] = [
  {
    weeks: "1-2",
    activity: "Requirement Gathering & Analysis",
    status: "Completed",
    summary:
      "Defining project scope, objectives, and key deliverables with stakeholders.",
    details: [
      "Conduct stakeholder interviews",
      "Finalize project scope and get sign-off",
    ],
  },
  {
    weeks: "3-4",
    activity: "UI/UX & System Design",
    status: "Completed",
    summary:
      "Creating design mockups, user flow diagrams, and the database schema.",
    details: [
      "Develop low-fidelity wireframes",
      "Create high-fidelity mockups in Figma",
    ],
  },
  {
    weeks: "5-6",
    activity: "Core Module Development",
    status: "In Progress",
    summary: "Building the job posting and candidate sourcing features.",
    details: ["Set up project structure", "Develop API endpoints for jobs"],
  },
  {
    weeks: "7",
    activity: "Automation Implementation",
    status: "In Progress",
    summary: "Developing automated shortlisting and letter generation.",
    details: [
      "Implement AI candidate ranking",
      "Create templates for automated letters",
    ],
  },
  {
    weeks: "8",
    activity: "Onboarding & Workflow Creation",
    status: "Not Started",
    summary: "Designing the interfaces for new hire onboarding workflows.",
    details: [
      "Design a dynamic checklist for new hires",
      "Create a portal for document uploads",
    ],
  },
  {
    weeks: "9",
    activity: "Promotion & Succession Planning",
    status: "Not Started",
    summary:
      "Develop modules for career progression and identifying future leaders.",
    details: [
      "Design promotion workflow",
      "Build succession planning dashboard",
    ],
  },
  {
    weeks: "10",
    activity: "Performance Dashboards",
    status: "Not Started",
    summary:
      "Build and integrate performance dashboards and metrics for HR analytics.",
    details: ["Integrate with data sources", "Create visualization charts"],
  },
  {
    weeks: "11",
    activity: "System Testing & Feedback",
    status: "Not Started",
    summary: "Conducting end-to-end testing and gathering user feedback.",
    details: [
      "Perform User Acceptance Testing (UAT)",
      "Collect and document feedback",
    ],
  },
  {
    weeks: "12",
    activity: "Deployment & Presentation",
    status: "Not Started",
    summary:
      "Final deployment, creating documentation, and presenting the project.",
    details: [
      "Deploy to production server",
      "Deliver final project presentation",
    ],
  },
];

// --- DATA SOURCE 2: A "Jira" Demo Model (Fake Data) ---
const jiraDemoData: TimelineData[] = [
  {
    weeks: "JIRA-101",
    activity: "Fix login button styling on Safari",
    status: "Done",
    summary:
      "The login button was misaligned on Safari browsers. This has been corrected.",
    details: ["Assignee: Adithyan", "Status: Done", "Type: Bug"],
  },
  {
    weeks: "JIRA-105",
    activity: "Implement password reset functionality",
    status: "In Progress",
    summary:
      "Developing the API endpoint and frontend form for user password resets.",
    details: ["Assignee: Maria", "Status: In Progress", "Type: Story"],
  },
  {
    weeks: "JIRA-112",
    activity: "Design new user profile page",
    status: "To Do",
    summary: "Create mockups for a redesigned user profile page.",
    details: ["Assignee: Unassigned", "Status: To Do", "Type: Task"],
  },
];

// Color mapping for all statuses
type StatusColorKey =
  | "Completed"
  | "Done"
  | "In Progress"
  | "Not Started"
  | "To Do";
const COLORS: Record<StatusColorKey, string> = {
  Completed: "#22c55e",
  Done: "#22c55e",
  "In Progress": "#f59e0b",
  "Not Started": "#ef4444",
  "To Do": "#ef4444",
};

// --- Reusable Accordion Item Component ---
interface TimelineItemProps {
  item: TimelineData;
  isOpen: boolean;
  onClick: () => void;
}
const TimelineItem = ({ item, isOpen, onClick }: TimelineItemProps) => {
  const statusKey = item.status as StatusColorKey;
  const statusColor = COLORS[statusKey] || "bg-muted";
  return (
    <div className="relative pl-8">
      <div
        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-4 border-card ${statusColor}`}
      ></div>
      <div className="cursor-pointer" onClick={onClick}>
        <div className="flex items-center justify-between">
          <div className="flex-grow">
            <p className="text-xs font-semibold text-muted-foreground">
              {item.weeks.startsWith("JIRA-")
                ? `ISSUE: ${item.weeks}`
                : `WEEK(S): ${item.weeks}`}
            </p>
            <h4 className="font-semibold text-lg">{item.activity}</h4>
          </div>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDownIcon className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
      <AnimatePresence>
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
            transition={{ duration: 0.3, ease: "easeInOut" }}
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

// --- Main Page Component (Still named GeraPage but with updated content) ---
export const GeraPage = () => {
  const [openTimelineIndex, setOpenTimelineIndex] = useState<number | null>(0);
  const [openJiraIndex, setOpenJiraIndex] = useState<number | null>(0);

  // Stats for the main project timeline
  const totalPhases = projectTimelineData.length;
  const completedCount = projectTimelineData.filter(
    (d) => d.status === "Completed"
  ).length;
  const inProgressCount = projectTimelineData.filter(
    (d) => d.status === "In Progress"
  ).length;
  const notStartedCount = projectTimelineData.filter(
    (d) => d.status === "Not Started"
  ).length;

  const chartData = [
    { name: "Completed", value: completedCount },
    { name: "In Progress", value: inProgressCount },
    { name: "Not Started", value: notStartedCount },
  ];

  return (
    <div className="space-y-6">
      {/* --- SECTION 1: PROJECT TIMELINE --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="bg-card/70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              Project Timeline & Status
            </CardTitle>
            <CardDescription className="pt-2">
              A high-level overview of the project plan and its current
              progress.
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
            title="Total Phases"
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
                  data={chartData.filter((item) => item.value > 0)}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  label
                >
                  {chartData.map((entry) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[entry.name as StatusColorKey]}
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
            <CardTitle>Project Plan Details</CardTitle>
            <CardDescription>
              Click on each phase to see more details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-6">
                {projectTimelineData.map((item, index) => (
                  <TimelineItem
                    key={`timeline-${index}`}
                    item={item}
                    isOpen={openTimelineIndex === index}
                    onClick={() =>
                      setOpenTimelineIndex(
                        openTimelineIndex === index ? null : index
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* --- SECTION 2: JIRA DEMO --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="bg-card/70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle>Jira Issues (Demonstration)</CardTitle>
            <CardDescription>
              This section demonstrates how live tasks and bugs from a connected
              Jira project would be displayed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-6">
                {jiraDemoData.map((item, index) => (
                  <TimelineItem
                    key={`jira-${index}`}
                    item={item}
                    isOpen={openJiraIndex === index}
                    onClick={() =>
                      setOpenJiraIndex(openJiraIndex === index ? null : index)
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
