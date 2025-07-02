// app/fetch-api/page.jsx

import RetryClientSpinner from "./RetryClientSpinner";

export default async function FetchApiWithSpinner() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/use', {
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
        <RetryClientSpinner/>
      </main>
    );
  }
}
