import React, { useState } from "react";
import DataTable from "./DataTable";
import { users } from "../data/dummyData";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Table</h2>

      <input
        type="text"
        placeholder="Search by name..."
        className="mb-4 p-2 border rounded w-full max-w-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DataTable data={filteredUsers} />
    </div>
  );
};

export default Dashboard;
