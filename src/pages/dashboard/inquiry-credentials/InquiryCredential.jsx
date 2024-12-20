import React from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import Table from "../../../components/dashboard/inquiry-credentials/Table";

const Container = styled.div`
  background-color: #f8f9fa;
  flex: 1;
`;

const Wrapper = styled.div`
  max-width: 90%;
  margin: auto;
  padding: 10px;
  @media (max-width: 800px) {
    max-width: 100%;
    padding: 0px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  & h2 {
    margin-left: 10px;
    font-weight: 500;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Links = styled(Link)`
  background-color: #05683b;
  text-decoration: none;
  color: #fff;
  padding: 5px;
  font-size: 15px;
  font-weight: 400;
  padding: 8px;
  @media (max-width: 800px) {
    margin-top: 10px;
    margin-right: 10px;
  }
`;

const Body = styled.div``;

function InquiryCredential() {
  const { id } = useParams();
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Left>
              <h2>Inquiry Credentials</h2>
            </Left>
            <Right>
              <Links to={`/dashboard/inquiry-credentials/add/${id}`}>
                Add Inquiry Credentials
              </Links>
            </Right>
          </Header>
          <Body>
            <Table />
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default InquiryCredential;
