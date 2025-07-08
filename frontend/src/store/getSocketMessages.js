import { useEffect } from "react";
import useConversation from "../states/useConversation.js";
import { useSocket } from "./Socket-context.js";
import sound from "../media/chat-notification-sound.mp3";

function useGetSocketMessages() {
  const {socket} = useSocket();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notificationSound = new Audio(sound);
      notificationSound.play();
      setMessages([...messages, newMessage]);
    });
    return () => {
      if (socket) {
        socket.off("newMessage");
      }
    };
  }, [socket, messages, setMessages]);
}

export default useGetSocketMessages;