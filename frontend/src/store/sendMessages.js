import { useState } from "react";
import useConversation from "../states/useConversation.js";
import axios from "axios";

function useSendMessages() {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();
    const sendMessage = async (message) => {
        setLoading(true);
        if(selectedConversation && selectedConversation._id) {
            try {
                const backendUrl = process.env.REACT_APP_BACKEND_URL || "http://localhost:5002";
                const response = await axios.post(`${backendUrl}/message/send/${selectedConversation._id}`, {message}, {
                    withCredentials: true
                });
                setMessages([...messages, response.data]);
                setLoading(false);
            } catch (error) {
                console.error("Error sending message:", error);
                setLoading(false);
            }
        }
    }
    return {loading, sendMessage};
}

export default useSendMessages;