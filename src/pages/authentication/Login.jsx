import React from "react";
import styled from "styled-components";
import { TextBox } from "../../components/styles/Components.styled";

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
  return (
    <>
      <Container>
        <Wrapper>
          <Form>
            <Logo src="../assets/logo.png" alt="" />
            <TextBox
              marginTop="20px"
              type="text"
              height="40px"
              width="250px"
              fontSize="13px"
              placeholder="Username"
              required="true"
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
            />
            <Button>Continue</Button>
          </Form>
        </Wrapper>
      </Container>
    </>
  );
}

export default Login;
