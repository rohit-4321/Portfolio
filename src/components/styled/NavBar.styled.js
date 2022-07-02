import styled from "styled-components";

export const Navbar = styled.div`
  /* background-color: #161623; */
  backdrop-filter: blur(7px);
  /* background-color: #1b1b2a; */
  /* background-image: linear-gradient(180deg, #252033, #0d253c); */
  position: fixed;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-right: 2px solid #00ffd1;
  box-shadow: inset 0 0 10px 1px #161623;
  width: 14%;
  height: 100%;
  transition: all 0.5s;
  z-index: 1;
  /* left: -30%; */
  &::after {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0%;
    right: -2px;
    width: 2px;

    background-color: #00ffd1;
    box-shadow: 0 0 80px 1px #00ffd1;
  }
  img {
    position: relative;
    left: 50%;
    width: 4rem;
    height: 4rem;
    transform: translateX(-50%);
    margin-top: 6vh;
  }
  @media only screen and (max-width: 700px) {
    & {
      width: ${(props) => (props.isOpen ? "100%" : "0%")};
      left: ${(props) => (props.isOpen ? "0%" : "-35%")};
      border: none;
    }
    img {
      display: ${(props) => (props.isOpen ? "" : "none")};
      width: 4rem;
      height: 4rem;
      margin-top: 4.3rem;
    }
    &::after {
      display: none;
    }
  }
`;

export const NavLinksConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  flex: 1;

  @media only screen and (max-width: 700px) {
    & {
      display: ${(props) => (props.isOpen ? "" : "none")};
    }
  }
  a {
    width: 100%;
    text-align: center;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: #90ceb0;
    transition: font-size 0.3s;
  }
  a:hover {
    color: white;
    font-size: 1.5rem;
  }
`;
