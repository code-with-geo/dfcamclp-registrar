export const useGetUserID = () => {
  return window.localStorage.getItem("UserID");
};

export const useGetDepartmentID = () => {
  return window.localStorage.getItem("Department");
};

export const useAdminStatus = () => {
  return window.localStorage.getItem("IsAdmin");
};
