import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const MessagesContext = createContext();

const GetMessagesData = (ticketID) => {
  const [message, setMessages] = useState(null);
  useEffect(() => {
    const getAllMessageByID = () => {
      try {
        Axios.post(`http://localhost:8080/messages/`, {
          ticketID,
        })
          .then((res) => {
            setMessages(res.data.messages);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllMessageByID, 1000);
    return () => clearInterval(interval);
  }, [ticketID]);
  return message;
};

export const MessageProvider = (props) => {
  const messageData = (ticketID) => GetMessagesData(ticketID);
  const messageMethods = {
    messageData,
  };
  return (
    <MessagesContext.Provider value={messageMethods}>
      {props.children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => {
  return useContext(MessagesContext);
};
