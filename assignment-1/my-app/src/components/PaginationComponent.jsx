"use client";

import { useEffect, useState } from "react";
import { Button ,Stack} from "@mui/material";

export default function PaginationComponent() {
  const pages_length = 2;
  const [data, setData] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data1 = await res.json();
      setData(data1);
    }
    fetchUsers();
  }, []);
  const total_page = (data.length / pages_length);
    const paginatedData = Array.isArray(data)
    ? data.slice((page - 1) * pages_length, page * pages_length)
    : [];
  return (
    <>
      <div>
        <ul>
        {paginatedData.map((data) => (
          <li key={data.id}>
            {data.name} — {data.email}
          </li>
        ))}
        </ul>
          <Stack direction="row" spacing={2} justifyContent="center">
      <Button variant="contained" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>Previous</Button>
      <Button variant="contained" onClick={() => setPage((p) => Math.min(p + 1, total_page))}
        disabled={page === total_page}>Next</Button>
        </Stack>
      </div>
    </>
  );
}
