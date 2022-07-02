import styled from "styled-components";

export const ContainerHeadingStyled = styled.h1`
  position: relative;
  text-align: center;
  /* width: 20vw; */
  display: inline-block;
  color: #00ffd1;
  margin-top: 1rem;
  font-family: sans-serif;
  text-shadow: 0px 0px 25px #27a184;
  left: 50%;
  /* background-color: #27a184; */
  transform: translateX(-50%);

  font-size: 2.5rem;

  &:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;
    left: 50%;
    transform: translateX(-50%);
    bottom: -7px;
    background-color: #00ffd1;
    transition: width 0.8s ease-out, height 1s ease-out;
    box-shadow: 0px 0px 15px #00ffd1;
  }
  &.aos-animate:after {
    width: 170%;
    border-radius: 2px;
  }
  /* margin-right: 2%;
  margin-bottom: 20px;
  border-bottom: 3px solid #00ffd1; */
  @media only screen and (max-width: 700px) {
    & {
      font-size: max(1.5rem, 6vw);
    }
  }
`;
