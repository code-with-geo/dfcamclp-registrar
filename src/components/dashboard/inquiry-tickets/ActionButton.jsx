import React from "react";
import styled from "styled-components";
import { Delete, Edit, Message } from "@mui/icons-material";
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

const MessageButton = styled(Message)`
  cursor: pointer;
  color: #868e96;
  margin-left: 10px;
`;

function ActionButton({ params }) {
  const navigate = useNavigate();

  const _delete = (id) => {
    try {
      Axios.post(`http://localhost:8080/inquiry-tickets/remove`, {
        ticketID: id,
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
        <Tooltip title="Message">
          <MessageButton
            onClick={() =>
              navigate(`/dashboard/tickets/message/${params.row.ticketID}`)
            }
          />
        </Tooltip>
        <Tooltip title="Edit">
          <EditButton
            onClick={() =>
              navigate(`/dashboard/tickets/edit/${params.row._id}`)
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
