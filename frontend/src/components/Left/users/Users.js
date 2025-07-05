import classes from "./index.module.css";
import useGetAllUsers from "../../../store/getAllUsers";

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
  const [allUsers, loading] = useGetAllUsers();
  const users = allUsers || [];

  return (
    <div className={classes.container}>
      {users.map((user) => {
        return (
          <User key={user._id} name={user.fullName} email={user.email} />
        );
      })}
    </div>
  );
}

export default Users;