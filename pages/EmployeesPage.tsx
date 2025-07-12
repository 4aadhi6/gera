// import React, { useState, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button, Card, CardContent, CardHeader, CardTitle, MotionCard, CardDescription } from '../components/ui';
// import { Employee, PromotionSuggestion } from '../types';
// import { suggestPromotionsWithAI } from '../services/geminiService';
// import { BrainCircuitIcon } from '../components/icons';
// import { useAppContext } from '../context/AppContext';

// const PromotionSuggestionCard: React.FC<{ suggestion: PromotionSuggestion; onApprove: (suggestion: PromotionSuggestion) => void; isPromoted: boolean }> = ({ suggestion, onApprove, isPromoted }) => {
//     const confidenceColor = suggestion.confidenceScore > 0.8 ? 'text-green-500' : suggestion.confidenceScore > 0.6 ? 'text-yellow-500' : 'text-red-500';
//     return (
//         <MotionCard
//             layout
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//         >
//             <CardHeader>
//                 <div className="flex justify-between items-start">
//                     <div>
//                         <CardTitle>{suggestion.employeeName}</CardTitle>
//                         <CardDescription>Suggestion: Promote to <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">{suggestion.suggestedRole}</span></CardDescription>
//                     </div>
//                     <div className="text-right">
//                         <p className="text-sm text-muted-foreground">Confidence</p>
//                         <p className={`font-bold text-lg ${confidenceColor}`}>{Math.round(suggestion.confidenceScore * 100)}%</p>
//                     </div>
//                 </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//                 <p className="text-sm">{suggestion.reasoning}</p>
//                 <div className="flex justify-end pt-2 border-t border-border">
//                     <Button size="sm" onClick={() => onApprove(suggestion)} disabled={isPromoted}>
//                         {isPromoted ? 'Promotion Approved' : 'Approve Promotion'}
//                     </Button>
//                 </div>
//             </CardContent>
//         </MotionCard>
//     );
// };

// const NewEmployeeForm = ({ onSubmit, onCancel }: { onSubmit: (employee: Pick<Employee, 'name' | 'role' | 'department' | 'email'>) => void; onCancel: () => void; }) => {
//     const [name, setName] = useState('');
//     const [role, setRole] = useState('');
//     const [department, setDepartment] = useState('');
//     const [email, setEmail] = useState('');

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         onSubmit({ name, role, department, email });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
//                 <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                  <div>
//                     <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
//                     <input id="role" type="text" value={role} onChange={e => setRole(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
//                 </div>
//                 <div>
//                     <label htmlFor="department" className="block text-sm font-medium mb-1">Department</label>
//                     <input id="department" type="text" value={department} onChange={e => setDepartment(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
//                 </div>
//             </div>
//              <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//                 <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
//             </div>
//             <div className="flex justify-end space-x-2 pt-4">
//                 <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
//                 <Button type="submit">Add Employee</Button>
//             </div>
//         </form>
//     );
// };

// export const EmployeesPage = () => {
//     const { employees, addEmployee, promoteEmployee, showModal, hideModal } = useAppContext();
//     const [suggestions, setSuggestions] = useState<PromotionSuggestion[]>([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     const handleGetSuggestions = useCallback(async () => {
//         setIsLoading(true);
//         setError(null);
//         setSuggestions([]);
//         try {
//             const result = await suggestPromotionsWithAI(employees);
//             setSuggestions(result);
//         } catch (e: any) {
//             setError(e.message || "An unknown error occurred.");
//         } finally {
//             setIsLoading(false);
//         }
//     }, [employees]);

//     const handleAddEmployee = (employeeData: Pick<Employee, 'name' | 'role' | 'department' | 'email'>) => {
//         addEmployee(employeeData);
//         hideModal();
//     };

//     const handleApprovePromotion = (suggestion: PromotionSuggestion) => {
//         const employeeToPromote = employees.find(e => e.name === suggestion.employeeName);
//         if (employeeToPromote) {
//             promoteEmployee(employeeToPromote.id, suggestion.suggestedRole);
//         }
//     };

//     const openNewEmployeeModal = () => {
//         showModal(<NewEmployeeForm onSubmit={handleAddEmployee} onCancel={hideModal} />, 'Add New Employee');
//     };

//     const containerVariants = {
//         hidden: { opacity: 1 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.05 }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: { y: 0, opacity: 1 }
//     };

//     return (
//         <div className="space-y-6">
//             <Card>
//                 <CardHeader>
//                     <CardTitle>AI Promotion Insights</CardTitle>
//                     <CardDescription>Analyze employee data to find the best candidates for promotion.</CardDescription>
//                 </CardHeader>
//                 <CardContent className="text-center">
//                     <Button onClick={handleGetSuggestions} isLoading={isLoading} disabled={isLoading}>
//                          <BrainCircuitIcon className="w-5 h-5 mr-2" />
//                         {isLoading ? 'Analyzing...' : 'Suggest Promotions'}
//                     </Button>
//                 </CardContent>
//             </Card>

//             <AnimatePresence>
//                 {error && (
//                      <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
//                     >
//                         {error}
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {suggestions.length > 0 && (
//                  <div className="space-y-4">
//                     <h3 className="text-2xl font-bold text-center">AI-Powered Promotion Suggestions</h3>
//                     <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//                         {suggestions.map(s => {
//                             const promotedEmployee = employees.find(e => e.name === s.employeeName);
//                             const isPromoted = promotedEmployee?.role === s.suggestedRole;
//                             return <PromotionSuggestionCard key={s.employeeName} suggestion={s} onApprove={handleApprovePromotion} isPromoted={isPromoted} />
//                         })}
//                     </div>
//                  </div>
//             )}

//             <Card>
//                 <CardHeader>
//                     <div className="flex justify-between items-center">
//                         <div>
//                             <CardTitle>Employee Directory</CardTitle>
//                             <CardDescription>List of all current employees.</CardDescription>
//                         </div>
//                         <Button onClick={openNewEmployeeModal}>Add Employee</Button>
//                     </div>
//                 </CardHeader>
//                 <CardContent>
//                     <motion.div
//                         className="overflow-x-auto"
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                     >
//                         <table className="w-full text-sm text-left">
//                             <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
//                                 <tr>
//                                     <th className="px-6 py-3">Name</th>
//                                     <th className="px-6 py-3">Role</th>
//                                     <th className="px-6 py-3">Department</th>
//                                     <th className="px-6 py-3 text-center">Performance</th>
//                                     <th className="px-6 py-3 text-center">Tenure (yrs)</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {employees.map(emp => (
//                                     <motion.tr key={emp.id} className="border-b border-border hover:bg-muted/50" variants={itemVariants}>
//                                         <td className="px-6 py-4 font-medium">{emp.name}</td>
//                                         <td className="px-6 py-4">{emp.role}</td>
//                                         <td className="px-6 py-4">{emp.department}</td>
//                                         <td className="px-6 py-4 text-center">{emp.performanceScore} / 5</td>
//                                         <td className="px-6 py-4 text-center">{emp.tenure}</td>
//                                     </tr >
//                                 ))}
//                             </tbody>
//                         </table>
//                     </motion.div>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// };
// Make sure all necessary hooks and types are imported
import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Card, CardContent, CardHeader, CardTitle, MotionCard, CardDescription } from '../components/ui';
// Make sure these types are correctly defined and exported from your types file
import { Employee, PromotionSuggestion } from '../types';
import { suggestPromotionsWithAI } from '../services/geminiService';
import { BrainCircuitIcon } from '../components/icons';
import { useAppContext } from '../context/AppContext';

// Props for PromotionSuggestionCard are already well-defined, no changes needed here.
const PromotionSuggestionCard: React.FC<{ suggestion: PromotionSuggestion; onApprove: (suggestion: PromotionSuggestion) => void; isPromoted: boolean }> = ({ suggestion, onApprove, isPromoted }) => {
    const confidenceColor = suggestion.confidenceScore > 0.8 ? 'text-green-500' : suggestion.confidenceScore > 0.6 ? 'text-yellow-500' : 'text-red-500';
    return (
        <MotionCard
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
        >
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{suggestion.employeeName}</CardTitle>
                        <CardDescription>Suggestion: Promote to <span className="font-semibold text-primary-btn dark:text-primary-btn-foreground">{suggestion.suggestedRole}</span></CardDescription>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-muted-foreground">Confidence</p>
                        <p className={`font-bold text-lg ${confidenceColor}`}>{Math.round(suggestion.confidenceScore * 100)}%</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-sm">{suggestion.reasoning}</p>
                <div className="flex justify-end pt-2 border-t border-border">
                    <Button size="sm" onClick={() => onApprove(suggestion)} disabled={isPromoted}>
                        {isPromoted ? 'Promotion Approved' : 'Approve Promotion'}
                    </Button>
                </div>
            </CardContent>
        </MotionCard>
    );
};

// Props for NewEmployeeForm are already well-defined.
const NewEmployeeForm = ({ onSubmit, onCancel }: { onSubmit: (employee: Pick<Employee, 'name' | 'role' | 'department' | 'email'>) => void; onCancel: () => void; }) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');

    // FIX: Add type for the form event
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, role, department, email });
    };

    return (
        // FIX: Add the correct event handler type to the form's onSubmit prop
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                {/* FIX: Add type for the change event */}
                <input id="name" type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">Role</label>
                    <input id="role" type="text" value={role} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
                </div>
                <div>
                    <label htmlFor="department" className="block text-sm font-medium mb-1">Department</label>
                    <input id="department" type="text" value={department} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDepartment(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
                </div>
            </div>
             <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input id="email" type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring" required />
            </div>
            <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button type="submit">Add Employee</Button>
            </div>
        </form>
    );
};

export const EmployeesPage = () => {
    const { employees, addEmployee, promoteEmployee, showModal, hideModal } = useAppContext();
    const [suggestions, setSuggestions] = useState<PromotionSuggestion[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetSuggestions = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setSuggestions([]);
        try {
            const result = await suggestPromotionsWithAI(employees);
            setSuggestions(result);
        } catch (e: any) {
            setError(e.message || "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    }, [employees]);

    const handleAddEmployee = (employeeData: Pick<Employee, 'name' | 'role' | 'department' | 'email'>) => {
        addEmployee(employeeData);
        hideModal();
    };

    const handleApprovePromotion = (suggestion: PromotionSuggestion) => {
        const employeeToPromote = employees.find(e => e.name === suggestion.employeeName);
        if (employeeToPromote) {
            promoteEmployee(employeeToPromote.id, suggestion.suggestedRole);
        }
    };
    
    const openNewEmployeeModal = () => {
        showModal(<NewEmployeeForm onSubmit={handleAddEmployee} onCancel={hideModal} />, 'Add New Employee');
    };

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>AI Promotion Insights</CardTitle>
                    <CardDescription>Analyze employee data to find the best candidates for promotion.</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button onClick={handleGetSuggestions} isLoading={isLoading} disabled={isLoading}>
                         <BrainCircuitIcon className="w-5 h-5 mr-2" />
                        {isLoading ? 'Analyzing...' : 'Suggest Promotions'}
                    </Button>
                </CardContent>
            </Card>

            <AnimatePresence>
                {error && (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="p-4 text-center text-destructive bg-destructive/10 border border-destructive/20 rounded-lg"
                    >
                        {error}
                    </motion.div>
                )}
            </AnimatePresence>

            {suggestions.length > 0 && (
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-center">AI-Powered Promotion Suggestions</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {suggestions.map(s => {
                            const promotedEmployee = employees.find(e => e.name === s.employeeName);
                            const isPromoted = !!promotedEmployee && promotedEmployee.role === s.suggestedRole;
                            return <PromotionSuggestionCard key={s.employeeName} suggestion={s} onApprove={handleApprovePromotion} isPromoted={isPromoted} />
                        })}
                    </div>
                 </div>
            )}
            
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle>Employee Directory</CardTitle>
                            <CardDescription>List of all current employees.</CardDescription>
                        </div>
                        <Button onClick={openNewEmployeeModal}>Add Employee</Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <motion.div 
                        className="overflow-x-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                <tr>
                                    <th className="px-6 py-3">Name</th>
                                    <th className="px-6 py-3">Role</th>
                                    <th className="px-6 py-3">Department</th>
                                    <th className="px-6 py-3 text-center">Performance</th>
                                    <th className="px-6 py-3 text-center">Tenure (yrs)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* FIX: Add type for the 'emp' parameter in map */}
                                {employees.map((emp: Employee) => (
                                    <motion.tr key={emp.id} className="border-b border-border hover:bg-muted/50" variants={itemVariants}>
                                        <td className="px-6 py-4 font-medium">{emp.name}</td>
                                        <td className="px-6 py-4">{emp.role}</td>
                                        <td className="px-6 py-4">{emp.department}</td>
                                        <td className="px-6 py-4 text-center">{emp.performanceScore} / 5</td>
                                        <td className="px-6 py-4 text-center">{emp.tenure}</td>
                                    </motion.tr >
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </CardContent>
            </Card>
        </div>
    );
};