import React from "react";
import styled from "styled-components";
import { useAnnouncement } from "../context/Announcement";

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

const Description = styled.p`
  word-spacing: 5px;
  text-align: center;
  margin-top: 15px;
  font-weight: 400;
  color: #60697b;
  line-height: 30px;
  width: 800px;
`;

const Body = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Announcement() {
  const { announcementData } = useAnnouncement();
  const data = announcementData();
  return (
    <>
      <Container>
        {data != null &&
          data.map((announcement) => {
            return (
              <Wrapper>
                <Header>
                  <Title>{announcement.announcementTitle}</Title>
                </Header>
                <Body>
                  <Description>{announcement.announcementDetails}</Description>
                </Body>
              </Wrapper>
            );
          })}
      </Container>
    </>
  );
}

export default Announcement;
