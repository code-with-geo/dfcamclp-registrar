import React from "react";
import styled from "styled-components";
import { Delete, Edit } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

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

function ActionButton({ params }) {
  const navigate = useNavigate();

  const _delete = (id) => {
    try {
      Axios.post(`http://localhost:8080/announcements/remove`, {
        announcementID: id,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            alert(res.data.message);
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
        <Tooltip title="Edit">
          <EditButton
            onClick={() =>
              navigate(`/dashboard/announcements/edit/${params.row._id}`)
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