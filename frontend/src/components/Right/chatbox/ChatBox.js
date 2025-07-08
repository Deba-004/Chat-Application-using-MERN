import useGetMessages from "../../../store/getMessages.js";
import "./ChatBox.css";
import Loading from "../../loading/Loading.js";
import { useEffect, useRef } from "react";
import useGetSocketMessages from "../../../store/getSocketMessages.js";

function Chat({ message }) {
  const authUser = JSON.parse(localStorage.getItem("userInfo"));
  const isOwnMessage = message.senderId === authUser?.user?._id;
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div>
      <div className={`chat ${isOwnMessage ? "chat-end" : "chat-start"}`}>
        <div className="chat-bubble">
          <div>{message.message}</div>
          <span className="chat-timestamp">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
}

function ChatBox() {
  const { loading, messages } = useGetMessages();
  const authUser = JSON.parse(localStorage.getItem("userInfo"));

  useGetSocketMessages();

  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if(!authUser) {
    return (
      <div className="chat-box-container">
        <div className="text-white text-center mt-[20%] text-[18px] font-bold">
          Please log in to see messages.
        </div>
      </div>
    );
  }

  return (
    <div className="chat-box-container">
      {loading ? (
        <div className="mt-[120px]"><Loading /></div>
      ) : (
      messages.length > 0 &&
      messages.map((message) => (
        <Chat key={message._id} message={message} />
      ))
      )}
      {!loading && messages.length === 0 && <div className="text-white text-center mt-[20%] text-[18px] font-bold">Say Hi!!</div>}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatBox;