import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6">
        <Dashboard />
      </main>
    </div>
  );
}
