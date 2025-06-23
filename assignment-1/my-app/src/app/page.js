// import Image from "next/image";
// import styles from "./page.module.css";

import Link from "next/link";

export default function Home() {
 return(<div id="page">

    <h1>All Assignments</h1>
    <Link href={'/day-1'}>
        <button>day-1</button>
    </Link>
    <Link href={'/day-2'}>
        <button>day-2</button>
    </Link>
  
 </div>);
}
