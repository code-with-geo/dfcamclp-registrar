import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 85%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin-top: 20px;
`;

const Title = styled.h1`
  font-weight: 500;
  color: #343f52;
  font-weight: 500;
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
const Left = styled.div`
  flex: 0.8;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Introduction = styled.p`
  word-spacing: 5px;
  text-align: left;
  margin-top: 15px;
  font-weight: 400;
  color: #60697b;
  line-height: 30px;
`;

const Image = styled.img``;
function Intro() {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Title>Welcome to Dr. Filemon C. Aguilar Memorial College</Title>
          </Header>
          <Body>
            <Left>
              <Introduction>
                Empowering the future of technology, Dr. Filemon C. Aguilar
                Memorial College of Las Piñas - I.T. Campus is your gateway to a
                dynamic career in Information Technology. Our college is
                dedicated to offering affordable, high-quality education with a
                strong focus on innovation, hands-on learning, and community
                impact.
              </Introduction>
              <Introduction>
                Whether you're passionate about coding, web development,
                cybersecurity, or emerging technologies, we provide the tools,
                resources, and support you need to thrive in today's tech-driven
                world. Join a community where excellence, integrity, and service
                are at the core of everything we do, and become part of a legacy
                that shapes the future of IT.
              </Introduction>
            </Left>
            <Right>
              <Image src="../assets/intro.png" alt="" />
            </Right>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default Intro;
