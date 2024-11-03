import React, { useState } from "react";
import styled from "styled-components";
import { Label, TextBox } from "./styles/Components.styled";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToggleMessage } from "../utils/SweetAlert";
const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
  margin-top: 50px;
`;

const Wrapper = styled.div``;

const Title = styled.h2`
  font-weight: 500;
  color: #343f52;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Description = styled.p`
  word-spacing: 5px;
  text-align: left;
  margin-top: 15px;
  font-weight: 400;
  color: #60697b;
  line-height: 30px;
`;

const Header = styled.div``;
const Body = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const List = styled.ul`
  list-style: none;
  background-color: #eeedeb;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const ListItem = styled.li`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;
const LabelWrapper = styled.div``;

const ButtonBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  width: 250px;
  height: 40px;
  padding: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  background-color: #05683b;
  cursor: pointer;
  margin-right: ${(props) => props.marginRight};
`;

const PageLink = styled(Link)`
  margin-top: 20px;
  width: 250px;
  height: 40px;
  padding: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  background-color: #05683b;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  margin-right: ${(props) => props.marginRight};
`;

function InquirySearch() {
  const [ticketID, setTicketID] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _searchTicket = (data, event) => {
    event.preventDefault();
    try {
      Axios.post(`http://localhost:8080/inquiry-tickets/get-by-ticketid`, {
        ticketID,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            ToggleMessage("error", res.data.message);
          } else if (res.data.responsecode === "200") {
            navigate(`/inquiries/${res.data.tickets.ticketID}`);
          }
        })
        .catch((err) => {
          if (err.response) Error();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Title>Inquiries</Title>
            <Description>
              We are dedicated to providing a nurturing and inspiring
              educational environment for all our students. This website is
              designed to assist prospective students and families in learning
              more about our school, academic programs, extracurricular
              opportunities, and the admissions process.
            </Description>
          </Header>
          <Body>
            <Form onSubmit={handleSubmit(_searchTicket)}>
              <List>
                <ListItem>
                  <LabelWrapper>
                    <Label>Ticket ID</Label>
                  </LabelWrapper>
                  <TextBox
                    marginTop="10px"
                    type="text"
                    height="40px"
                    width="100%"
                    fontSize="13px"
                    placeholder="Please enter your ticket id"
                    required="true"
                    marginRight="10px"
                    {...register("TicketID")}
                    onChange={(e) => {
                      setTicketID(e.target.value);
                    }}
                  />
                </ListItem>
                <ListItem
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                >
                  <ButtonBoxWrapper>
                    <PageLink marginRight="20px" to="/inquiries/create">
                      Create Ticket
                    </PageLink>
                    <Button>Search</Button>
                  </ButtonBoxWrapper>
                </ListItem>
              </List>
            </Form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default InquirySearch;
