import { useState } from "react";
import "./App.css";

// Import your components here
import Buttons from "./Components/Buttons";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Taskmanager from "./Components/Taskmanager";
import Card from "./Components/Card";
import { H, P } from "./Components/Typography";
import {getTaskDetails} from "./Components/Utils/TaskDetails";
import Dashboard from "./Pages/Dashboard";
import TaskList from "./Components/TaskList";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Task Manager Section */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
         
          <Taskmanager />
        </div>

        {/* Dashboard Section */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6 mb-8">
          <Dashboard />
        </div>

        {/* API Data Section (optional placeholder) */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">MY TASKS</h2>
          <TaskList />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;