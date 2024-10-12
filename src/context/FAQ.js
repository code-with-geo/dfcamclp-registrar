import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const FAQContext = createContext();

const GetFAQData = () => {
  const [faq, setFAQ] = useState(null);
  useEffect(() => {
    const getAllFAQ = () => {
      try {
        Axios.get(`http://localhost:8080/faqs/`)
          .then((res) => {
            setFAQ(res.data.faq);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllFAQ, 1000);
    return () => clearInterval(interval);
  }, []);
  return faq;
};

const GetFAQByID = (faqID) => {
  const [faq, setFAQ] = useState(null);
  useEffect(() => {
    const getFAQByID = () => {
      try {
        Axios.post(`http://localhost:8080/faqs/get-by-id`, {
          faqID,
        })
          .then((res) => {
            setFAQ(res.data.faq);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getFAQByID();
  }, [faqID]);
  return faq;
};

export const FAQProvider = (props) => {
  const faqData = () => GetFAQData();
  const faqDataByID = (faqID) => GetFAQByID(faqID);
  const faqMethods = {
    faqData,
    faqDataByID,
  };
  return (
    <FAQContext.Provider value={faqMethods}>
      {props.children}
    </FAQContext.Provider>
  );
};

export const useFAQ = () => {
  return useContext(FAQContext);
};
