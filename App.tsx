import React, { useState, ReactNode, useRef, useEffect, Fragment } from "react";
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

import { AppProvider, useAppContext } from "./context/AppContext";
import { LoginPage } from "./pages/Login";
import { DashboardPage } from "./pages/DashboardPage";
import { JobDetailPage } from "./pages/JobDetailPage";
import { EmployeesPage } from "./pages/EmployeesPage";
import { PerformancePage } from "./pages/PerformancePage";
import { SuccessionPage } from "./pages/SuccessionPage";
import { AIRankerPage } from "./pages/AIRankerPage";
import { OnboardingPage } from "./pages/OnboardingPage";
import { TestingPage } from "./pages/TestingPage";
import { TalentPipelinePage } from "./pages/TalentPipelinePage";
// NEW: Import the new GeraPage component
import { GeraPage } from "./pages/GeraPage";
import { NavItem } from "./types";
import { Button } from "./components/ui";

import {
  SunIcon,
  MoonIcon,
  DashboardIcon,
  UsersIcon,
  TrendingUpIcon,
  RocketIcon,
  ClipboardListIcon,
  SparklesIcon,
  ClipboardCheckIcon,
  TestTubeIcon,
  UserCircleIcon,
  LogOutIcon,
  LockIcon,
  CheckCircleIcon,
  LayoutGridIcon,
  MenuIcon,
  BarChart3Icon,
} from "./components/icons";
import { TestCasesPage } from "./pages/TestCasesPage";

// The ChangePasswordForm component remains unchanged
const ChangePasswordForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!newPassword || !currentPassword) {
      setError("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
    if (currentPassword !== "password") {
      setError("Your current password is not correct.");
      return;
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-sm text-center text-destructive p-2 bg-destructive/10 rounded-md">
          {error}
        </p>
      )}
      <div className="space-y-1">
        <label htmlFor="currentPassword">Current Password</label>
        <div className="relative flex items-center">
          <LockIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentPassword(e.target.value)
            }
            className="w-full pl-10 pr-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
            required
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="newPassword">New Password</label>
        <div className="relative flex items-center">
          <LockIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPassword(e.target.value)
            }
            className="w-full pl-10 pr-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
            required
          />
        </div>
      </div>
      <div className="space-y-1">
        <label htmlFor="confirmPassword">Confirm New Password</label>
        <div className="relative flex items-center">
          <LockIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full pl-10 pr-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring"
            required
          />
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button type="submit">Update Password</Button>
      </div>
    </form>
  );
};

// UPDATE: Added the new "Test Cases" item to the navigation array
const navItems: NavItem[] = [
  {
    path: "/",
    label: "Dashboard",
    icon: <DashboardIcon className="w-5 h-5" />,
  },
  {
    path: "/pipeline",
    label: "Talent Pipeline",
    icon: <LayoutGridIcon className="w-5 h-5" />,
  },
  {
    path: "/gera",
    label: "Jira",
    icon: <BarChart3Icon className="w-5 h-5" />,
  },
  {
    path: "/employees",
    label: "Employees",
    icon: <UsersIcon className="w-5 h-5" />,
  },
  {
    path: "/performance",
    label: "Performance",
    icon: <TrendingUpIcon className="w-5 h-5" />,
  },
  {
    path: "/onboarding",
    label: "Onboarding",
    icon: <ClipboardCheckIcon className="w-5 h-5" />,
  },
  {
    path: "/ai-ranker",
    label: "AI Ranker",
    icon: <SparklesIcon className="w-5 h-5" />,
  },
  {
    path: "/succession",
    label: "Succession",
    icon: <ClipboardListIcon className="w-5 h-5" />,
  },
  {
    path: "/testing",
    label: "Testing",
    icon: <TestTubeIcon className="w-5 h-5" />,
  },
  // NEW: Added the link for the new Test Cases page
  {
    path: "/test-cases",
    label: "Test Cases",
    icon: <ClipboardListIcon className="w-5 h-5" />, // Re-using an appropriate icon
  },
];

const ThemeToggle = () => {
  const { theme, toggleTheme } = useAppContext();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
    >
      <span className="sr-only">Toggle Theme</span>
      {theme === "light" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  );
};

const SidebarContent: React.FC<{ onLinkClick?: () => void }> = ({
  onLinkClick,
}) => (
  <div className="h-full flex flex-col">
    <div className="h-16 flex items-center px-6 border-b border-border/20">
      <RocketIcon className="w-8 h-8 text-primary" />
      <h1 className="ml-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
        TalentOS
      </h1>
    </div>
    <nav className="flex-grow px-4 py-6">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
    <div className="p-4 border-t border-border/20">
      <p className="text-xs text-muted-foreground">© 2025 TalentOS Inc.</p>
    </div>
  </div>
);

const Header: React.FC<{
  pageTitle: string;
  onMenuClick: () => void;
  onLogout: () => void;
}> = ({ pageTitle, onMenuClick, onLogout }) => {
  const { showModal, hideModal } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef]);

  const handlePasswordChangeSuccess = () => {
    hideModal();
    setTimeout(() => {
      showModal(
        <div className="text-center space-y-4">
          <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" />
          <p>Your password has been updated successfully!</p>
          <Button onClick={hideModal}>Close</Button>
        </div>,
        "Success"
      );
    }, 300);
  };

  const handleOpenChangePasswordModal = () => {
    setIsMenuOpen(false);
    showModal(
      <ChangePasswordForm onSuccess={handlePasswordChangeSuccess} />,
      "Change Your Password"
    );
  };

  return (
    <header className="h-16 flex-shrink-0 bg-card/80 backdrop-blur-lg border-b border-border flex items-center justify-between px-4 md:px-6 z-20">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="md:hidden mr-4 p-2 rounded-full text-muted-foreground hover:bg-muted"
        >
          <span className="sr-only">Open menu</span>
          <MenuIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">{pageTitle}</h2>
      </div>
      <div className="flex items-center space-x-2 md:space-x-4">
        <ThemeToggle />
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1.5 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          >
            <span className="sr-only">Open user menu</span>
            <UserCircleIcon className="w-6 h-6" />
          </button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-md shadow-lg z-10 origin-top-right"
              >
                <div className="py-1">
                  <button
                    onClick={handleOpenChangePasswordModal}
                    className="w-full text-left flex items-center px-4 py-2 text-sm text-card-foreground hover:bg-muted"
                  >
                    <LockIcon className="w-4 h-4 mr-2" /> Change Password
                  </button>
                  <button
                    onClick={onLogout}
                    className="w-full text-left flex items-center px-4 py-2 text-sm text-destructive hover:bg-muted"
                  >
                    <LogOutIcon className="w-4 h-4 mr-2" /> Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="p-6 lg:p-8 overflow-y-auto"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const MainLayout: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const currentNavItem = navItems.find((item) =>
    item.path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(item.path)
  );
  let pageTitle = "Dashboard";
  if (currentNavItem) {
    pageTitle = currentNavItem.label;
  } else if (location.pathname.startsWith("/job/")) {
    pageTitle = "Job Details";
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-card border-r border-border/20">
                <SidebarContent onLinkClick={() => setSidebarOpen(false)} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="w-64">
          <SidebarContent />
        </div>
      </div>

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          pageTitle={pageTitle}
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={onLogout}
        />
        <main className="flex-1 overflow-y-auto bg-background/95">
          <PageWrapper>
            {/* UPDATE: Added the route for the new /test-cases page */}
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/pipeline" element={<TalentPipelinePage />} />
              <Route path="/gera" element={<GeraPage />} />
              <Route path="/test-cases" element={<TestCasesPage />} />{" "}
              {/* NEW: Route for the page */}
              <Route path="/job/:id" element={<JobDetailPage />} />
              <Route path="/employees" element={<EmployeesPage />} />
              <Route path="/performance" element={<PerformancePage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="/ai-ranker" element={<AIRankerPage />} />
              <Route path="/succession" element={<SuccessionPage />} />
              <Route path="/testing" element={<TestingPage />} />
            </Routes>
          </PageWrapper>
        </main>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    () => localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", String(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <AnimatePresence mode="wait">
      {isAuthenticated ? (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MainLayout onLogout={handleLogout} />
        </motion.div>
      ) : (
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoginPage onLogin={handleLogin} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </AppProvider>
  );
}

export default App;
