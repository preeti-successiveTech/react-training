"use client";

import UserList from "@/components/UserList";
import withDataFetching from "@/components/WithDataFetching";

// Sample server-side fetch function
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users;
}

// Wrap the Client Component with the HOC
const UsersPage = withDataFetching(UserList, fetchUsers);

export default UsersPage;
