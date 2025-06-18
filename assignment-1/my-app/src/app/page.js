// import Image from "next/image";
// import styles from "./page.module.css";
import Greeting from "./components/Greeting";
import Weather from "./components/Weather";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import TaskList from "./components/TaskList";
import Button from "./components/Button";

export default function Home() {
  const users = [
    {
      name: "John Doe",
      email: "xyz@gmail.com",
      avatarURL: "https://avatar.iran.liara.run/public/boy",
    },
    {
      name: "Anita ",
      email: "anita@gmail.com",
      avatarURL: "https://avatar.iran.liara.run/public/75",
    },
    {
      name: " Alisa",
      email: "alisa@gmail.com",
      avatarURL: "https://avatar.iran.liara.run/public/64",
    },
  ];

  const list = ["gym", "ppt", "assignment"];
  
  return (
    <div id="page">
      <div>
        <h1>Greeting Component</h1>
        <Greeting />
      </div>
      <h1>UserCard Component</h1>
      <div id="container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            avatar={user.avatarURL}
          />
        ))}
      </div>
      <div>
        <h1>Weather Component</h1>
        <Weather temperature={23} />
        <Weather temperature={26} />
        <Weather temperature={5} />
      </div>
      <div>
        <h1>Counter Component</h1>
        <Counter />
      </div>
      <div>
        <h1>TaskList Componet</h1>
        <TaskList list={list} />
      </div>
      <div >
        <h1>Button Component</h1>
        <div id="container">
        <Button text={"button1"} color={"red"} />
        <Button text={"button2"} color={"yellow"} />
         <Button text={"button3"} color={"Green"} />
        </div>
      </div>
    </div>
  );
}
