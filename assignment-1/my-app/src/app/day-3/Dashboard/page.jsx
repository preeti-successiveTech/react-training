// app/day-3/dashboard/page.jsx
"use client"; // This is a client-side component

import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link href="pages/Profile">Profile</Link>
          </li>
          <li>
            <Link href="pages/Setting">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
