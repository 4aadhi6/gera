// // // import React, { ReactNode } from 'react';
// // // import { motion } from 'framer-motion';

// // // interface CardProps {
// // //   children: ReactNode;
// // //   className?: string;
// // // }

// // // export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
// // //   <div className={`bg-card text-card-foreground border border-border rounded-lg shadow-sm ${className}`}>
// // //     {children}
// // //   </div>
// // // );

// // // export const CardHeader: React.FC<CardProps> = ({ children, className = '' }) => (
// // //   <div className={`p-6 border-b border-border ${className}`}>
// // //     {children}
// // //   </div>
// // // );

// // // export const CardContent: React.FC<CardProps> = ({ children, className = '' }) => (
// // //   <div className={`p-6 ${className}`}>
// // //     {children}
// // //   </div>
// // // );

// // // export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
// // //   <h3 className="text-lg font-semibold leading-none tracking-tight">{children}</h3>
// // // );

// // // export const CardDescription: React.FC<{ children: ReactNode }> = ({ children }) => (
// // //   <p className="text-sm text-muted-foreground">{children}</p>
// // // );

// // // interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// // //   children: ReactNode;
// // //   variant?: 'primary' | 'secondary' | 'destructive';
// // //   size?: 'default' | 'sm' | 'lg';
// // //   isLoading?: boolean;
// // // }

// // // export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
// // //   ({ children, className = '', variant = 'primary', size = 'default', isLoading = false, ...props }, ref) => {
// // //     const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

// // //     const variantClasses = {
// // //       primary: 'bg-primary-btn text-primary-btn-foreground hover:bg-primary-btn/90',
// // //       secondary: 'bg-secondary-btn text-secondary-btn-foreground hover:bg-secondary-btn/80',
// // //       destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
// // //     };

// // //     const sizeClasses = {
// // //       default: 'h-10 py-2 px-4',
// // //       sm: 'h-9 px-3 rounded-md text-xs',
// // //       lg: 'h-11 px-8 rounded-md',
// // //     };

// // //     return (
// // //       <button
// // //         className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
// // //         ref={ref}
// // //         disabled={isLoading || props.disabled}
// // //         {...props}
// // //       >
// // //         {isLoading ? (
// // //           <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
// // //             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
// // //             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
// // //           </svg>
// // //         ) : null}
// // //         {children}
// // //       </button>
// // //     );
// // //   }
// // // );

// // // interface KpiCardProps {
// // //     title: string;
// // //     value: string;
// // //     icon: ReactNode;
// // //     change?: string;
// // // }

// // // export const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon, change }) => (
// // //     <Card>
// // //         <CardContent className="flex items-center justify-between p-4">
// // //             <div>
// // //                 <p className="text-sm font-medium text-muted-foreground">{title}</p>
// // //                 <p className="text-2xl font-bold">{value}</p>
// // //                 {change && <p className="text-xs text-muted-foreground">{change}</p>}
// // //             </div>
// // //             <div className="p-3 rounded-lg bg-muted text-muted-foreground">{icon}</div>
// // //         </CardContent>
// // //     </Card>
// // // );

// // // export const MotionCard = motion(Card);
// // // FINAL, FULLY CORRECTED VERSION of src/components/ui.tsx

// // import React, { ReactNode } from "react";
// // import { motion } from "framer-motion";

// // // Define the props for the Card, including all standard div attributes
// // interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
// //   children: ReactNode;
// //   className?: string;
// // }

// // // FIX: The Card component itself is now wrapped in React.forwardRef.
// // // This allows it to receive a `ref` from Framer Motion, which is the modern requirement.
// // export const Card = React.forwardRef<HTMLDivElement, CardProps>(
// //   ({ children, className = "", ...props }, ref) => (
// //     <div
// //       ref={ref}
// //       className={`bg-card text-card-foreground border border-border rounded-lg shadow-sm ${className}`}
// //       {...props}
// //     >
// //       {children}
// //     </div>
// //   )
// // );
// // // Add a displayName for better debugging in React DevTools
// // Card.displayName = "Card";

// // export const CardHeader: React.FC<CardProps> = ({
// //   children,
// //   className = "",
// // }) => (
// //   <div className={`p-6 border-b border-border ${className}`}>{children}</div>
// // );

// // export const CardContent: React.FC<CardProps> = ({
// //   children,
// //   className = "",
// // }) => <div className={`p-6 ${className}`}>{children}</div>;

// // export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
// //   <h3 className="text-lg font-semibold leading-none tracking-tight">
// //     {children}
// //   </h3>
// // );

// // export const CardDescription: React.FC<{ children: ReactNode }> = ({
// //   children,
// // }) => <p className="text-sm text-muted-foreground">{children}</p>;

// // interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
// //   children: ReactNode;
// //   variant?: "primary" | "secondary" | "destructive";
// //   size?: "default" | "sm" | "lg";
// //   isLoading?: boolean;
// // }

// // export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
// //   (
// //     {
// //       children,
// //       className = "",
// //       variant = "primary",
// //       size = "default",
// //       isLoading = false,
// //       ...props
// //     },
// //     ref
// //   ) => {
// //     const baseClasses =
// //       "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

// //     const variantClasses = {
// //       primary:
// //         "bg-primary-btn text-primary-btn-foreground hover:bg-primary-btn/90",
// //       secondary:
// //         "bg-secondary-btn text-secondary-btn-foreground hover:bg-secondary-btn/80",
// //       destructive:
// //         "bg-destructive text-destructive-foreground hover:bg-destructive/90",
// //     };

// //     const sizeClasses = {
// //       default: "h-10 py-2 px-4",
// //       sm: "h-9 px-3 rounded-md text-xs",
// //       lg: "h-11 px-8 rounded-md",
// //     };

// //     return (
// //       <button
// //         className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
// //         ref={ref}
// //         disabled={isLoading || props.disabled}
// //         {...props}
// //       >
// //         {isLoading ? (
// //           <svg
// //             className="animate-spin -ml-1 mr-3 h-5 w-5"
// //             xmlns="http://www.w3.org/2000/svg"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //           >
// //             <circle
// //               className="opacity-25"
// //               cx="12"
// //               cy="12"
// //               r="10"
// //               stroke="currentColor"
// //               strokeWidth="4"
// //             ></circle>
// //             <path
// //               className="opacity-75"
// //               fill="currentColor"
// //               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //             ></path>
// //           </svg>
// //         ) : null}
// //         {children}
// //       </button>
// //     );
// //   }
// // );
// // Button.displayName = "Button";

// // interface KpiCardProps {
// //   title: string;
// //   value: string;
// //   icon: ReactNode;
// //   change?: string;
// // }

// // export const KpiCard: React.FC<KpiCardProps> = ({
// //   title,
// //   value,
// //   icon,
// //   change,
// // }) => (
// //   <Card>
// //     <CardContent className="flex items-center justify-between p-4">
// //       <div>
// //         <p className="text-sm font-medium text-muted-foreground">{title}</p>
// //         <p className="text-2xl font-bold">{value}</p>
// //         {change && <p className="text-xs text-muted-foreground">{change}</p>}
// //       </div>
// //       <div className="p-3 rounded-lg bg-muted text-muted-foreground">
// //         {icon}
// //       </div>
// //     </CardContent>
// //   </Card>
// // );

// // // FIX: Because the original `Card` component now uses `React.forwardRef`,
// // // `motion(Card)` will work correctly without any deprecation warnings.
// // export const MotionCard = motion(Card);
// // // ... (All your existing components like Card, Button, etc., remain the same)

// // // NEW: A reusable Skeleton component for professional loading states.
// // export const Skeleton = ({ className }: { className?: string }) => (
// //   <div
// //     className={`animate-pulse rounded-md bg-muted/80 dark:bg-muted/50 ${className}`}
// //   />
// // );
// import React, { ReactNode } from "react";
// import { motion } from "framer-motion";

// interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
//   children: ReactNode;
//   className?: string;
// }

// export const Card = React.forwardRef<HTMLDivElement, CardProps>(
//   ({ children, className = "", ...props }, ref) => (
//     <div
//       ref={ref}
//       className={`bg-card text-card-foreground border border-border rounded-lg shadow-sm ${className}`}
//       {...props}
//     >
//       {children}
//     </div>
//   )
// );
// Card.displayName = "Card";

// export const CardHeader: React.FC<CardProps> = ({
//   children,
//   className = "",
// }) => (
//   <div className={`p-6 border-b border-border ${className}`}>{children}</div>
// );
// export const CardContent: React.FC<CardProps> = ({
//   children,
//   className = "",
// }) => <div className={`p-6 ${className}`}>{children}</div>;
// export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
//   <h3 className="text-lg font-semibold leading-none tracking-tight">
//     {children}
//   </h3>
// );
// export const CardDescription: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => <p className="text-sm text-muted-foreground">{children}</p>;

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   variant?: "primary" | "secondary" | "destructive";
//   size?: "default" | "sm" | "lg";
//   isLoading?: boolean;
// }

// export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   (
//     {
//       children,
//       className = "",
//       variant = "primary",
//       size = "default",
//       isLoading = false,
//       ...props
//     },
//     ref
//   ) => {
//     const baseClasses =
//       "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
//     const variantClasses = {
//       primary: "bg-primary text-primary-foreground hover:bg-primary/90",
//       secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//       destructive:
//         "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//     };
//     const sizeClasses = {
//       default: "h-10 py-2 px-4",
//       sm: "h-9 px-3 rounded-md",
//       lg: "h-11 px-8 rounded-md",
//     };
//     return (
//       <button
//         className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
//         ref={ref}
//         disabled={isLoading || props.disabled}
//         {...props}
//       >
//         {isLoading ? (
//           <svg
//             className="animate-spin -ml-1 mr-3 h-5 w-5"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             ></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//             ></path>
//           </svg>
//         ) : null}
//         {children}
//       </button>
//     );
//   }
// );
// Button.displayName = "Button";

// interface KpiCardProps {
//   title: string;
//   value: string;
//   icon: ReactNode;
//   change?: string;
// }
// export const KpiCard: React.FC<KpiCardProps> = ({
//   title,
//   value,
//   icon,
//   change,
// }) => (
//   <Card>
//     <CardContent className="flex items-center justify-between p-4">
//       <div>
//         <p className="text-sm font-medium text-muted-foreground">{title}</p>
//         <p className="text-2xl font-bold">{value}</p>
//         {change && <p className="text-xs text-muted-foreground">{change}</p>}
//       </div>
//       <div className="p-3 rounded-lg bg-muted text-muted-foreground">
//         {icon}
//       </div>
//     </CardContent>
//   </Card>
// );

// export const MotionCard = motion(Card);

// export const Skeleton = ({ className }: { className?: string }) => (
//   <div
//     className={`animate-pulse rounded-md bg-muted/80 dark:bg-muted/50 ${className}`}
//   />
// );
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`bg-card text-card-foreground border border-border rounded-lg shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

export const CardHeader: React.FC<CardProps> = ({
  children,
  className = "",
}) => (
  <div className={`p-6 border-b border-border ${className}`}>{children}</div>
);
export const CardContent: React.FC<CardProps> = ({
  children,
  className = "",
}) => <div className={`p-6 ${className}`}>{children}</div>;
export const CardTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold leading-none tracking-tight">
    {children}
  </h3>
);
export const CardDescription: React.FC<{ children: ReactNode }> = ({
  children,
}) => <p className="text-sm text-muted-foreground">{children}</p>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "destructive";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "default",
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    };
    const sizeClasses = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    };
    return (
      <button
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

interface KpiCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  change?: string;
}
export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  icon,
  change,
}) => (
  <Card>
    <CardContent className="flex items-center justify-between p-4">
      <div>
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {change && <p className="text-xs text-muted-foreground">{change}</p>}
      </div>
      <div className="p-3 rounded-lg bg-muted text-muted-foreground">
        {icon}
      </div>
    </CardContent>
  </Card>
);

export const MotionCard = motion(Card);

export const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`animate-pulse rounded-md bg-muted/80 dark:bg-muted/50 ${className}`}
  />
);
