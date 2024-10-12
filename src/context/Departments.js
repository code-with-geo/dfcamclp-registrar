import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const DepartmentContext = createContext();

const GetDepartmentData = () => {
  const [department, setDepartment] = useState(null);
  useEffect(() => {
    const getAllDepartment = () => {
      try {
        Axios.get(`http://localhost:8080/departments/`)
          .then((res) => {
            setDepartment(res.data.department);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllDepartment, 1000);
    return () => clearInterval(interval);
  }, []);
  return department;
};

const GetDepartmentByID = (departmentID) => {
  const [department, setDepartment] = useState(null);
  useEffect(() => {
    const getDepartmentByID = () => {
      try {
        Axios.post(`http://localhost:8080/departments/get-by-id`, {
          departmentID,
        })
          .then((res) => {
            setDepartment(res.data.department);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getDepartmentByID();
  }, [departmentID]);
  return department;
};

export const DepartmentProvider = (props) => {
  const departmentData = () => GetDepartmentData();
  const departmentDataByID = (departmentID) => GetDepartmentByID(departmentID);
  const departmentMethod = {
    departmentData,
    departmentDataByID,
  };
  return (
    <DepartmentContext.Provider value={departmentMethod}>
      {props.children}
    </DepartmentContext.Provider>
  );
};

export const useDepartment = () => {
  return useContext(DepartmentContext);
};
