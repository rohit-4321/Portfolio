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
  backdrop-filter: blur(3px);
  /* border: 1px solid black; */
  /* box-shadow: 0 0 10px 0 #00ff6670; */
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 57%;

  & > p {
    padding: 0px;
    font-family: sans-serif;
    margin: 0px;
    height: fit-content;
    text-align: center;
  }

  /* Hii, I am */
  & > p:nth-of-type(1) {
    color: #2cdb52;
    font-size: clamp(1.1rem, 1.5vw, 3rem);
    font-weight: 550;
    text-shadow: 0 0 10px #00ff6670;
    font-family: "Langar", cursive;
  }

  /* Rohit Choudhary */
  & > p:nth-of-type(2) {
    color: #ff9900;
    font-weight: 900;
    font-size: clamp(2.4rem, 4.7vw, 10rem);
    text-shadow: 0 0 10px #ff990070;

    font-family: "Fjalla One", sans-serif;
  }

  /* i am a developer */
  & > p:nth-of-type(3) {
    color: #00ffd1;
    text-shadow: 0 0 10px #00ffd180;
    font-weight: 250;
    font-size: clamp(1.6rem, 1.9vw, 5rem);

    font-family: "Carrois Gothic", sans-serif;
  }
  /* Description */
  & > p:nth-of-type(4) {
    color: #10f0c8;

    font-weight: 150;
    font-size: clamp(1rem, 1.5vw, 3rem);
    font-family: "Nunito", sans-serif;
    width: 68%;
  }
  @media only screen and (max-width: 700px) {
    & {
      /* left: 5%;
      right: 1%; */
      width: 90vw;
      transform: translate(-50%, -60%);
      p:nth-of-type(4) {
        width: 81%;
      }
    }
  }
`;
export const ResumeButton = styled.a`
  margin-top: 20px;
  padding: 5px 30px;
  border: 2px solid #00ffd1;
  opacity: 0;
  text-decoration: none;
  transform: translateX(-20px);
  display: inline;
  border-radius: 30px;
  background-color: transparent;
  box-shadow: inset 0 0 25px 1px rgba(0, 255, 208, 0.3),
    0 0 10px 2px rgba(0, 255, 218, 0.1);

  span {
    font-family: sans-serif;
    font-weight: 400;
    color: #00ffe0;
    font-size: clamp(1.4rem, 1vw, 2.5rem);
  }
`;
