import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const UserContext = createContext();

const GetUserData = (departmentID) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getAllUser = () => {
      try {
        Axios.post(`http://localhost:8080/users/`, {
          departmentID,
        })
          .then((res) => {
            setUser(res.data.user);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllUser, 1000);
    return () => clearInterval(interval);
  }, [departmentID]);
  return user;
};

const GetUserByID = (userID) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserByID = () => {
      try {
        Axios.post(`http://localhost:8080/users/get-by-id`, {
          userID,
        })
          .then((res) => {
            setUser(res.data.user);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getUserByID();
  }, [userID]);
  return user;
};

export const UserProvider = (props) => {
  const userData = (userID) => GetUserData(userID);
  const userDataByID = (userID) => GetUserByID(userID);
  const userMethods = {
    userData,
    userDataByID,
  };
  return (
    <UserContext.Provider value={userMethods}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
