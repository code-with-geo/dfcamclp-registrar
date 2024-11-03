import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { KeyboardBackspace } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useInquiryTicket } from "../../../context/InquiryTickets";
import { Label } from "../../styles/Components.styled";
import { useMessages } from "../../../context/Messages";
import { ToggleMessage } from "../../../utils/SweetAlert";

const Container = styled.div`
  background-color: #f8f9fa;
  flex: 1;
`;

const Wrapper = styled.div`
  max-width: 50%;
  margin: auto;
  padding: 10px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & h3 {
    margin-left: 10px;
    font-weight: 400;
  }
`;

const BackArrow = styled(KeyboardBackspace)`
  cursor: pointer;
`;

const Body = styled.div``;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding: 10px;
`;

const ListItem = styled.li`
  width: 100%;
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => props.flexDirection};
`;

const TextArea = styled.textarea`
  resize: none;
  line-height: 28px;
  padding: 0 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;
  width: 515px;
  height: 150px;
  &:focus {
    outline: none;
    border-color: #b0c5a4;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
  }

  @media (max-width: 600px) {
    width: 385px;
  }
  @media (max-width: 450px) {
    width: 285px;
  }
  @media (max-width: 400px) {
    width: 235px;
  }
`;

const Button = styled.button`
  width: 515px;
  height: 40px;
  padding: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  background-color: #05683b;
  cursor: pointer;
  margin-right: ${(props) => props.marginRight};
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MessageWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  background-color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PageLink = styled(Link)`
  width: 515px;
  height: 40px;
  padding: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  background-color: #05683b;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-right: ${(props) => props.marginRight};
`;

const TextBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Messages() {
  const { ticketID } = useParams();
  const { inquiryTicketByTicketID } = useInquiryTicket();
  const datas = inquiryTicketByTicketID(ticketID);
  const { messageData } = useMessages();
  const messages = messageData(datas !== null && datas._id);
  const [message, setMessage] = useState();
  const [openAddMessage, setOpenAddMessage] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const _openMessage = () => {
    setOpenAddMessage(true);
  };

  const _closeMessage = () => {
    setOpenAddMessage(false);
  };

  const _saveMessage = (data, event) => {
    event.preventDefault();
    try {
      Axios.post(`http://localhost:8080/messages/add`, {
        ticketID: datas !== null && datas._id,
        ticketMessage: message,
        sender: false,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            ToggleMessage("success", res.data.message);
            setOpenAddMessage(false);
            setMessage("");
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
        <Wrapper>
          <Header>
            <BackArrow
              fontSize="small"
              onClick={() => navigate("/dashboard/")}
            />
            <h3>Ticket Thread</h3>
          </Header>
          <Body>
            <form onSubmit={handleSubmit(_saveMessage)}>
              <List>
                <ListItem display="flex" justifyContent="left">
                  <LabelWrapper>
                    <Label fontWeight="500">
                      {datas != null && datas.ticketID}
                    </Label>
                    <Label fontWeight="500">
                      {datas != null && datas.ticketStatus}
                    </Label>
                  </LabelWrapper>
                </ListItem>

                <ListItem display="flex" justifyContent="left">
                  <Label fontWeight="500">
                    {" "}
                    {datas != null && datas.ticketFirstName}{" "}
                    {datas != null && datas.ticketLastName}
                  </Label>
                </ListItem>

                <ListItem
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Label fontSize="18px" fontWeight="500">
                    Ticket Messages
                  </Label>
                </ListItem>
                {messages !== null &&
                  messages.map((value) => {
                    return (
                      <>
                        <ListItem>
                          <MessageWrapper>
                            <Label
                              color={
                                value.isSender === true ? "#05683b" : "#7a1919"
                              }
                            >
                              {" "}
                              {value.isSender === true
                                ? datas != null &&
                                  "Sender: " +
                                    datas.ticketFirstName +
                                    " " +
                                    datas.ticketLastName
                                : "Department Personel"}
                            </Label>
                            <Label
                              marginTop="10px"
                              color={
                                value.isSender === true ? "#05683b" : "#7a1919"
                              }
                            >
                              {" "}
                              Message: {value.ticketMessage}
                            </Label>
                          </MessageWrapper>
                        </ListItem>
                      </>
                    );
                  })}
                {datas != null && datas.ticketStatus !== "Done" && (
                  <>
                    <ListItem
                      justifyContent="center"
                      display="flex"
                      alignItems="center"
                    >
                      <ButtonWrapper>
                        <PageLink marginRight="20px" to="/dashboard/">
                          Back
                        </PageLink>
                        <PageLink onClick={_openMessage}>Add Message</PageLink>
                      </ButtonWrapper>
                    </ListItem>
                  </>
                )}
                {openAddMessage && (
                  <>
                    <ListItem>
                      <TextBoxWrapper>
                        <Label
                          marginTop="10px"
                          marginBottom="10px"
                          fontSize="20px"
                          fontWeight="500"
                        >
                          Message
                        </Label>
                        <TextArea
                          placeholder="Write something . . . "
                          {...register("Message")}
                          required="true"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }}
                        />
                      </TextBoxWrapper>
                    </ListItem>
                    <ListItem
                      justifyContent="center"
                      display="flex"
                      alignItems="center"
                    >
                      <ButtonWrapper>
                        <PageLink marginRight="20px" onClick={_closeMessage}>
                          Cancel
                        </PageLink>
                        <Button>Save</Button>
                      </ButtonWrapper>
                    </ListItem>
                  </>
                )}
              </List>
            </form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default Messages;
