// app/fetch-api/page.jsx

import RetryClient from "./RetryClient";

export default async function FetchApiWithMessage() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      cache: 'no-store', // ensures SSR fetches fresh data
    });

    if (!res.ok) {
      throw new Error('Fetch failed');
    }

    const data = await res.json();

    return (
      <main style={{ padding: '1rem' }}>
        <h1>User List</h1>
        <ul>
          {data.map(user => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </main>
    );
  } catch (error) {
    return (
      <main style={{ padding: '1rem' }}>
        <RetryClient/>
      </main>
    );
  }
}
