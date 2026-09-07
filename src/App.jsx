import { useState } from "react";

const API_URL =
  "https://my-json-server.typicode.com/shaluyadav25/live-getData/users/";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section>
        <h1>Users</h1>

        <button onClick={loadUsers}>Fetch Users</button>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <span>{user.role}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default App;
