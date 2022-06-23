import styled from "styled-components";

export const Navheader = styled.div`
  position: fixed;
  top: 0%;
  z-index: 1;
  background-color: #0e303f;
  width: 0%;
  height: 7%;
  transition: width 0.3s;
  box-shadow: 0px 3px 10px rgb(33, 11, 57);
  @media only screen and (max-width: 600px) {
    & {
      width: 100vw;
    }
  }
  img {
    position: relative;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 5%;
    height: 80%;
    border-radius: 50%;
    display: none;
    @media only screen and (max-width: 600px) {
      & {
        display: inline;
      }
    }
  }
`;
