import "./index.module.css";
import classes from "./index.module.css";

function ChatUser() {
    return (
      <div className={classes.conatainer}>
        <div className={classes.avatar}>D</div>
        <div>
          <div className={classes.name}>Deba</div>
          <div className={classes.online}>online</div>
        </div>
      </div>
    );
}

export default ChatUser;