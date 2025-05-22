import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <div className="text-2xl font-bold mb-8">Dashboard</div>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Overview
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Analytics
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Reports
        </a>
        <a href="#" className="hover:bg-gray-700 p-2 rounded">
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
