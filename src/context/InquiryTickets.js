import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const InquiryTicketContext = createContext();

const GetInquiryTicketData = () => {
  const [ticket, setInquiryTicket] = useState(null);
  useEffect(() => {
    const getAllInquiryTicket = () => {
      try {
        Axios.get(`http://localhost:8080/inquiry-tickets/`)
          .then((res) => {
            setInquiryTicket(res.data.tickets);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllInquiryTicket, 1000);
    return () => clearInterval(interval);
  }, []);
  return ticket;
};

const GetInquiryTicketByID = (ticketID) => {
  const [ticket, setInquiryTicket] = useState(null);
  useEffect(() => {
    const getInquiryTicketByID = () => {
      try {
        Axios.post(`http://localhost:8080/inquiry-tickets/get-by-id`, {
          ticketID,
        })
          .then((res) => {
            setInquiryTicket(res.data.tickets);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getInquiryTicketByID();
  }, [ticketID]);
  return ticket;
};

export const InquiryTicketProvider = (props) => {
  const inquiryTicketData = () => GetInquiryTicketData();
  const inquiryTicketByID = (ticketID) => GetInquiryTicketByID(ticketID);
  const inquiryTicketMethods = {
    inquiryTicketData,
    inquiryTicketByID,
  };
  return (
    <InquiryTicketContext.Provider value={inquiryTicketMethods}>
      {props.children}
    </InquiryTicketContext.Provider>
  );
};

export const useInquiryTicket = () => {
  return useContext(InquiryTicketContext);
};
