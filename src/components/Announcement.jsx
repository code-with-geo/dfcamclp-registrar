import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 85%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin-top: 10px;
`;

const Title = styled.h1`
  font-weight: 500;
  color: #3c3d37;
  font-weight: 500;
  text-align: center;
`;

const AnnouncementImage = styled.img`
  width: 80%;
  height: 500px;
  margin-top: 10px;
`;

const Body = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Announcement() {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Title>Announcement</Title>
          </Header>
          <Body>
            <AnnouncementImage src="./assets/announcement.jpg" alt="" />
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default Announcement;
