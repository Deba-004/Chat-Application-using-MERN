import "./index.module.css";
import classes from "./index.module.css";
import useConversation from "../../../states/useConversation.js";

function ChatUser() {
    const { selectedConversation } = useConversation();

    return (
      <div className={classes.conatainer}>
        <div className={classes.avatar}>{selectedConversation?.fullName[0]}</div>
        <div>
          <div className={classes.name}>{selectedConversation?.fullName}</div>
          <div className={classes.online}>online</div>
        </div>
      </div>
    );
}

export default ChatUser;