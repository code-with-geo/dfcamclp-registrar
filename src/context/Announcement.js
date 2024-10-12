import React, { createContext, useContext, useEffect, useState } from "react";
import Axios from "axios";

const AnnouncementContext = createContext();

const GetAnnouncementData = () => {
  const [announcement, setAnnouncement] = useState(null);
  useEffect(() => {
    const getAllAnnouncement = () => {
      try {
        Axios.get(`http://localhost:8080/announcements/`)
          .then((res) => {
            setAnnouncement(res.data.announcement);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(getAllAnnouncement, 1000);
    return () => clearInterval(interval);
  }, []);
  return announcement;
};

const GetAnnouncementByID = (announcementID) => {
  const [announcement, setAnnouncement] = useState(null);
  useEffect(() => {
    const getAnnouncementByID = () => {
      try {
        Axios.post(`http://localhost:8080/announcements/get-by-id`, {
          announcementID,
        })
          .then((res) => {
            setAnnouncement(res.data.announcement);
          })
          .catch((err) => {
            if (err.response) Error();
            console.log(err);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getAnnouncementByID();
  }, [announcementID]);
  return announcement;
};

export const AnnouncementProvider = (props) => {
  const announcementData = () => GetAnnouncementData();
  const announcementDataByID = (announcementID) =>
    GetAnnouncementByID(announcementID);
  const announcementMethods = {
    announcementData,
    announcementDataByID,
  };
  return (
    <AnnouncementContext.Provider value={announcementMethods}>
      {props.children}
    </AnnouncementContext.Provider>
  );
};

export const useAnnouncement = () => {
  return useContext(AnnouncementContext);
};
