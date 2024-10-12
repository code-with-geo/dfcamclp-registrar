import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import styled from "styled-components";
import ActionButton from "./ActionButton";
import { useDepartment } from "../../../context/Departments";

const Container = styled.div`
  margin-top: 20px;
  height: 550px;
`;

const TableColumns = [
  {
    field: "_id",
    headerName: "ID",
    flex: 1,
    resizable: false,
    headerClassName: "theme-header",
  },
  {
    field: "departmentName",
    headerName: "Name",
    flex: 1,
    headerClassName: "theme-header",
    resizable: false,
  },
  {
    field: "departmentDescription",
    headerName: "Description",
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
  const { departmentData } = useDepartment();
  const data = departmentData();
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
          rows={data != null && data}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Container>
    </>
  );
}

export default Table;
