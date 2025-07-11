import { useEffect, useState } from "react";
import useConversation from "../states/useConversation.js";
import axios from "axios";

function useGetMessages() {
  const [loading, setLoading] = useState(true);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      if(selectedConversation && selectedConversation._id) {
        try {
          const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5002";
          const response = await axios.get(`${backendUrl}/message/get/${selectedConversation._id}`, {
            withCredentials: true
          });
          setMessages(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching messages:", error);
          setLoading(false);
        }
      }
    }
    fetchMessages();
  }, [selectedConversation, setMessages]);

  return {loading, messages};
}

export default useGetMessages;