import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import styled from "styled-components";
import { useFAQ } from "../context/FAQ";

const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: auto;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 32px;
  width: 900px;
  margin-top: 20px;
`;

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
`;

const Description = styled.p`
  word-spacing: 5px;
  margin-top: 15px;
  font-weight: 400;
  color: #60697b;
  line-height: 30px;
`;

const Body = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
function FAQ() {
  const { faqData } = useFAQ();
  const data = faqData();
  return (
    <>
      <Container>
        <Wrapper>
          <Header>
            <Title>Frequently Asked Questions</Title>
            <Description>
              We aim to make the process of obtaining important documents, such
              as your Transcript of Records (TOR), as smooth as possible. To
              help guide you through this process, we’ve compiled answers to
              some of the most frequently asked questions. Whether you're
              curious about the requirements, processing times, or online
              request options, we've got you covered.
            </Description>
          </Header>
          <Body>
            {data != null &&
              data.map((faq) => {
                return (
                  <Accordion sx={{ color: "#fff", bgcolor: "#05683b" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
                    >
                      <p>{faq.faqQuestion}</p>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ color: "#343f52", bgcolor: "#fff" }}
                    >
                      {faq.faqAnswer}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default FAQ;
