'use client';

import { useState } from 'react';
import { Button, CircularProgress, Typography, Box } from '@mui/material';

export default function RetryClientSpinner({ serverError }) {
  const [data, setData] = useState(null);
  const [clientError, setClientError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [retrying, setRetrying] = useState(false);

  async function handleRetry() {
    setLoading(true);
    setRetrying(true);
    setClientError(null);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Retry fetch failed');
      const json = await res.json();
      setData(json);
    } catch (err) {
      setClientError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (data) {
    return (
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          User List (Retry Success)
        </Typography>
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 2 }}>
      {!retrying && (
        <Typography variant="body1" color="error" gutterBottom>
          {serverError}
        </Typography>
      )}

      {clientError && (
        <Typography variant="body1" color="error" gutterBottom>
          {clientError}
        </Typography>
      )}

      {loading ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CircularProgress size={24} />
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Button variant="contained" onClick={handleRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
}
