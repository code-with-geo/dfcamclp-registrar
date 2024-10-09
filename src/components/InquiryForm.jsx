import React from "react";
import styled from "styled-components";
import { Label, TextBox } from "./styles/Components.styled";

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
const TextBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ComboBox = styled.select`
  width: 510px;
  height: 40px;
  line-height: 2;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;

  &:focus {
    outline: none;
    border-color: #05683b;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
    cursor: pointer;
  }
`;

const TextArea = styled.textarea`
  width: 510px;
  height: 250px;
  line-height: 2;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;
  resize: none;

  &:focus {
    outline: none;
    border-color: #05683b;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
  }
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
`;

function InquiryForm() {
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Title>Inquiry Form</Title>
            <Description>
              Our Inquiry Form is designed to make it easy for you to get the
              information you need. Whether you're interested in enrollment,
              campus facilities, or specific courses, simply fill out the form,
              and one of our representatives will get back to you as soon as
              possible.
            </Description>
          </Header>
          <Body>
            <Form>
              <List>
                <ListItem>
                  <LabelWrapper>
                    <Label>Student Name</Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextBox
                      marginTop="10px"
                      type="text"
                      height="40px"
                      width="250px"
                      fontSize="13px"
                      placeholder="First Name"
                      required="true"
                      marginRight="10px"
                    />
                    <TextBox
                      marginTop="10px"
                      type="text"
                      height="40px"
                      width="250px"
                      fontSize="13px"
                      placeholder="Last Name"
                      required="true"
                    />
                  </TextBoxWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Student Contact No.
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextBox
                      type="text"
                      height="40px"
                      width="510px"
                      fontSize="13px"
                      placeholder="Contact No."
                      required="true"
                      marginRight="10px"
                    />
                  </TextBoxWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Student School Email
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextBox
                      type="text"
                      height="40px"
                      width="510px"
                      fontSize="13px"
                      placeholder="School Email"
                      required="true"
                      marginRight="10px"
                    />
                  </TextBoxWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Department
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <ComboBox>
                      <option value="">IT Department</option>
                      <option value="">Accounting Department</option>
                    </ComboBox>
                  </TextBoxWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Inquiry Credentials
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <ComboBox>
                      <option value="">COR</option>
                      <option value="">COE</option>
                      <option value="">Drop Form</option>
                      <option value="">Diploma</option>
                      <option value="">Grade Slip</option>
                      <option value="">TOR</option>
                      <option value="">Add Form</option>
                      <option value="">Good Moral</option>
                      <option value="">Books</option>
                    </ComboBox>
                  </TextBoxWrapper>
                </ListItem>
                <ListItem>
                  <LabelWrapper>
                    <Label marginTop="10px" marginBottom="10px">
                      Message
                    </Label>
                  </LabelWrapper>
                  <TextBoxWrapper>
                    <TextArea placeholder="Write something . . . " />
                  </TextBoxWrapper>
                </ListItem>
                <ListItem
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                >
                  <Button>Submit</Button>
                </ListItem>
              </List>
            </Form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default InquiryForm;
