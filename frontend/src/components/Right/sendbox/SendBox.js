import classes from "./index.module.css";
import {BiSolidSend} from "react-icons/bi";
import useSendMessages from "../../../store/sendMessages.js";
import {useState} from "react";

function SendBox() {
  const {sendMessage} = useSendMessages();
  const [input, setInput] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await sendMessage(input);
    setInput("");
  }

  return (
    <div className={classes.container}>
      <form className={classes.messageForm} onSubmit={handleSubmit}>
        <textarea
          className={classes.messageInput}
          name="message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
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