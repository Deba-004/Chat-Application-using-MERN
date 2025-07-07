import "./index.module.css";
import classes from "./index.module.css";
import useConversation from "../../../states/useConversation.js";
import { useSocket } from "../../../store/Socket-context.js";

function ChatUser() {
    const { selectedConversation } = useConversation();
    const { onlineUsers } = useSocket();
    const isOnline = onlineUsers?.includes(selectedConversation?._id);

    return (
      <div className={classes.conatainer}>
        <div className={classes.avatar}>{selectedConversation?.fullName[0]}</div>
        <div>
          <div className={classes.name}>{selectedConversation?.fullName}</div>
          <div className={classes.online}>{isOnline ? "online" : "offline"}</div>
        </div>
      </div>
    );
}

export default ChatUser;