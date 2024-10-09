import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Google } from "@mui/icons-material";

const Container = styled.footer`
  width: 100%;
  background-color: #05683b;
  padding: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled.img`
  height: 150px;
  padding: 10px;
  width: 150px;
`;

const Label = styled.p`
  margin-top: 15px;
  font-weight: 400;
  color: #fff;
  font-size: ${(props) => props.fontSize};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  align-items: left;
  gap: 10px;
  list-style: none;
  margin-top: ${(props) => props.marginTop};
`;

const ListItem = styled.li``;

const PageLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: 400;
  font-size: 15px;
`;
function Footer() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo src="../assets/logo.png" alt="" />
            <Label fontSize="12px">
              Copyright © 2024 - Powered by Dfcamclp IT Registrar
            </Label>
            <List marginTop="10px">
              <ListItem>
                <PageLink>
                  <Facebook fontSize="small" />
                </PageLink>
              </ListItem>
              <ListItem>
                <PageLink>
                  <Instagram fontSize="small" />
                </PageLink>
              </ListItem>
              <ListItem>
                <PageLink>
                  <Google fontSize="small" />
                </PageLink>
              </ListItem>
            </List>
          </Left>
          <Right>
            <List>
              <ListItem>
                <PageLink>Home</PageLink>
              </ListItem>
              <ListItem>
                <PageLink>Contact</PageLink>
              </ListItem>
              <ListItem>
                <PageLink>Inquire</PageLink>
              </ListItem>
            </List>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}

export default Footer;
