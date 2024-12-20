import React from "react";
import styled from "styled-components";
import { Article, Delete, Edit, PersonAddAlt } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { ToggleMessage } from "../../../utils/SweetAlert";

const Container = styled.div``;

const DeleteButton = styled(Delete)`
  cursor: pointer;
  margin-left: 10px;
  color: #d44a4a;
`;

const EditButton = styled(Edit)`
  cursor: pointer;
  color: #868e96;
  margin-left: 10px;
`;

const VendorButton = styled(PersonAddAlt)`
  cursor: pointer;
  color: #868e96;
  margin-left: 10px;
`;

const CredentialButton = styled(Article)`
  cursor: pointer;
  color: #868e96;
  margin-left: 10px;
`;

function ActionButton({ params }) {
  const navigate = useNavigate();

  const _delete = (id) => {
    try {
      Axios.post(`http://localhost:8080/departments/remove`, {
        departmentID: id,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            ToggleMessage("success", res.data.message);
          }
        })
        .catch((err) => {
          if (err.response) Error();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Tooltip title="Users">
          <VendorButton
            onClick={() => navigate(`/dashboard/users/${params.row._id}`)}
          />
        </Tooltip>
        <Tooltip title="Inquiry Credentials">
          <CredentialButton
            onClick={() =>
              navigate(`/dashboard/inquiry-credentials/${params.row._id}`)
            }
          />
        </Tooltip>
        <Tooltip title="Edit">
          <EditButton
            onClick={() =>
              navigate(`/dashboard/departments/edit/${params.row._id}`)
            }
          />
        </Tooltip>
        <Tooltip title="Delete">
          <DeleteButton onClick={() => _delete(params.row._id)} />
        </Tooltip>
      </Container>
    </>
  );
}

export default ActionButton;
