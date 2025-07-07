import classes from "./index.module.css";
import useGetAllUsers from "../../../store/getAllUsers";
import useConversation from "../../../states/useConversation.js";

function User({user}) {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === user._id;

  function handleSelect() {
    setSelectedConversation(user);
  }
  
  return (
    <div className={classes.user} onClick={handleSelect} style={{backgroundColor: isSelected ? "#475569" : ""}}>
      <div className={classes.avatar}>{user.fullName[0]}</div>
      <div>
        <div className={classes.name}>{user.fullName}</div>
        <div className={classes.email}>{user.email}</div>
      </div>
    </div>
  );
}

function Users() {
  const [allUsers] = useGetAllUsers();
  const users = allUsers || [];

  return (
    <div className={classes.container}>
      {users.map((user) => {
        return (
          <User key={user._id} user={user} />
        );
      })}
    </div>
  );
}

export default Users;