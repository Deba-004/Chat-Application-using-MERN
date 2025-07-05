import classes from "./index.module.css";
import {BiSolidSend} from "react-icons/bi";

function SendBox() {
  return (
    <div className={classes.container}>
      <form className={classes.messageForm}>
        <textarea
          className={classes.messageInput}
          name="message"
          placeholder="Type your message here..."
          required
        />
        <button type="submit" className={classes.sendBtn}>
          <BiSolidSend />
        </button>
      </form>
    </div>
  );
}

export default SendBox;