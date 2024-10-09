import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100;
  height: calc(100vh - 130px);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(./assets/background.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: rgb(0, 0, 0, 0.5);
  background-blend-mode: darken;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 150px;
  padding: 10px;
  width: 150px;
`;

const Title = styled.p`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 32px;
  width: 900px;
`;

const PageLink = styled(Link)`
  margin-top: 30px;
  background-color: #05683b;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  width: 150px;
  height: 40px;
  text-align: center;
  font-weight: 400;
  font-size: 15px;
`;

function Banner() {
  return (
    <>
      <Container>
        <Wrapper>
          <Link to="/">
            <Logo src="../assets/logo.png" alt="" />
          </Link>
          <Title>
            DR. FILEMON C AGUILAR MEMORIAL COLLEGE OF LAS PIÑAS I.T. CAMPUS
          </Title>
          <PageLink to="/inquiries">Inquire Now</PageLink>
        </Wrapper>
      </Container>
    </>
  );
}

export default Banner;
