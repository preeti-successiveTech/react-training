'use client';

import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function RetryAxiosHandle() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleRetry() {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        const json = res.data;
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
  <Button variant="contained" onClick={handleRetry}>Retry</Button>
  </>);
  if (data)
    return (
      <ul style={{color: 'black'}}>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    );

  return (<>
  <h1>Something happend</h1>
  <Button variant="contained" onClick={handleRetry}>Retry</Button></>);
}
