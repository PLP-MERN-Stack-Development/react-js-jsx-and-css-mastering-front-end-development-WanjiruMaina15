 import React,{useState} from 'react';
 import Buttons from '../Components/Buttons';
 import Card from "../Components/Card";
 import Navbar from "../Components/Navbar";
 import Footer from "../Components/Footer";
 import { H, P } from "../Components/Typography";
 import {getTaskDetails} from "../Components/Utils/TaskDetails";


 export default function Dashboard() { 
  
  const [tasks, setTasks] = useState([]);
     const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState('all');
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDetails, setNewTaskDetails] = useState('');
  const [newTaskDate, setNewTaskDate] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

   // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    if (filter === 'overdue') {
      const now = new Date();
      const dueDate = new Date(task.dueDate);
      return !task.completed && dueDate < now;
    }
    return true;
  });
//TASK STATS
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => !t.completed).length,
    overdue: tasks.filter(t => {
      const now = new Date();
      const dueDate = new Date(t.dueDate);
      return !t.completed && dueDate < now;
    }).length,
  };


 // Add new task
  const handleAddTask = () => {
    if (newTaskName.trim() && newTaskDate) {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        details: newTaskDetails,
        dueDate: newTaskDate,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
      setNewTaskDetails('');
      setNewTaskDate('');
      setShowAddForm(false);
    }
  };

   // Toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    if (selectedTask && selectedTask.id === id) {
      setSelectedTask(null);
    }
  };
   // Handle task click
  const handleTaskClick = (task) => {
    const details = getTaskDetails(task);
    setSelectedTask({ ...task, ...details });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Task Manager Dashboard</h1>
          <p className="text-gray-600">Manage your tasks efficiently</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:border-0">
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">{stats.total}</div>
              <div className="text-blue-100">Total Tasks</div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 hover:border-0">
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">{stats.completed}</div>
              <div className="text-green-100">Completed</div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white border-0 hover:border-0">
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">{stats.pending}</div>
              <div className="text-yellow-100">Pending</div>
            </div>
          </Card>
          
          <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0 hover:border-0">
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">{stats.overdue}</div>
              <div className="text-red-100">Overdue</div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Task List Section */}
          <div className="lg:col-span-2">
            <Card title="Tasks">
              {/* Add Task Button */}
              <div className="mb-4">
                <Buttons
                  variant="success" 
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="w-full"
                >
                  {showAddForm ? '− Cancel' : '+ Add New Task'}
                </Buttons>
              </div>

              {/* Add Task Form */}
              {showAddForm && (
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Task name *"
                      value={newTaskName}
                      onChange={(e) => setNewTaskName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Task details"
                      value={newTaskDetails}
                      onChange={(e) => setNewTaskDetails(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="2"
                    />
                    <input
                      type="date"
                      value={newTaskDate}
                      onChange={(e) => setNewTaskDate(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Buttons variant="success" onClick={handleAddTask} className="w-full">
                      Save Task
                    </Buttons>
                  </div>
                </div>
              )}

              {/* Filter Buttons */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <Buttons
                  variant={filter === 'all' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  All ({tasks.length})
                </Buttons>
                <Buttons
                  variant={filter === 'pending' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setFilter('pending')}
                >
                  Pending ({stats.pending})
                </Buttons>
                <Buttons
                  variant={filter === 'completed' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setFilter('completed')}
                >
                  Completed ({stats.completed})
                </Buttons>
                <Buttons
                  variant={filter === 'overdue' ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setFilter('overdue')}
                >
                  Overdue ({stats.overdue})
                </Buttons>
              </div>

              {/* Task List */}
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredTasks.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No tasks found</p>
                ) : (
                  filteredTasks.map((task) => {
                    const taskDetails = getTaskDetails(task);
                    const isOverdue = taskDetails.status === 'Overdue';
                    const isCompleted = taskDetails.status === 'Done';
                    
                    return (
                      <div
                        key={task.id}
                        onClick={() => handleTaskClick(task)}
                        className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                          selectedTask?.id === task.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-blue-300'
                        } ${isCompleted ? 'opacity-60' : ''}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 flex-1">
                            <input
                              type="checkbox"
                              checked={task.completed}
                              onChange={(e) => {
                                e.stopPropagation();
                                toggleTask(task.id);
                              }}
                              className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                            />
                            <div className="flex-1">
                              <h4 className={`font-semibold ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                {task.name}
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">{task.details}</p>
                              <div className="flex items-center gap-3 mt-2">
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                  isCompleted ? 'bg-green-100 text-green-700' :
                                  isOverdue ? 'bg-red-100 text-red-700' :
                                  'bg-yellow-100 text-yellow-700'
                                }`}>
                                  {taskDetails.status}
                                </span>
                                <span className="text-xs text-gray-500">
                                  📅 {taskDetails.dueDate}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Buttons
                            variant="danger"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteTask(task.id);
                            }}
                          >
                            Delete
                          </Buttons>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </Card>
          </div>

          {/* Task Details Section */}
          <div className="lg:col-span-1">
            <Card title="Task Details">
              {selectedTask ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {selectedTask.name}
                    </h3>
                    <span className={`inline-block text-sm px-3 py-1 rounded-full font-medium ${
                      selectedTask.status === 'Done' ? 'bg-green-100 text-green-700' :
                      selectedTask.status === 'Overdue' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {selectedTask.status}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Details</h4>
                    <p className="text-gray-600">{selectedTask.details}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Due Date</h4>
                    <p className="text-gray-600">📅 {selectedTask.dueDate}</p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <Buttons
                      variant={selectedTask.completed ? 'secondary' : 'success'}
                      onClick={() => toggleTask(selectedTask.id)}
                      className="w-full"
                    >
                      {selectedTask.completed ? 'Mark as Pending' : 'Mark as Complete'}
                    </Buttons>
                    <Buttons
                      variant="danger"
                      onClick={() => deleteTask(selectedTask.id)}
                      className="w-full"
                    >
                      Delete Task
                    </Buttons>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-4xl mb-3">📋</p>
                  <p>Select a task to view details</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
