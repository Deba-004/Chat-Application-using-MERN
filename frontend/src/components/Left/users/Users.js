import classes from "./index.module.css";

const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Deba", email: "deba@email.com"},
  { id: 3, name: "Rahul", email: "rahul@email.com" },
];

function User({name, email}) {
  return (
    <div className={classes.user}>
      <div className={classes.avatar}>{name[0]}</div>
      <div>
        <div className={classes.name}>{name}</div>
        <div className={classes.email}>{email}</div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className={classes.container}>
      {users.map((user) => {
        return (
          <User key={user.id} name={user.name} email={user.email} />
        );
      })}
      {users.map((user) => {
        return (
          <User key={user.id} name={user.name} email={user.email} />
        );
      })}
      {users.map((user) => {
        return (
          <User key={user.id} name={user.name} email={user.email} />
        );
      })}
      {users.map((user) => {
        return (
          <User key={user.id} name={user.name} email={user.email} />
        );
      })}
      {users.map((user) => {
        return (
          <User key={user.id} name={user.name} email={user.email} />
        );
      })}
    </div>
  );
}

export default Users;