import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AssuredWorkload,
  Article,
  HelpCenter,
  Announcement,
  Note,
} from "@mui/icons-material";
import { useAdminStatus, useGetUserID } from "../../../hooks/Users";

const Container = styled.div`
  width: 250px;
  height: calc(100vh - 101px);
  position: sticky;
  z-index: 1;
  top: 101px;
  @media (max-width: 800px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

const ListItem = styled.li`
  width: 220px;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

const PageLinks = styled(Link)`
  width: 100%;
  padding: 10px;
  text-decoration: none;
  font-size: 13px;
  transition: 0.3s ease;
  display: flex;
  align-items: center;
  color: #343a40;
  border: 0.5px solid transparent;
  &:hover {
    border: 0.5px solid #b0c5a4;
    border-radius: 5px;
    background-color: #f9fdf6;
  }
`;

const Label = styled.p`
  margin-left: 5px;
`;
function SideNav() {
  const isAdmin = useAdminStatus();

  return (
    <>
      <Container>
        {isAdmin === "true" ? (
          <Wrapper>
            <List>
              <ListItem>
                <PageLinks to="/dashboard/">
                  <Note />
                  <Label>Inquiry Ticket's</Label>
                </PageLinks>
              </ListItem>
              <ListItem>
                <PageLinks to="/dashboard/departments">
                  <AssuredWorkload />
                  <Label>Departments</Label>
                </PageLinks>
              </ListItem>
              <ListItem>
                <PageLinks to="/dashboard/faqs">
                  <HelpCenter />
                  <Label>FAQ's</Label>
                </PageLinks>
              </ListItem>
              <ListItem>
                <PageLinks to="/dashboard/announcements">
                  <Announcement />
                  <Label>Announcements</Label>
                </PageLinks>
              </ListItem>
            </List>
          </Wrapper>
        ) : (
          <Wrapper>
            <List>
              <ListItem>
                <PageLinks to="/dashboard/">
                  <Article />
                  <Label>Inquiry Ticket's</Label>
                </PageLinks>
              </ListItem>
            </List>
          </Wrapper>
        )}
      </Container>
    </>
  );
}

export default SideNav;
