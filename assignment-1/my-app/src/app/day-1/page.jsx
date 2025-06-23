// import Image from "next/image";
// import styles from "./page.module.css";

import Link from "next/link";

export default function day1() {
  return (
    <div id="page">
      <h1>It is Assignment-1</h1>
      <Link href="/day-1/Greeting">
        <button>Ques-1</button>
      </Link>
      <Link href="/day-1/UserCard">
        <button>Ques-2</button>
      </Link>
      <Link href="/day-1/Weather">
        <button>Ques-3</button>
      </Link>
      <Link href="/day-1/Counter">
        <button>Ques-4</button>
      </Link>
      <Link href="/day-1/TaskList">
        <button>Ques-5</button>
      </Link>
      <Link href="/day-1/Button">
        <button>Ques-6</button>
      </Link>
    </div>
  );
}
