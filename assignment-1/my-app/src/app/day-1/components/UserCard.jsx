// 2.Create a functional component named UserCard that accepts the following props: name, email,
// and avatarURL.Use the props to display the user's name, email, and an image (avatar) in the
// UserCard component.Create multiple instances of the UserCard component with different user data.

export default function UserCard({ name, email, avatar }) {
  return (
    <div className="container">
      <div id="userCard">
        <img src={avatar} width={200} height={200}></img>
        <h1>name : {name}</h1>
        <h1>email : {email}</h1>
      </div>
    </div>
  );
}
