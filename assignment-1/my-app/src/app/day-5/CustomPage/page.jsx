'use client';

import { useState } from 'react';
import ReuseableButton from '@/components/ReuseableButton';

export default function CustomPage() {
  const [msg, setMsg] = useState('');

  return (
    <div style={{ padding: 20 }}>
      <h1>Simple Button Demo</h1>

      <ReuseableButton variant="primary" onClick={() => setMsg('Primary clicked')}>
        Primary
      </ReuseableButton>{' '}
      <ReuseableButton variant="secondary" onClick={() => setMsg('Secondary clicked')}>
        Secondary
      </ReuseableButton>{' '}
      <ReuseableButton variant="danger" onClick={() => setMsg('Danger clicked')}>
        Danger
      </ReuseableButton>

      {msg && <p style={{ marginTop: 20 }}>{msg}</p>}
    </div>
  );
}
