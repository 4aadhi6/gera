// import { GoogleGenAI, Type } from "@google/genai";
// import { Job, Candidate, Employee, RankedCandidate, PromotionSuggestion, PerformanceEvaluation } from "../types";

// const API_KEY = process.env.API_KEY;

// if (!API_KEY) {
//   console.error("API_KEY environment variable not set.");
// }

// const ai = new GoogleGenAI({ apiKey: API_KEY! });

// const candidateRankingSchema = {
//     type: Type.ARRAY,
//     items: {
//         type: Type.OBJECT,
//         properties: {
//             rank: { type: Type.INTEGER, description: "The rank of the candidate." },
//             candidateName: { type: Type.STRING, description: "The name of the candidate." },
//             fitScore: { type: Type.INTEGER, description: "A score from 0 to 100 indicating the fit for the role." },
//             reasoning: { type: Type.STRING, description: "A concise summary explaining the ranking and score." },
//             strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Bulleted list of candidate's strengths for this role." },
//             weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Bulleted list of candidate's weaknesses or areas of concern." }
//         },
//         required: ["rank", "candidateName", "fitScore", "reasoning", "strengths", "weaknesses"]
//     }
// };

// export const rankCandidatesWithAI = async (job: Job, candidates: Candidate[]): Promise<RankedCandidate[]> => {
//   const model = "gemini-2.5-flash";
//   const systemInstruction = "You are an expert talent acquisition specialist with 20 years of experience. Your task is to analyze the provided job description and a list of candidates. Rank them from best to worst fit for the role. Provide a fit score, and detailed, objective reasoning for each ranking, including specific strengths and weaknesses relative to the job requirements.";
  
//   const prompt = `
//     Job Description:
//     Title: ${job.title}
//     Description: ${job.description}
//     Requirements: ${job.requirements.join(', ')}

//     Candidates:
//     ${candidates.map(c => `
//       - Name: ${c.name}
//         Experience: ${c.experience} years
//         Skills: ${c.skills.join(', ')}
//         Resume Summary: ${c.resumeSummary}
//     `).join('')}

//     Please rank these candidates and provide the analysis in the requested JSON format.
//   `;

//   try {
//     const response = await ai.models.generateContent({
//       model: model,
//       contents: prompt,
//       config: {
//         systemInstruction,
//         responseMimeType: "application/json",
//         responseSchema: candidateRankingSchema,
//       },
//     });

//     const jsonText = response.text.trim();
//     // The response is an array of candidates, but the schema has candidateId which is not in the response
//     // so we need to parse it and add it manually
//     const parsed = JSON.parse(jsonText);
//     return parsed.map((ranked: Omit<RankedCandidate, 'candidateId'>) => {
//         const candidate = candidates.find(c => c.name === ranked.candidateName);
//         return {
//             ...ranked,
//             candidateId: candidate ? candidate.id : 0,
//         };
//     });
//   } catch (error) {
//     console.error("Error ranking candidates with AI:", error);
//     throw new Error("Failed to get AI-powered ranking. Please check your API key and network connection.");
//   }
// };


// const promotionSuggestionSchema = {
//     type: Type.ARRAY,
//     items: {
//         type: Type.OBJECT,
//         properties: {
//             employeeName: { type: Type.STRING },
//             suggestedRole: { type: Type.STRING },
//             reasoning: { type: Type.STRING, description: "Detailed justification for the promotion suggestion based on performance, tenure, and role."},
//             confidenceScore: { type: Type.NUMBER, description: "A score from 0 to 1 indicating confidence in this suggestion." }
//         },
//         required: ["employeeName", "suggestedRole", "reasoning", "confidenceScore"]
//     }
// };

// export const suggestPromotionsWithAI = async (employees: Employee[]): Promise<PromotionSuggestion[]> => {
//     const model = "gemini-2.5-flash";
//     const systemInstruction = "You are an expert HR Business Partner specializing in organizational development and succession planning. Your task is to analyze a list of employees, including their current role, performance score, and tenure. Based on this data, identify employees who are strong candidates for promotion and suggest a logical next-step role for them. Provide clear reasoning for each suggestion.";

//     const prompt = `
//       Employee Data:
//       ${employees.map(e => `
//         - Name: ${e.name}
//           Current Role: ${e.role}
//           Department: ${e.department}
//           Performance Score: ${e.performanceScore}/5
//           Tenure: ${e.tenure} years
//       `).join('')}

//       Please identify the top 2-3 candidates for promotion from this list and provide your suggestions in the requested JSON format. Focus on high performers with adequate tenure who are ready for more responsibility.
//     `;

//     try {
//         const response = await ai.models.generateContent({
//             model,
//             contents: prompt,
//             config: {
//                 systemInstruction,
//                 responseMimeType: "application/json",
//                 responseSchema: promotionSuggestionSchema,
//             },
//         });
        
//         const jsonText = response.text.trim();
//         return JSON.parse(jsonText);
//     } catch (error) {
//         console.error("Error suggesting promotions with AI:", error);
//         throw new Error("Failed to get AI-powered promotion suggestions.");
//     }
// };

// const performanceEvaluationSchema = {
//     type: Type.ARRAY,
//     items: {
//         type: Type.OBJECT,
//         properties: {
//             employeeName: { type: Type.STRING },
//             suggestion: { type: Type.STRING, enum: ['Promote', 'Salary Increment', 'Maintain'], description: "The primary recommendation for this employee." },
//             suggestedRole: { type: Type.STRING, description: "If suggestion is 'Promote', the recommended new role." },
//             suggestedSalary: { type: Type.NUMBER, description: "If suggestion is 'Salary Increment', the recommended new total salary." },
//             reasoning: { type: Type.STRING, description: "Detailed justification for the suggestion based on performance data." },
//             strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Key strengths observed from the data." },
//             weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Areas for improvement observed from the data." },
//             confidenceScore: { type: Type.NUMBER, description: "A score from 0 to 1 indicating confidence in the suggestion." }
//         },
//         required: ["employeeName", "suggestion", "reasoning", "strengths", "weaknesses", "confidenceScore"]
//     }
// };

// export const evaluatePerformanceWithAI = async (employees: Employee[]): Promise<PerformanceEvaluation[]> => {
//     const model = "gemini-2.5-flash";
//     const systemInstruction = "You are a Senior HR Analyst AI. Your task is to conduct a performance review of employees based on provided data. Identify top performers who deserve a promotion or a salary increment. For each employee you identify, provide a clear suggestion, a confidence score, and detailed reasoning based on their data. Also suggest a new role for promotions or a new salary for increments.";
    
//     const prompt = `
//       Current Date: ${new Date().toISOString().split('T')[0]}
//       Analyze the following employee data and generate performance evaluations. Focus on the top 3-4 most notable cases for promotion or salary increases.

//       Employee Data:
//       ${employees.map(e => `
//         - Name: ${e.name}
//           Role: ${e.role}
//           Department: ${e.department}
//           Salary: ${e.salary}
//           Performance Score (avg last 6m): ${e.performanceScore}/5
//           Manager Rating (last review): ${e.managerRating}/5
//           Tenure: ${e.tenure} years
//           Tasks Completed (last quarter): ${e.tasksCompleted}
//           Trainings Completed: ${e.trainings.join(', ')}
//           Last Promotion: ${e.lastPromotionDate}
//       `).join('')}

//       Provide your analysis in the requested JSON format. Be specific in your reasoning. For salary increments, suggest a new total salary, not just the raise amount.
//     `;

//     try {
//         const response = await ai.models.generateContent({
//             model,
//             contents: prompt,
//             config: {
//                 systemInstruction,
//                 responseMimeType: "application/json",
//                 responseSchema: performanceEvaluationSchema,
//             },
//         });
        
//         const jsonText = response.text.trim();
//         const parsed = JSON.parse(jsonText);

//         return parsed.map((evalData: Omit<PerformanceEvaluation, 'employeeId'>) => {
//             const employee = employees.find(e => e.name === evalData.employeeName);
//             return {
//                 ...evalData,
//                 employeeId: employee ? employee.id : 0,
//             };
//         });

//     } catch (error) {
//         console.error("Error evaluating performance with AI:", error);
//         throw new Error("Failed to get AI-powered performance evaluations.");
//     }
// };

import { GoogleGenAI, Type } from "@google/genai";
import {
  Job,
  Candidate,
  Employee,
  RankedCandidate,
  PromotionSuggestion,
  PerformanceEvaluation,
} from "../types";

// ✅ Vite-compatible environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ VITE_GEMINI_API_KEY not set in .env or Vercel environment.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const candidateRankingSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      rank: { type: Type.INTEGER, description: "The rank of the candidate." },
      candidateName: { type: Type.STRING, description: "The name of the candidate." },
      fitScore: { type: Type.INTEGER, description: "Score from 0 to 100 indicating fit for the role." },
      reasoning: { type: Type.STRING, description: "Summary explaining the ranking and score." },
      strengths: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Candidate strengths." },
      weaknesses: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Candidate weaknesses." },
    },
    required: ["rank", "candidateName", "fitScore", "reasoning", "strengths", "weaknesses"],
  },
};

export const rankCandidatesWithAI = async (
  job: Job,
  candidates: Candidate[]
): Promise<RankedCandidate[]> => {
  const model = "gemini-2.5-flash";
  const systemInstruction = "You are an expert recruiter. Rank candidates for a given job based on their experience and fit.";

  const prompt = `
    Job Description:
    Title: ${job.title}
    Description: ${job.description}
    Requirements: ${job.requirements.join(', ')}

    Candidates:
    ${candidates
      .map(
        (c) => `
      - Name: ${c.name}
        Experience: ${c.experience} years
        Skills: ${c.skills.join(', ')}
        Resume Summary: ${c.resumeSummary}
    `
      )
      .join('')}

    Please rank these candidates and provide the output in the defined JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: candidateRankingSchema,
      },
    });

    const jsonText = response.text.trim();
    const parsed = JSON.parse(jsonText);
    return parsed.map((ranked: Omit<RankedCandidate, "candidateId">) => {
      const candidate = candidates.find((c) => c.name === ranked.candidateName);
      return {
        ...ranked,
        candidateId: candidate ? candidate.id : 0,
      };
    });
  } catch (error) {
    console.error("Error ranking candidates with AI:", error);
    throw new Error("AI candidate ranking failed.");
  }
};

const promotionSuggestionSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      employeeName: { type: Type.STRING },
      suggestedRole: { type: Type.STRING },
      reasoning: { type: Type.STRING },
      confidenceScore: { type: Type.NUMBER },
    },
    required: ["employeeName", "suggestedRole", "reasoning", "confidenceScore"],
  },
};

export const suggestPromotionsWithAI = async (
  employees: Employee[]
): Promise<PromotionSuggestion[]> => {
  const model = "gemini-2.5-flash";
  const systemInstruction = "You are a senior HR specialist. Suggest employee promotions based on performance and tenure.";

  const prompt = `
    Employee Data:
    ${employees
      .map(
        (e) => `
      - Name: ${e.name}
        Role: ${e.role}
        Department: ${e.department}
        Performance Score: ${e.performanceScore}/5
        Tenure: ${e.tenure} years
    `
      )
      .join('')}

    Provide your promotion suggestions in JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: promotionSuggestionSchema,
      },
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error suggesting promotions with AI:", error);
    throw new Error("AI promotion suggestion failed.");
  }
};

const performanceEvaluationSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      employeeName: { type: Type.STRING },
      suggestion: {
        type: Type.STRING,
        enum: ["Promote", "Salary Increment", "Maintain"],
      },
      suggestedRole: { type: Type.STRING },
      suggestedSalary: { type: Type.NUMBER },
      reasoning: { type: Type.STRING },
      strengths: { type: Type.ARRAY, items: { type: Type.STRING } },
      weaknesses: { type: Type.ARRAY, items: { type: Type.STRING } },
      confidenceScore: { type: Type.NUMBER },
    },
    required: [
      "employeeName",
      "suggestion",
      "reasoning",
      "strengths",
      "weaknesses",
      "confidenceScore",
    ],
  },
};

export const evaluatePerformanceWithAI = async (
  employees: Employee[]
): Promise<PerformanceEvaluation[]> => {
  const model = "gemini-2.5-flash";
  const systemInstruction = "You are an HR analyst AI. Evaluate employees and give decisions with justifications.";

  const prompt = `
    Date: ${new Date().toISOString().split("T")[0]}

    Employee Data:
    ${employees
      .map(
        (e) => `
      - Name: ${e.name}
        Role: ${e.role}
        Department: ${e.department}
        Salary: ${e.salary}
        Performance Score: ${e.performanceScore}/5
        Manager Rating: ${e.managerRating}/5
        Tenure: ${e.tenure} years
        Tasks Completed: ${e.tasksCompleted}
        Trainings: ${e.trainings.join(', ')}
        Last Promotion: ${e.lastPromotionDate}
    `
      )
      .join('')}

    Output the evaluation in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: performanceEvaluationSchema,
      },
    });

    const jsonText = response.text.trim();
    const parsed = JSON.parse(jsonText);

    return parsed.map((evalData: Omit<PerformanceEvaluation, "employeeId">) => {
      const employee = employees.find((e) => e.name === evalData.employeeName);
      return {
        ...evalData,
        employeeId: employee ? employee.id : 0,
      };
    });
  } catch (error) {
    console.error("Error evaluating performance with AI:", error);
    throw new Error("AI performance evaluation failed.");
  }
};
