import ChatUser from "./chat-user/ChatUser";
import classes from "./index.module.css";
import ChatBox from "./chatbox/ChatBox";
import SendBox from "./sendbox/SendBox";
import useConversation from "../../states/useConversation.js";

function Right() {
    const {selectedConversation} = useConversation();
    const authUser = JSON.parse(localStorage.getItem("userInfo"));

    if(!authUser) {
        return (
            <div className={classes.rightBox}>
                <div className="flex flex-col justify-center items-center h-full">
                    <p className="text-[24px] font-bold">Please log in to see messages</p>
                    <a href="/login" className="text-[#0099ff] mt-2 font-[500] text-[17px]">Log In</a>
                </div>
            </div>
        );
    }

    if(!selectedConversation) {
        return (
            <div className={classes.rightBox}>
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-3xl font-bold">Welcome {authUser.fullName}</h1>
                    <p className="text-[24px] font-bold">Please select a user to chat with</p>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.rightBox}>
            <ChatUser />
            <ChatBox />
            <SendBox />
        </div>
    );
}

export default Right;