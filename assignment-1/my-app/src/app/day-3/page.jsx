"use client";
import Link from "next/link";
export default function day3() {
  return (
    <div id="page">
      <h1>It is Assignment-3</h1>
      <Link href="/day-3/ParentAuth">
        <button>Ques-1</button>
      </Link>
      <Link href="/day-3/PrefernceTheme">
        <button>Ques-2</button>
      </Link>
      <Link href="/day-3/NavigationPages">
        <button>Ques-3</button>
      </Link>
      <Link href="/day-3/ProtectedPage">
        <button>Ques-4</button>
      </Link>
      <Link href="/day-3/Dashboard">
        <button>Ques-5</button>
      </Link>
      <Link href="/day-3/ProductList">
        <button>Ques-6</button>
      </Link>
    </div>
  );
}
