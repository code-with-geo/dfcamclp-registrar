import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const InquiryCredentialContext = createContext();

const GetInquiryCredentialData = () => {
  const [inquiryCredential, setInquiryCredential] = useState(null);
  useEffect(() => {
    const getAllInquiryCredential = () => {
      try {
        Axios.get(`http://localhost:8080/inquiry-credentials/`)
          .then((res) => {
            setInquiryCredential(res.data.inquiryCredential);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllInquiryCredential, 1000);
    return () => clearInterval(interval);
  }, []);
  return inquiryCredential;
};

const GetInquiryCredentialByID = (inquiryCredentialID) => {
  const [inquiryCredential, setInquiryCredential] = useState(null);
  useEffect(() => {
    const getInquiryCredentialByID = () => {
      try {
        Axios.post(`http://localhost:8080/inquiry-credentials/get-by-id`, {
          inquiryCredentialID,
        })
          .then((res) => {
            setInquiryCredential(res.data.inquiryCredential);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getInquiryCredentialByID();
  }, [inquiryCredentialID]);
  return inquiryCredential;
};

const GetInquiryCredentialByDepartment = (departmentID) => {
  const [inquiryCredential, setInquiryCredential] = useState(null);
  useEffect(() => {
    const getInquiryCredentialByDepartment = () => {
      try {
        Axios.post(
          `http://localhost:8080/inquiry-credentials/get-by-department`,
          {
            departmentID,
          }
        )
          .then((res) => {
            setInquiryCredential(res.data.inquiryCredential);
            console.log(res.data.inquiryCredential);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getInquiryCredentialByDepartment();
  }, [departmentID]);
  return inquiryCredential;
};

export const InquiryCredentialProvider = (props) => {
  const inquiryCredentialData = () => GetInquiryCredentialData();
  const inquiryCredentialDataByID = (inquiryCredentialID) =>
    GetInquiryCredentialByID(inquiryCredentialID);
  const inquiryCredentialDataByDepartment = (departmentID) =>
    GetInquiryCredentialByDepartment(departmentID);
  const inquiryCredentialMethods = {
    inquiryCredentialData,
    inquiryCredentialDataByID,
    inquiryCredentialDataByDepartment,
  };
  return (
    <InquiryCredentialContext.Provider value={inquiryCredentialMethods}>
      {props.children}
    </InquiryCredentialContext.Provider>
  );
};

export const useInquiryCredential = () => {
  return useContext(InquiryCredentialContext);
};
