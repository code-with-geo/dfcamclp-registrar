import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
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
];
function InquiryResult({ tickets }) {
  return (
    <>
      <Container>
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
          rows={tickets != null && tickets}
        />
      </Container>
    </>
  );
}

export default InquiryResult;
