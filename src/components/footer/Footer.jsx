import React from "react";
import styled from "styled-components";
import { WrapperMain } from "../styled/MainContentWrapper.style";

export const Footer = () => {
  return (
    <WrapperMain>
      <StyledFooter>
        <p>&copy; Copyright Rohit Choudhary 2022.</p>
      </StyledFooter>
    </WrapperMain>
  );
};

const StyledFooter = styled.div`
  margin-top: 6rem;
  margin-bottom: 0rem;
  position: relative;
  display: flex;
  height: 2rem;
  width: auto;

  justify-content: center;
  align-items: center;
  p {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #9ca7b8;
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 700px) {
    p{
        font-size: max(0.7rem,2.2vw);

      
    }
`;
