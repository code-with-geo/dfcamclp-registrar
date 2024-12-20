import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import { useInquiryTicket } from "../../../context/InquiryTickets";
import { useGetDepartmentID, useAdminStatus } from "../../../hooks/Users";

const Container = styled.div`
  margin-top: 20px;
  height: 550px;
`;

const TableColumns = [
  {
    field: "ticketID",
    headerName: "Ticket ID",
    flex: 1,
    resizable: false,
    headerClassName: "theme-header",
  },
  {
    field: "ticketFirstName",
    headerName: "First Name",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
  },
  {
    field: "ticketLastName",
    headerName: "Last Name",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
  },
  {
    field: "ticketContactNumber",
    headerName: "Contact No.",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
  },
  {
    field: "ticketStudentEmail",
    headerName: "Student Email",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
  },
  {
    field: "ticketStatus",
    headerName: "Status",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
    renderCell: (params) => <ActionButton {...{ params }} />,
  },
];
function Table() {
  const { inquiryTicketData, inquiryTicketByDepartment } = useInquiryTicket();
  const data = inquiryTicketData();
  const departmentID = useGetDepartmentID();
  const department = inquiryTicketByDepartment(departmentID);
  const isAdmin = useAdminStatus();

  return (
    <>
      <Container>
        {isAdmin === "true" ? (
          <DataGrid
            sx={{
              fontSize: "12px",
              overflowX: "auto",
              "& .theme-header": {
                backgroundColor: "#05683b",
                color: "#fff",

                ":hover": { color: "#fff" },
              },
              "& .css-ptiqhd-MuiSvgIcon-root": {
                color: "#fff",
              },
            }}
            getRowId={(row) => row._id}
            columns={TableColumns}
            rows={data != null && data}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        ) : (
          <DataGrid
            sx={{
              fontSize: "12px",
              overflowX: "auto",
              "& .theme-header": {
                backgroundColor: "#05683b",
                color: "#fff",

                ":hover": { color: "#fff" },
              },
              "& .css-ptiqhd-MuiSvgIcon-root": {
                color: "#fff",
              },
            }}
            getRowId={(row) => row._id}
            columns={TableColumns}
            rows={department != null && department}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        )}
      </Container>
    </>
  );
}

export default Table;
