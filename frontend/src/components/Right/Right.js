import ChatUser from "./chat-user/ChatUser";
import classes from "./index.module.css";
import ChatBox from "./chatbox/ChatBox";
import SendBox from "./sendbox/SendBox";

function Right() {
    return (
        <div className={classes.rightBox}>
            <ChatUser />
            <ChatBox />
            <SendBox />
        </div>
    );
}

export default Right;