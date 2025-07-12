import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, Button, CardDescription } from '../components/ui';
import { mockSuccessionPlan, mockEmployees } from '../data/mockData';
import { SuccessorAssignment, Employee } from '../types';
import { useAppContext } from '../context/AppContext';

const AssignSuccessorForm = ({ assignment, employees, onSave, onCancel }: { assignment: SuccessorAssignment; employees: Employee[]; onSave: (data: SuccessorAssignment) => void; onCancel: () => void; }) => {
    const [successorId, setSuccessorId] = useState(assignment.successor?.employeeId || '');
    const [readiness, setReadiness] = useState(assignment.readiness);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedEmployee = employees.find(emp => emp.id === Number(successorId));
        onSave({
            ...assignment,
            successor: selectedEmployee ? { employeeId: selectedEmployee.id, employeeName: selectedEmployee.name } : undefined,
            readiness: readiness as SuccessorAssignment['readiness'],
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <h4 className="font-semibold">{assignment.roleTitle}</h4>
                <p className="text-sm text-muted-foreground">{assignment.department}</p>
            </div>
            <div>
                <label htmlFor="successor" className="block text-sm font-medium mb-1">Assign Successor</label>
                <select id="successor" value={successorId} onChange={e => setSuccessorId(e.target.value)} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring">
                    <option value="">None</option>
                    {employees.map(emp => (
                        <option key={emp.id} value={emp.id}>{emp.name} - {emp.role}</option>
                    ))}
                </select>
            </div>
            <div>
                 <label htmlFor="readiness" className="block text-sm font-medium mb-1">Readiness</label>
                <select id="readiness" value={readiness} onChange={e => setReadiness(e.target.value as SuccessorAssignment['readiness'])} className="w-full px-3 py-2 border rounded-md bg-transparent border-input focus:ring-1 focus:ring-ring">
                    <option>Not Assigned</option>
                    <option>Ready Now</option>
                    <option>1-2 Years</option>
                    <option>3-5 Years</option>
                </select>
            </div>
            <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="secondary" onClick={onCancel}>Cancel</Button>
                <Button type="submit">Save Assignment</Button>
            </div>
        </form>
    );
};

export const SuccessionPage = () => {
    const [plan, setPlan] = useState<SuccessorAssignment[]>(mockSuccessionPlan);
    const { showModal, hideModal } = useAppContext();

    const handleSaveAssignment = (updatedAssignment: SuccessorAssignment) => {
        setPlan(prevPlan => prevPlan.map(item => item.roleId === updatedAssignment.roleId ? updatedAssignment : item));
        hideModal();
    };
    
    const openAssignModal = (assignment: SuccessorAssignment) => {
        showModal(
            <AssignSuccessorForm 
                assignment={assignment}
                employees={mockEmployees}
                onSave={handleSaveAssignment}
                onCancel={hideModal}
            />,
            "Assign Successor"
        );
    };

    const getReadinessColor = (readiness: SuccessorAssignment['readiness']) => {
        switch (readiness) {
            case 'Ready Now': return 'bg-green-500 text-green-50';
            case '1-2 Years': return 'bg-yellow-500 text-yellow-900';
            case '3-5 Years': return 'bg-orange-500 text-orange-50';
            default: return 'bg-muted text-muted-foreground';
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
        >
            <Card>
                <CardHeader>
                    <CardTitle>Succession Planning</CardTitle>
                    <CardDescription>Identify and develop internal talent to fill key business leadership positions in the future.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                                <tr>
                                    <th className="px-6 py-3">Key Role</th>
                                    <th className="px-6 py-3">Department</th>
                                    <th className="px-6 py-3">Successor</th>
                                    <th className="px-6 py-3 text-center">Readiness</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plan.map(item => (
                                    <tr key={item.roleId} className="border-b border-border hover:bg-muted/50">
                                        <td className="px-6 py-4 font-medium">{item.roleTitle}</td>
                                        <td className="px-6 py-4">{item.department}</td>
                                        <td className="px-6 py-4">{item.successor?.employeeName || <span className="text-muted-foreground italic">Not Assigned</span>}</td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getReadinessColor(item.readiness)}`}>
                                                {item.readiness}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="secondary" size="sm" onClick={() => openAssignModal(item)}>
                                                Assign
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
};