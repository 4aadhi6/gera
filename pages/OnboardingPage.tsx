import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/ui';
import { mockOnboardingTasks } from '../data/mockData';
import { OnboardingTask } from '../types';
import { CheckCircleIcon } from '../components/icons';
import { mockCandidates } from '../data/mockData';

export const OnboardingPage = () => {
    const [tasks, setTasks] = useState<OnboardingTask[]>(mockOnboardingTasks);

    const handleToggleTask = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const completedTasks = useMemo(() => tasks.filter(task => task.completed).length, [tasks]);
    const totalTasks = tasks.length;
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    
    // Using a hired candidate's name for personalization
    const newHireName = mockCandidates.find(c => c.name === 'Aisha Khan')?.name || 'New Hire';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <Card>
                    <CardHeader>
                        <CardTitle>Onboarding Progress for {newHireName}</CardTitle>
                        <CardDescription>Complete these tasks to finish the onboarding process.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex justify-between font-medium text-sm">
                                <span>Progress</span>
                                <span>{completedTasks} / {totalTasks} Tasks Completed</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2.5">
                                <motion.div
                                    className="bg-primary-btn h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressPercentage}%` }}
                                    transition={{ type: 'spring', stiffness: 100 }}
                                ></motion.div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
            >
                {tasks.map(task => (
                    <motion.div key={task.id} variants={itemVariants}>
                        <Card className={`transition-all duration-300 ${task.completed ? 'bg-muted/50 dark:bg-dark-muted/50' : 'bg-card'}`}>
                            <CardContent className="p-4 flex items-center">
                                <label htmlFor={task.id} className="flex items-center cursor-pointer w-full">
                                    <input
                                        id={task.id}
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => handleToggleTask(task.id)}
                                        className="h-5 w-5 rounded border-gray-300 text-primary-btn focus:ring-primary-btn"
                                    />
                                    <div className="ml-4 flex-grow">
                                        <p className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                                            {task.title}
                                        </p>
                                        <p className={`text-sm text-muted-foreground ${task.completed ? 'line-through' : ''}`}>
                                            {task.details}
                                        </p>
                                    </div>
                                    {task.completed && (
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 ml-4" />
                                    )}
                                </label>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
