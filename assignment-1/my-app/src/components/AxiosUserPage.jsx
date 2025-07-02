// app/axios-users/page.jsx

import axios from 'axios';

export default async function AxiosUsersPage() {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    const users = res.data;

    return (
      <main style={{ padding: '2rem' }}>
        <h1>Users (Fetched with Axios)</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    return (
      <main style={{ padding: '2rem', color: 'red' }}>
        <h1>Failed to fetch users</h1>
        <p>{error.message}</p>
      </main>
    );
  }
}
