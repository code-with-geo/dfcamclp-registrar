import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useInquiryTicket } from "../../../context/InquiryTickets";

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
`;

const ListItem = styled.li`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
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

const TextBox = styled.input`
  width: 515px;
  height: 30px;
  line-height: 2;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  font-size: ${(props) => props.fontSize};
  &::placeholder {
    color: #9e9ea7;
  }

  &:focus {
    outline: none;
    border-color: #05683b;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

const Button = styled.button`
  width: 515px;
  height: 40px;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border-radius: ${(props) => props.borderRadius};
  line-height: ${(props) => props.lineHeight};
  text-decoration: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverbgColor};
    color: ${(props) => props.hoverColor};

    transition: 0.3s ease;
  }

  @media (max-width: 600px) {
    width: 420px;
  }
  @media (max-width: 450px) {
    width: 320px;
  }
  @media (max-width: 400px) {
    width: 270px;
  }
`;

const ComboBox = styled.select`
  width: 510px;
  height: 40px;
  line-height: 2;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;

  &:focus {
    outline: none;
    border-color: #05683b;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
    cursor: pointer;
  }
`;

function EditTickets() {
  const { inquiryTicketByID } = useInquiryTicket();
  const { id } = useParams();
  const tickets = inquiryTicketByID(id);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [contactNo, setContactNo] = useState();
  const [studentEmail, setStudentEmail] = useState();
  const [department, setDepartment] = useState();
  const [inquireCredentials, setInquireCredentials] = useState();
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    if (tickets != null) {
      setFirstName(tickets.ticketFirstName);
      setLastName(tickets.ticketLastName);
      setContactNo(tickets.ticketContactNumber);
      setStudentEmail(tickets.ticketStudentEmail);
      setDepartment(tickets.departmentID.departmentName);
      setInquireCredentials(tickets.inquiryCredentialID.inquiryCredentialName);
      setMessage(tickets.ticketMessage);
      setStatus(tickets.ticketStatus);
    }
  }, [tickets]);

  const onChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const _editTicket = (data, event) => {
    event.preventDefault();

    try {
      Axios.post(`http://localhost:8080/inquiry-tickets/update-status`, {
        ticketID: id,
        status,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            navigate("/dashboard/");
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
            <h3>Edit Inquiry Ticket</h3>
          </Header>
          <Body>
            <form onSubmit={handleSubmit(_editTicket)}>
              <List>
                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter first name"
                    require="true"
                    readOnly="true"
                    value={firstName}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter last name"
                    require="true"
                    readOnly="true"
                    value={lastName}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter contact no."
                    require="true"
                    readOnly="true"
                    value={contactNo}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter student email"
                    pattern="^[a-zA-Z0-9._%+-]+@dfcamclp\.edu\.ph$"
                    required
                    readOnly="true"
                    value={studentEmail}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter department"
                    require="true"
                    readOnly="true"
                    value={department}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter inquiry credential"
                    require="true"
                    readOnly="true"
                    value={inquireCredentials}
                  />
                </ListItem>
                <ListItem>
                  <ComboBox value={status} onChange={onChangeStatus}>
                    <option value="New">New</option>
                    <option value="In-progress">In-progress</option>
                    <option value="Done">Done</option>
                  </ComboBox>
                </ListItem>
                <ListItem>
                  <Button
                    width="535px"
                    height="40px"
                    color="#fff"
                    borderRadius="5px"
                    bgColor="#05683b"
                    type="submit"
                  >
                    Save
                  </Button>
                </ListItem>
              </List>
            </form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default EditTickets;
