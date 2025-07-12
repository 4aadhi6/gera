// // import React, { useEffect, useRef } from "react";
// // import {
// //   Chart,
// //   DoughnutController,
// //   ArcElement,
// //   Tooltip,
// //   Legend,
// // } from "chart.js";
// // import { useAppContext } from "../../context/AppContext";

// // // Register the necessary components for a pie/doughnut chart
// // Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

// // export const CandidateStatusPieChart = () => {
// //   const chartRef = useRef<HTMLCanvasElement>(null);
// //   const chartInstance = useRef<Chart | null>(null);
// //   const { theme, candidates } = useAppContext();

// //   useEffect(() => {
// //     if (!chartRef.current) return;

// //     const isDark = theme === "dark";
// //     const textColor = isDark ? "#e2e8f0" : "#334155";

// //     // Process candidate data
// //     const statusCounts = candidates.reduce((acc, candidate) => {
// //       acc[candidate.status] = (acc[candidate.status] || 0) + 1;
// //       return acc;
// //     }, {} as Record<string, number>);

// //     const data = {
// //       labels: Object.keys(statusCounts),
// //       datasets: [
// //         {
// //           label: "Candidates by Status",
// //           data: Object.values(statusCounts),
// //           backgroundColor: [
// //             "rgba(59, 130, 246, 0.7)", // Blue (Active)
// //             "rgba(34, 197, 94, 0.7)", // Green (Hired)
// //             "rgba(239, 68, 68, 0.7)", // Red (Rejected)
// //             "rgba(168, 85, 247, 0.7)", // Purple
// //           ],
// //           borderColor: [
// //             "rgba(59, 130, 246, 1)",
// //             "rgba(34, 197, 94, 1)",
// //             "rgba(239, 68, 68, 1)",
// //             "rgba(168, 85, 247, 1)",
// //           ],
// //           borderWidth: 1,
// //         },
// //       ],
// //     };

// //     if (chartInstance.current) {
// //       chartInstance.current.destroy();
// //     }

// //     chartInstance.current = new Chart(chartRef.current, {
// //       type: "doughnut", // Use 'doughnut' for a more modern look
// //       data: data,
// //       options: {
// //         responsive: true,
// //         maintainAspectRatio: false,
// //         cutout: "75%", // This creates the hole in the middle
// //         plugins: {
// //           legend: {
// //             position: "bottom",
// //             labels: {
// //               color: textColor,
// //               padding: 20,
// //             },
// //           },
// //           title: {
// //             display: false,
// //           },
// //         },
// //       },
// //     });

// //     return () => {
// //       chartInstance.current?.destroy();
// //     };
// //   }, [theme, candidates]);

// //   return <canvas ref={chartRef} />;
// // };
// // src/components/charts/CandidateStatusPieChart.tsx

// // FIX: Removed 'React' from import as it's not directly used.
// import { useEffect, useRef } from "react";
// import {
//   Chart,
//   DoughnutController,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// // ... rest of the file is correct
// import { useAppContext } from "../../context/AppContext";

// Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

// export const CandidateStatusPieChart = () => {
//   const chartRef = useRef<HTMLCanvasElement>(null);
//   const chartInstance = useRef<Chart | null>(null);
//   const { theme, candidates } = useAppContext();

//   useEffect(() => {
//     if (!chartRef.current) return;

//     const isDark = theme === "dark";
//     const textColor = isDark ? "#e2e8f0" : "#334155";

//     const statusCounts = candidates.reduce((acc, candidate) => {
//       acc[candidate.status] = (acc[candidate.status] || 0) + 1;
//       return acc;
//     }, {} as Record<string, number>);

//     const data = {
//       labels: Object.keys(statusCounts),
//       datasets: [
//         {
//           label: "Candidates by Status",
//           data: Object.values(statusCounts),
//           backgroundColor: [
//             "rgba(59, 130, 246, 0.7)",
//             "rgba(34, 197, 94, 0.7)",
//             "rgba(239, 68, 68, 0.7)",
//             "rgba(168, 85, 247, 0.7)",
//           ],
//           borderColor: [
//             "rgba(59, 130, 246, 1)",
//             "rgba(34, 197, 94, 1)",
//             "rgba(239, 68, 68, 1)",
//             "rgba(168, 85, 247, 1)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     };

//     if (chartInstance.current) {
//       chartInstance.current.destroy();
//     }

//     chartInstance.current = new Chart(chartRef.current, {
//       type: "doughnut",
//       data: data,
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         cutout: "75%",
//         plugins: {
//           legend: {
//             position: "bottom",
//             labels: {
//               color: textColor,
//               padding: 20,
//             },
//           },
//           title: {
//             display: false,
//           },
//         },
//       },
//     });

//     return () => {
//       chartInstance.current?.destroy();
//     };
//   }, [theme, candidates]);

//   return <canvas ref={chartRef} />;
// };
// src/components/charts/CandidateStatusPieChart.tsx

// FIX: Removed unused 'React' from import.
import { useEffect, useRef } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { useAppContext } from "../../context/AppContext";

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

export const CandidateStatusPieChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const { theme, candidates } = useAppContext();

  useEffect(() => {
    if (!chartRef.current) return;

    const isDark = theme === "dark";
    const textColor = isDark ? "#e2e8f0" : "#334155";

    const statusCounts = candidates.reduce((acc, candidate) => {
      acc[candidate.status] = (acc[candidate.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const data = {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          label: "Candidates by Status",
          data: Object.values(statusCounts),
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(34, 197, 94, 0.7)",
            "rgba(239, 68, 68, 0.7)",
            "rgba(168, 85, 247, 0.7)",
          ],
          borderColor: [
            "rgba(59, 130, 246, 1)",
            "rgba(34, 197, 94, 1)",
            "rgba(239, 68, 68, 1)",
            "rgba(168, 85, 247, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "75%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              color: textColor,
              padding: 20,
            },
          },
          title: {
            display: false,
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
    };
  }, [theme, candidates]);

  return <canvas ref={chartRef} />;
};
