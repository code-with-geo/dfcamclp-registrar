import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useUser } from "../../../context/Users";

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

function EditUser() {
  const { userDataByID } = useUser();
  const { id } = useParams();
  const user = userDataByID(id);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [departmentID, setDepartmentID] = useState();

  useEffect(() => {
    if (user != null) {
      setUsername(user.username);
      setPassword(user.password);
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setMiddleName(user.middleName);
      setContactNumber(user.contactNumber);
      setDepartmentID(user.departmentID);
    }
  }, [user]);

  const _editUser = (data, event) => {
    event.preventDefault();

    try {
      Axios.post(`http://localhost:8080/users/update`, {
        userID: id,
        username,
        password,
        firstName,
        lastName,
        middleName,
        contactNumber,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            navigate(`/dashboard/users/${departmentID}`);
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
              onClick={() => navigate(`/dashboard/users/${departmentID}`)}
            />
            <h3>Edit User</h3>
          </Header>
          <Body>
            <form onSubmit={handleSubmit(_editUser)}>
              <List>
                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter username"
                    require="true"
                    {...register("Username")}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter password"
                    require="true"
                    {...register("Password")}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter first name"
                    require="true"
                    {...register("FirstName")}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter last name"
                    require="true"
                    {...register("LastName")}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </ListItem>

                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter middle name"
                    require="true"
                    {...register("MiddleName")}
                    value={middleName}
                    onChange={(e) => {
                      setMiddleName(e.target.value);
                    }}
                  />
                </ListItem>
                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter contact no."
                    require="true"
                    {...register("ContactNumber")}
                    value={contactNumber}
                    onChange={(e) => {
                      setContactNumber(e.target.value);
                    }}
                  />
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

export default EditUser;
