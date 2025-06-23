import UserCard from "@/app/day-1/components/UserCard";
export default function ShowUserCard(){
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

    return(
        <>
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
        </>
    );
}

