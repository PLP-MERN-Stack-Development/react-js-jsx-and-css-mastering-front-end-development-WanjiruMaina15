import React, { useState, useEffect } from 'react';
// 1. Import your Axios fetching function
import api from '../Apis/axios'; 
// 2. Import your utility function for data processing
import { getTaskDetails } from '../Components/Utils/TaskDetails'; 

function TaskList() {
    // State hooks to manage the component's status
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect hook to fetch data when the component first mounts
    useEffect(() => {
        const fetchTaskData = async () => {
            try {
                // Perform the API call
                const response = await api.get('/api/Task'); 
                
                // Set the fetched data to state
                setTasks(response.data); 
            } catch (err) {
                // Log and set the error state if the fetch fails
                console.error("Fetch Error:", err);
                setError("Failed to load tasks from the API. Check backend connection.");
            } finally {
                // Set loading to false regardless of success or failure
                setLoading(false); 
            }
        };

        fetchTaskData();
    }, []); // Empty dependency array means this runs only once

    return (
        // Wrapper div for the API Data Section
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Task List (API Data)</h2>

            {/* Conditional Rendering: Loading State */}
            {loading && (
                <p className="text-blue-500 dark:text-blue-400 font-medium">
                    Loading tasks...
                </p>
            )}

            {/* Conditional Rendering: Error State */}
            {error && (
                <p className="text-red-600 dark:text-red-400 font-bold">
                    Error: {error}
                </p>
            )}

            {/* Conditional Rendering: Data List */}
            {!loading && !error && tasks.length > 0 && (
                <ul className="space-y-3">
                    {tasks.map((task) => {
                        // 3. Use the utility function to process details for display
                        const taskDetails = getTaskDetails(task);
                        
                        // Determine color based on processed status
                        let statusColor = 'text-yellow-400';
                        if (taskDetails.status === 'Done') {
                            statusColor = 'text-green-400';
                        } else if (taskDetails.status === 'Overdue') {
                            statusColor = 'text-red-500';
                        }
                        
                        return (
                            // Use task._id for the unique key
                            <li 
                                key={task._id} 
                                className="p-3 border-l-4 border-indigo-500 dark:bg-gray-700 rounded-md shadow-sm"
                            >
                                <p className="font-semibold text-lg">{taskDetails.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Details: {taskDetails.details}
                                </p>
                                <p className={`text-sm ${statusColor}`}>
                                    Status: **{taskDetails.status}** | Due: {taskDetails.dueDate}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            )}
            
            {/* Conditional Rendering: Empty State */}
             {!loading && !error && tasks.length === 0 && (
                 <p className="text-gray-500 dark:text-gray-400">
                    No tasks found.
                 </p>
             )}

        </div>
    );
}

export default TaskList;