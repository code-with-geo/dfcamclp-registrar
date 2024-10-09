import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import styled from "styled-components";

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
            <Accordion sx={{ color: "#fff", bgcolor: "#05683b" }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
              >
                <p>
                  What are the requirements for requesting a Transcript of
                  Records (TOR)?
                </p>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#343f52", bgcolor: "#fff" }}>
                To request a TOR, you typically need to submit a filled-out
                request form, valid identification, proof of clearance from all
                school obligations (library, finance, etc.), and a payment
                receipt for the processing fee, if applicable.
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ color: "#fff", bgcolor: "#05683b" }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
              >
                <p>How long does it take to process the TOR?</p>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#343f52", bgcolor: "#fff" }}>
                Processing times for the TOR usually range from 5 to 15 business
                days, depending on the school’s policies and the volume of
                requests. You may be notified via email or phone once your TOR
                is ready for release.
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ color: "#fff", bgcolor: "#05683b" }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
              >
                <p>Can I request my TOR online?</p>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#343f52", bgcolor: "#fff" }}>
                Yes, many schools offer online TOR request services. You may
                need to fill out an online request form, upload required
                documents, and pay any associated fees via bank transfer or
                other online payment methods.
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ color: "#fff", bgcolor: "#05683b" }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
              >
                <p>Is there a fee for obtaining my TOR?</p>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#343f52", bgcolor: "#fff" }}>
                Yes, there is typically a processing fee for obtaining a TOR.
                The amount varies depending on the school. Some institutions may
                offer fee waivers under certain conditions (e.g., for graduating
                students).
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ color: "#fff", bgcolor: "#05683b" }}>
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
              >
                <p>Can someone else claim my TOR on my behalf?</p>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#343f52", bgcolor: "#fff" }}>
                Yes, but the authorized representative will need to present an
                authorization letter, a copy of your valid ID, and their own ID
                when claiming the TOR on your behalf.
              </AccordionDetails>
            </Accordion>
          </Body>
        </Wrapper>
      </Container>
    </>
  );
}

export default FAQ;
