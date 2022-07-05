import styled from "styled-components";

export const Navheader = styled.div`
  position: fixed;
  display: none;
  /* justify-content: space-between; */
  backdrop-filter: blur(50px);
  top: 0%;
  z-index: 1;
  background-color: #181b2d;

  width: 0%;
  height: 7%;
  transition: width 0.3s;
  box-shadow: 0px 0px 4px gray;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @media only screen and (max-width: 700px) {
    & {
      width: 100vw;
      display: flex;
      justify-content: end;
      align-items: center;
    }
    img {
      width: 2rem;
      height: 1.5rem;
      margin: 5px 12px;
    }
    /* img:nth-child(2) {
      margin: 10px 12px;
    } */
  }
`;
