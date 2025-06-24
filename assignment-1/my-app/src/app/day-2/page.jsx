import Link from "next/link";

export default function day2(){
    return(
        <div id="page">
            <h1>It is Assignment-2</h1>
        <Link href={"/day-2/Counter"}>
        <button>Ques-1</button>
        </Link>
        <Link href={"/day-2/PersonForm"}>
        <button>Ques-2</button>
        </Link>
        <Link href={"/day-2/ToDoList"}>
        <button>Ques-3</button>
        </Link>
        <Link href={"/day-2/RandomNumberGenerator"}>
        <button>Ques-4</button>
        </Link>
        <Link href={"/day-2/CounterWithStep"}>
        <button>Ques-5</button>
        </Link>
        <Link href={"/day-2/Clock"}>
        <button>Ques-6</button>
        </Link>
        <Link href={"/day-2/Notification"}>
        <button>Ques-7</button>
        </Link>
        <Link href={"/day-2/SlideShow"}>
        <button>Ques-8</button>
        </Link>
        <Link href={"/day-2/ThemeSwitcher"}>
        <button>Ques-9</button>
        </Link>
        <Link href={"/day-2/LanguageSwitcher"}>
        <button>Ques-10</button>
        </Link>
        <Link href={"/day-2/ThemeSwitcher"}>
        <button>Ques-11</button>
        </Link>
        </div>
    );
}