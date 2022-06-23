import styled from "styled-components";

export const StyledIntro = styled.div`
  width: 70%;
  margin-left: 15%;
  padding-top: 15%;
  height: 100vh;
  box-sizing: border-box;

  /* Common style for p tag. */
  p {
    padding: 0px;
    font-family: sans-serif;
    margin: 0px;
    height: fit-content;
  }

  /* Hii, I am */
  & p:nth-of-type(1) {
    color: #2dffd9;
    font-size: clamp(1.2rem, 2.7rem, 2vw);
    font-weight: 550;
  }

  /* Rohit Choudhary */
  & p:nth-of-type(2) {
    color: white;
    font-weight: 900;
    font-size: clamp(2rem, 3.1rem, 3.5vw);
    margin-top: 5px;
  }

  /* i am a developer */
  & p:nth-of-type(3) {
    color: #a5d8d8;
    font-weight: 600;
    font-size: clamp(2rem, 3.1rem, 3.5vw);
    margin-top: 10px;
  }
  /* Description */
  & p:nth-of-type(4) {
    color: #ccdada;
    font-weight: 580;
    font-size: clamp(0.9rem, 1.1rem, 3vw);
    width: 70%;
    margin-top: 12px;
    margin-bottom: 10px;
  }
  button {
    margin-top: 12px;
    padding: 5px 30px;
    border: none;
    border-radius: 8px;
    background-color: #dcb2eb;
  }
  button span {
    font-family: sans-serif;
    font-weight: bold;
    font-size: clamp(1.8rem, 1.5rem, 3vw);
  }
`;
