import styled from "styled-components";

export const StyledIntro = styled.div`
  width: 100%;
  /* padding-top: 15%; */
  height: 100vh;
  position: relative;
  /* Common style for p tag. */
`;

export const ContentStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  right: 10%;
  transform: translateY(-50%);
  @media only screen and (max-width: 700px) {
    & {
      left: 5%;
      right: 1%;
    }
  }
  p {
    padding: 0px;
    font-family: sans-serif;
    margin: 0px;
    height: fit-content;
  }

  /* Hii, I am */
  & p:nth-of-type(1) {
    color: #2dffd9;
    font-size: clamp(1.1rem, 1.5vw, 2rem);
    font-weight: 550;
  }

  /* Rohit Choudhary */
  & p:nth-of-type(2) {
    color: white;
    font-weight: 900;
    font-size: clamp(2.4rem, 3vw, 6rem);
    margin-top: 5px;
  }

  /* i am a developer */
  & p:nth-of-type(3) {
    color: #a5d8d8;
    font-weight: 600;
    font-size: clamp(1.6rem, 3vw, 4rem);
    margin-top: 10px;
  }
  /* Description */
  & p:nth-of-type(4) {
    color: #ccdada;
    font-weight: 580;
    font-size: clamp(1rem, 1.5vw, 2rem);
    width: 70%;
    margin-top: 12px;
    margin-bottom: 10px;
  }
`;
export const ResumeButton = styled.button`
  margin-top: 12px;
  padding: 5px 30px;
  border: none;
  opacity: 0;
  transform: translateX(-20px);
  display: inline;
  border-radius: 8px;
  background-color: #dcb2eb;
  span {
    font-family: sans-serif;
    font-weight: bold;
    font-size: clamp(1.4rem, 2vw, 2.5rem);
  }
`;
