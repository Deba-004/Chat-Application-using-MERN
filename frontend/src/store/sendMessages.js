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
                const response = await axios.post(`/message/send/${selectedConversation._id}`, {message});
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