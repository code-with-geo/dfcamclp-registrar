import React from "react";
import styled from "styled-components";
import { TextBox } from "../../components/styles/Components.styled";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { ToggleMessage } from "../../utils/SweetAlert";
import { useAuth } from "../../context/Auth";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const Button = styled.button`
  margin-top: 10px;
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

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [_, setCookies] = useCookies(["access_token"]);
  const { login } = useAuth();

  const _login = (data, event) => {
    event.preventDefault();
    try {
      Axios.post(`http://localhost:8080/users/login`, {
        username: data.Username,
        password: data.Password,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            ToggleMessage("error", res.data.message);
          } else if (res.data.responsecode === "200") {
            setCookies("access_token", res.data.token);
            window.localStorage.setItem("UserID", res.data.userID);
            window.localStorage.setItem("Department", res.data.department);
            window.localStorage.setItem("IsAdmin", res.data.isAdmin);
            window.localStorage.setItem("isAuthenticated", "true");
            login();
            navigate("/dashboard");
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
          <Form onSubmit={handleSubmit(_login)}>
            <Logo
              src="https://firebasestorage.googleapis.com/v0/b/studies-e2630.appspot.com/o/logo.png?alt=media&token=b3951937-9e01-472f-81dc-6cb2343d1314"
              alt=""
            />
            <TextBox
              marginTop="20px"
              type="text"
              height="40px"
              width="250px"
              fontSize="13px"
              placeholder="Username"
              required="true"
              {...register("Username")}
            />
            <TextBox
              type="password"
              height="40px"
              width="250px"
              marginTop="10px"
              fontSize="13px"
              placeholder="Password"
              required="true"
              minLength={8}
              {...register("Password")}
            />
            <Button>Continue</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}

export default Login;
