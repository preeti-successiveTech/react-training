'use client';

import { useState } from 'react';

export default function ReuseableButton({ variant = 'primary', onClick, children }) {
  const [clicked, setClicked] = useState(false);

  const colors = {
    primary: '#1976d2',
    secondary: '#6c757d',
    danger: '#d32f2f',
  };

  const color = colors[variant] || colors.primary;

  function handleClick(e) {
    setClicked(true);
    if (onClick) onClick(e);
  }

  const style = {
    padding: '8px 16px',
    border: `2px solid ${color}`,
    borderRadius: 4,
    cursor: 'pointer',
    backgroundColor: clicked ? color : 'white',
    color: clicked ? 'white' : color,
    transition: 'all 0.3s ease',
  };

  return (
    <button style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
