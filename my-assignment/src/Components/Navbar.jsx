import react, {useState}from 'react';
import { Search } from "lucide-react";


const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left: App title + filter buttons */}
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-blue-600">My Tasks</h1>

        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <button className="px-3 py-1.5 text-sm hover:bg-blue-600 hover:text-white transition">
            All
          </button>
          <button className="px-3 py-1.5 text-sm hover:bg-blue-600 hover:text-white transition">
            Pending
          </button>
          <button className="px-3 py-1.5 text-sm hover:bg-blue-600 hover:text-white transition">
            Done
          </button>
          <button className="px-3 py-1.5 text-sm hover:bg-blue-600 hover:text-white transition">
            Overdue
          </button>
        </div>
      </div>

      {/* Middle: Search bar */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1.5 w-1/3">
        <Search className="h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent focus:outline-none text-sm ml-2 w-full text-gray-800 dark:text-gray-100"
        />
      </div>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-4">
        <button className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-600">
          Profile
        </button>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;