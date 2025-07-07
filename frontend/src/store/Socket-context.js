import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [authUser] = useAuth();

  useEffect(() => {
    if(authUser) {
      const socket = io("http://localhost:5002/", {
        query: {
          userId: authUser.user._id,
        }
      });
      setSocket(socket);

      socket.on("online", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
        if(socket) {
            socket.close();
            setSocket(null);
        }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);