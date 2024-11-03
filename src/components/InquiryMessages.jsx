import React, { useState } from "react";
import styled from "styled-components";
import { Label, TextBox } from "./styles/Components.styled";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useInquiryTicket } from "../context/InquiryTickets";
import { useMessages } from "../context/Messages";
import { ToggleMessage } from "../utils/SweetAlert";
const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
`;

const Wrapper = styled.div``;

const Title = styled.h2`
  font-weight: 500;
  color: #343f52;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Description = styled.p`
  word-spacing: 5px;
  text-align: left;
  margin-top: 15px;
  font-weight: 400;
  color: #60697b;
  line-height: 30px;
`;

const Header = styled.div``;
const Body = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
  background-color: #eeedeb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 700px;
`;
const ListItem = styled.li`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => props.flexDirection};
  margin-top: ${(props) => props.marginTop};
`;

const ButtonBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 250px;
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

const PageLink = styled(Link)`
  margin-top: 20px;
  width: 250px;
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

const TextArea = styled.textarea`
  width: 510px;
  height: 250px;
  line-height: 2;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;
  resize: none;

  &:focus {
    outline: none;
    border-color: #05683b;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
  }
`;

const MessageBox = styled.div`
  border: 1px solid #e2e8ec;
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
`;

function InquiryMessages() {
  const { id } = useParams();
  const { inquiryTicketByTicketID } = useInquiryTicket();
  const datas = inquiryTicketByTicketID(id);
  const { messageData } = useMessages();
  const messages = messageData(datas !== null && datas._id);
  const [ticketID, setTicketID] = useState(datas !== null && datas._id);
  const [message, setMessage] = useState();
  const [openAddMessage, setOpenAddMessage] = useState(false);
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
        sender: true,
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
            <Title>Inquiries</Title>
            <Description>
              We are dedicated to providing a nurturing and inspiring
              educational environment for all our students. This website is
              designed to assist prospective students and families in learning
              more about our school, academic programs, extracurricular
              opportunities, and the admissions process.
            </Description>
          </Header>
          <Body>
            <Form onSubmit={handleSubmit(_saveMessage)}>
              <List>
                <ListItem>
                  <LabelWrapper>
                    <Label>{datas != null && datas.ticketID}</Label>
                    <Label>{datas != null && datas.ticketStatus}</Label>
                  </LabelWrapper>
                  <LabelWrapper marginTop="10px">
                    <Label>
                      {datas != null && datas.ticketFirstName}{" "}
                      {datas != null && datas.ticketLastName}
                    </Label>
                  </LabelWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper marginTop="20px" flexDirection="column">
                    <Label fontSize="20px" fontWeight="500">
                      Ticket Messages
                    </Label>
                  </LabelWrapper>
                  {messages !== null &&
                    messages.map((value) => {
                      return (
                        <>
                          <MessageBox>
                            <LabelWrapper marginTop="10px">
                              <Label
                                color={
                                  value.isSender === true
                                    ? "#05683b"
                                    : "#7a1919"
                                }
                              >
                                {value.isSender === true
                                  ? datas != null &&
                                    "Sender: " +
                                      datas.ticketFirstName +
                                      " " +
                                      datas.ticketLastName
                                  : "Department Personel"}
                              </Label>
                            </LabelWrapper>
                            <LabelWrapper marginTop="10px">
                              <Label
                                color={
                                  value.isSender === true
                                    ? "#05683b"
                                    : "#7a1919"
                                }
                              >
                                Message: {value.ticketMessage}
                              </Label>
                            </LabelWrapper>
                          </MessageBox>
                        </>
                      );
                    })}
                </ListItem>
                {datas != null && datas.ticketStatus !== "Done" && (
                  <>
                    <ListItem
                      justifyContent="center"
                      display="flex"
                      alignItems="center"
                    >
                      <ButtonBoxWrapper>
                        <PageLink marginRight="20px" to="/inquiries/">
                          Back
                        </PageLink>
                        <PageLink onClick={_openMessage}>Add Message</PageLink>
                      </ButtonBoxWrapper>
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
                      <ButtonBoxWrapper>
                        <PageLink marginRight="20px" onClick={_closeMessage}>
                          Cancel
                        </PageLink>
                        <Button>Save</Button>
                      </ButtonBoxWrapper>
                    </ListItem>
                  </>
                )}
              </List>
            </Form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default InquiryMessages;
