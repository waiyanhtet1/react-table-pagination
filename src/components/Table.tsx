type TableItem = {
  id: number;
  full_name: string;
  phone: string;
  email: string;
  signUp_Date: string;
};

export type TableProps = {
  data: TableItem[];
};

const Table = ({ data }: TableProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="p-3">ID</th>
          <th className="p-3">Name</th>
          <th className="p-3">Phone</th>
          <th className="p-3">Email</th>
          <th className="p-3">Date</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.full_name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.signUp_Date}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
