import classes from "./index.module.css";
import useGetAllUsers from "../../../store/getAllUsers";
import useConversation from "../../../states/useConversation.js";
import { useSocket } from "../../../store/Socket-context.js";

function User({user}) {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const {onlineUsers} = useSocket();
  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers?.includes(user._id);

  function handleSelect() {
    setSelectedConversation(user);
  }
  
  return (
    <div className={classes.user} onClick={handleSelect} style={{backgroundColor: isSelected ? "#475569" : ""}}>
      <div className={`${classes.avatar} ${isOnline ? classes.online : ""}`}>{user?.fullName[0] || ""}</div>
      <div>
        <div className={classes.name}>{user.fullName}</div>
        <div className={classes.email}>{user.email}</div>
      </div>
    </div>
  );
}

function Users({searchInput}) {
  const [allUsers] = useGetAllUsers();
  const users = allUsers || [];

  const filteredUsers = searchInput.trim()
    ? users.filter((user) => 
      user.fullName.toLowerCase().includes(searchInput.toLowerCase())
    ) : users;

  return (
    <div className={classes.container}>
      {filteredUsers.map((user) => {
        return (
          <User key={user._id} user={user} />
        );
      })}
    </div>
  );
}

export default Users;