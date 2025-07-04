import "./ChatBox.css";

function Chat() {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-bubble">
          It's over Anakin,
          <br />
          I have the high ground.
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble">You underestimate my power!</div>
      </div>
    </div>
  );
}

function ChatBox() {
  return (
    <div className="chat-box-container">
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
      <Chat />
    </div>
  );
}

export default ChatBox;