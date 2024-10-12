import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { KeyboardBackspace } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useFAQ } from "../../../context/FAQ";

const Container = styled.div`
  background-color: #f8f9fa;
  flex: 1;
`;

const Wrapper = styled.div`
  max-width: 50%;
  margin: auto;
  padding: 10px;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  & h3 {
    margin-left: 10px;
    font-weight: 400;
  }
`;

const BackArrow = styled(KeyboardBackspace)`
  cursor: pointer;
`;

const Body = styled.div``;

const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 10px;
`;

const ListItem = styled.li`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
`;

const TextArea = styled.textarea`
  resize: none;
  line-height: 28px;
  padding: 0 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;
  width: 515px;
  height: 150px;
  &:focus {
    outline: none;
    border-color: #b0c5a4;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
  }

  @media (max-width: 600px) {
    width: 385px;
  }
  @media (max-width: 450px) {
    width: 285px;
  }
  @media (max-width: 400px) {
    width: 235px;
  }
`;

const TextBox = styled.input`
  width: 515px;
  height: 30px;
  line-height: 2;
  padding: 0 0.5rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.3s ease;
  border-color: #e2e8ec;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};

  font-size: ${(props) => props.fontSize};
  &::placeholder {
    color: #9e9ea7;
  }

  &:focus {
    outline: none;
    border-color: #05683b;
    background-color: #fff;
  }

  &:hover {
    border-color: #05683b;
  }

  @media (max-width: 600px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

const Button = styled.button`
  width: 515px;
  height: 40px;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border-radius: ${(props) => props.borderRadius};
  line-height: ${(props) => props.lineHeight};
  text-decoration: none;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverbgColor};
    color: ${(props) => props.hoverColor};

    transition: 0.3s ease;
  }

  @media (max-width: 600px) {
    width: 420px;
  }
  @media (max-width: 450px) {
    width: 320px;
  }
  @media (max-width: 400px) {
    width: 270px;
  }
`;

function EditDepartment() {
  const { faqDataByID } = useFAQ();
  const { id } = useParams();
  const faq = faqDataByID(id);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  useEffect(() => {
    if (faq != null) {
      setQuestion(faq.faqQuestion);
      setAnswer(faq.faqAnswer);
    }
  }, [faq]);

  const _editFAQ = (data, event) => {
    event.preventDefault();

    try {
      Axios.post(`http://localhost:8080/faqs/update`, {
        faqID: id,
        question,
        answer,
      })
        .then((res) => {
          if (res.data.responsecode === "402") {
            console.log(res.data.message);
          } else if (res.data.responsecode === "200") {
            navigate("/dashboard/faqs");
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
            <BackArrow
              fontSize="small"
              onClick={() => navigate("/dashboard/faqs")}
            />
            <h3>Edit Frequently Ask Question</h3>
          </Header>
          <Body>
            <form onSubmit={handleSubmit(_editFAQ)}>
              <List>
                <ListItem>
                  <TextBox
                    type="text"
                    height="30px"
                    width="515px"
                    placeholder="Please enter question"
                    require="true"
                    {...register("Question")}
                    value={question}
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                  />
                </ListItem>

                <ListItem>
                  <TextArea
                    placeholder="Please enter answer"
                    require="true"
                    {...register("Answer")}
                    value={answer}
                    onChange={(e) => {
                      setAnswer(e.target.value);
                    }}
                  />
                </ListItem>
                <ListItem>
                  <Button
                    width="535px"
                    height="40px"
                    color="#fff"
                    borderRadius="5px"
                    bgColor="#05683b"
                    type="submit"
                  >
                    Save
                  </Button>
                </ListItem>
              </List>
            </form>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default EditDepartment;
