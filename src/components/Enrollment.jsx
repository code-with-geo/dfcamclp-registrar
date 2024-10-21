import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 85%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #eeedeb;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 500;
  color: #343f52;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled.p`
  word-spacing: 5px;
  text-align: center;
  margin-top: 15px;
  font-weight: 400;
  color: #60697b;
  line-height: 30px;
  width: 800px;
`;

const PageLink = styled.a`
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

function Enrollment() {
  return (
    <>
      <Container>
        <Wrapper>
          <Description>
            <Title>Enrollment Are Still Open</Title>
            By joining us, you'll gain access to high-quality education,
            state-of-the-art facilities, and a supportive learning environment
            that prioritizes your personal and professional development. Take
            the first step toward becoming a tech leader and innovator by
            enrolling today!
          </Description>
          <PageLink href="https://www.facebook.com/dfcaittiregistrar">
            Contact Us
          </PageLink>
        </Wrapper>
      </Container>
    </>
  );
}

export default Enrollment;
