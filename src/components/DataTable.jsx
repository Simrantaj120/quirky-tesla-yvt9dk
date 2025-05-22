const DataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DataTable;
