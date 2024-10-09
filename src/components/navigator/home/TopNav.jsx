import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 120px;
  max-width: 85%;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Logo = styled.img`
  height: 120px;
  padding: 10px;
  width: 120px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

const ListItem = styled.li``;

const PageLink = styled(Link)`
  text-decoration: none;
  color: #343f52;
  font-weight: 500;

  &:hover {
    color: #05683b;
  }
`;

function TopNav() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo src="../assets/logo.png" alt="" />
          </Left>
          <Right>
            <List>
              <ListItem>
                <PageLink>Home</PageLink>
              </ListItem>
              <ListItem>
                <PageLink>About</PageLink>
              </ListItem>
              <ListItem>
                <PageLink>Contact</PageLink>
              </ListItem>
            </List>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}

export default TopNav;
