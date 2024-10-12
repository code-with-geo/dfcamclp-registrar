import { Logout, Menu } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../../context/Auth";

const Container = styled.header`
  height: 100px;
  background-color: #fff;
  border-bottom: 1px solid #dcdee1;
  width: 100%;
  padding: 10px;
  position: sticky;
  z-index: 999;
  top: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
`;

const PageLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #343a40;
  margin-right: 20px;
  &:hover {
    color: #b0c5a4;
  }
`;

const MenuButton = styled(Link)`
  display: none;
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #343a40;
    margin-left: 20px;
    &:hover {
      color: #b0c5a4;
    }
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-left: 20px;
`;

function TopNav({ onHandleClick }) {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const { logout } = useAuth();
  const _logout = () => {
    logout();
    setCookies("access_token", "");
    window.localStorage.clear();
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <MenuButton onClick={() => onHandleClick()}>
              <Menu fontSize="medium" />
            </MenuButton>
            <Logo
              src="https://firebasestorage.googleapis.com/v0/b/studies-e2630.appspot.com/o/logo.png?alt=media&token=b3951937-9e01-472f-81dc-6cb2343d1314"
              alt=""
            />
          </Left>
          <Right>
            <Tooltip title="Logout">
              <PageLinks>
                <Logout
                  fontSize="medium"
                  onClick={() => {
                    _logout();
                  }}
                />
              </PageLinks>
            </Tooltip>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}

export default TopNav;
