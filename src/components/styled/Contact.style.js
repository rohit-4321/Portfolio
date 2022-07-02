import styled from "styled-components";

export const MessageContainerStyled = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  backdrop-filter: blur(5px);

  column-gap: 2rem;
  row-gap: 2rem;
  padding: 1.5rem;
  border: 3px solid #00faa0;
  border-radius: 8px;
  @media only screen and (max-width: 700px) {
    & {
      padding: 1rem;
      border: 4px solid #00faa0;
      row-gap: 1rem;
    }
  }
`;

export const InputStyled = styled.input`
  height: 3rem;

  width: ${(props) =>
    props.placeholder === "Subject" || props.placeholder === "Message"
      ? ""
      : "15rem"};

  min-width: 0;
  background-color: #2b2b2b;
  border: 1px solid #0dffb6;
  border-radius: 3px;
  padding-left: 1rem;

  font-size: 1rem;
  color: #0dffb6;
  grid-column: ${(props) =>
    props.placeholder === "Subject" || props.placeholder === "Message"
      ? " 1 / span 2"
      : ""};

  ::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #7d7d7d;
    font-size: 1rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 700px) {
    & {
      width: 70vw;
      grid-column: 1 / span 2;
      height: 2.3rem;
    }
    ::placeholder {
      font-size: 0.9rem;
    }
  }
`;
export const InputMessageBox = styled.textarea`
  height: 12rem;

  resize: none;

  background-color: #2b2b2b;
  border: 1px solid #0dffb6;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 3px;
  color: #0dffb6;
  font-family: sans-serif;
  grid-column: 1 / span 2;

  ::placeholder {
    color: #7d7d7d;
    font-size: 1rem;
    font-family: sans-serif;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 700px) {
    & {
      width: 70vw;
    }
    ::placeholder {
      font-size: 0.9rem;
    }
  }
`;

export const IconContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  img {
    display: inline;
    margin-left: 10%;
    width: 2.5rem;
    height: 2.5rem;
  }
  @media only screen and (max-width: 700px) {
    & {
      width: auto;
      min-width: 0;
    }
    img {
      position: relative;
      transform: translateY(-50%);
      top: 50%;
      margin-left: 15%;
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export const StyledForm = styled.form`
  margin-top: 6rem;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SendButtonStyled = styled.button`
  width: max(10rem, 12vw);
  height: 3rem;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 3px solid #00ffd1;
  border-radius: 5rem;
  box-shadow: inset 0 0 10px 1px rgba(0, 255, 208, 0.4), 0 0 10px 2px black;

  span {
    font-size: 1.5rem;
    font-weight: 400;
    color: #00ffb2;
    text-shadow: 0px 0px 30px #00ffb2;
  }
  @media only screen and (max-width: 700px) {
    & {
      width: auto;
      height: 2.4rem;
    }
    span {
      font-size: max(3.4vw, 1rem);
    }
  }
`;
export const StyledSvg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #00ff75;
  box-shadow: 0px 0px 30px 1px #16944f;
`;
export const StyledLoading = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid transparent;
  border-top: 4px solid #00ff75;
  border-left: 4px solid #00ff75;
  border-right: 4px solid #00ff75;
  border-radius: 50%;
  animation: spin 0.4s linear infinite;
  /* background-color: blue; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
// clamp( 1rem,13vw,20rem)
