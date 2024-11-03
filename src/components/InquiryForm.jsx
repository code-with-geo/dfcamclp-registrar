import React, { useState } from "react";
import styled from "styled-components";
import { Label, TextBox } from "./styles/Components.styled";
import { useDepartment } from "../context/Departments";
import { useInquiryCredential } from "../context/InquiryCredential";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { ToggleMessage } from "../utils/SweetAlert";
import { useNavigate } from "react-router-dom";
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
`;
const ListItem = styled.li`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
const LabelWrapper = styled.div``;
const TextBoxWrapper = styled.div`
  display: flex;
  align-items: center;
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
`;

const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #c03333;
  margin-left: 5px;
  margin-top: 5px;
`;

function InquiryForm() {
  const navigate = useNavigate();
  const { departmentData } = useDepartment();
  const department = departmentData();
  const [departmentID, setDepartmentID] = useState("");
  const { inquiryCredentialDataByDepartment } = useInquiryCredential();
  const inquiryCredential = inquiryCredentialDataByDepartment(departmentID);
  const [inquiryCredentialsID, setInquiryCredentialsID] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [contactNo, setContactNo] = useState();
  const [studentEmail, setStudentEmail] = useState();
  const [message, setMessage] = useState();
  const onChangeDepartment = (event) => {
    setDepartmentID(event.target.value);
  };

  const onChangeInquiryCredential = (event) => {
    setInquiryCredentialsID(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _addTicket = (data, event) => {
    event.preventDefault();
    try {
      Axios.post(`http://localhost:8080/inquiry-tickets/add`, {
        firstName,
        lastName,
        contactNo,
        studentEmail,
        departmentID,
        inquiryCredentialID: inquiryCredentialsID,
        message,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            navigate("/");
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
        <Wrapper>
          <Header>
            <Title>Inquiry Form</Title>
            <Description>
              Our Inquiry Form is designed to make it easy for you to get the
              information you need. Whether you're interested in enrollment,
              campus facilities, or specific courses, simply fill out the form,
              and one of our representatives will get back to you as soon as
              possible.
            </Description>
          </Header>
          <Body>
            <Form onSubmit={handleSubmit(_addTicket)}>
              <List>
                <ListItem>
                  <LabelWrapper>
                    <Label>Student Name</Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextBox
                      marginTop="10px"
                      type="text"
                      height="40px"
                      width="250px"
                      fontSize="13px"
                      placeholder="First Name"
                      required="true"
                      marginRight="10px"
                      {...register("FirstName")}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <TextBox
                      marginTop="10px"
                      type="text"
                      height="40px"
                      width="250px"
                      fontSize="13px"
                      placeholder="Last Name"
                      required="true"
                      {...register("LastName")}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </TextBoxWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Student Contact No.
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextBox
                      type="text"
                      height="40px"
                      width="510px"
                      fontSize="13px"
                      placeholder="Contact No."
                      required="true"
                      marginRight="10px"
                      {...register("ContactNo", {
                        pattern: {
                          value: /^(?:\+63|0)9\d{9}$/,
                        },
                      })}
                      onChange={(e) => {
                        setContactNo(e.target.value);
                      }}
                    />
                  </TextBoxWrapper>
                </ListItem>
                {errors.ContactNo && (
                  <ErrorMessage>
                    Please enter a valid number (e.g., +639XXXXXXXXX or
                    09XXXXXXXXX)
                  </ErrorMessage>
                )}
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Student School Email
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextBox
                      type="text"
                      height="40px"
                      width="510px"
                      fontSize="13px"
                      placeholder="School Email"
                      marginRight="10px"
                      {...register("StudentEmail")}
                      required="true"
                      onChange={(e) => {
                        setStudentEmail(e.target.value);
                      }}
                    />
                  </TextBoxWrapper>
                </ListItem>
                {errors.StudentEmail && (
                  <ErrorMessage>
                    Please enter a valid email with @dfcamclp.edu.ph domain
                  </ErrorMessage>
                )}

                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Department
                    </Label>
                  </LabelWrapper>

                  <TextBoxWrapper>
                    <ComboBox
                      {...register("Department", {
                        validate: (value) => value !== "",
                      })}
                      value={departmentID}
                      onChange={onChangeDepartment}
                    >
                      <option value="">Select a Department</option>
                      {department != null &&
                        department.map((dept) => (
                          <option key={dept._id} value={dept._id}>
                            {dept.departmentName}
                          </option>
                        ))}
                    </ComboBox>
                  </TextBoxWrapper>
                </ListItem>
                {errors.Department && (
                  <ErrorMessage>Please select department</ErrorMessage>
                )}

                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Inquiry Credentials
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <ComboBox
                      {...register("InquiryCredentials", {
                        validate: (value) => value !== "",
                      })}
                      disabled={departmentID === null || departmentID === ""}
                      value={inquiryCredentialsID}
                      onChange={onChangeInquiryCredential}
                    >
                      <option value="">Select a Credentials</option>
                      {inquiryCredential != null &&
                        inquiryCredential.map((inquiry) => (
                          <option key={inquiry._id} value={inquiry._id}>
                            {inquiry.inquiryCredentialName}
                          </option>
                        ))}
                    </ComboBox>
                  </TextBoxWrapper>
                </ListItem>
                {errors.InquiryCredentials && (
                  <ErrorMessage>Please select inquiry credentials</ErrorMessage>
                )}
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Message
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextArea
                      placeholder="Write something . . . "
                      {...register("Message")}
                      required="true"
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
                  <Button>Submit</Button>
                </ListItem>
              </List>
            </Form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default InquiryForm;
