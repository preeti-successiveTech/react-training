'use client';

import { useState } from 'react';

export default function RetryClient() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleRetry() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Retry fetch failed');
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;
  if (error) return (<>
  <h1>Something happend</h1>
  <p style={{ color: 'red' }}>{error}</p>
  <button onClick={handleRetry}>Retry</button>
  </>);
  if (data)
    return (
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    );

  return <button onClick={handleRetry}>Retry</button>;
}
