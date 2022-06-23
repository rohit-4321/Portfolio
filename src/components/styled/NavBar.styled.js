import styled from "styled-components";

export const Navbar = styled.div`
  background-color: #252033;
  background-image: linear-gradient(180deg, #252033, #0d253c);
  position: fixed;
  box-sizing: border-box;
  border-right: 2px solid #00ffd1;
  width: 14%;
  height: 100%;
  transition: width 0.5s;
  @media only screen and (max-width: 600px) {
    & {
      width: ${(props) => (props.isOpen ? "100%" : "0%")};
      border: none;
    }
    img {
      display: ${(props) => (props.isOpen ? "" : "none")};
    }
  }
  img {
    width: 70px;
    height: 70px;
    position: relative;
    margin: 30% auto;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
  }
`;

export const NavLinksConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30%;
  gap: 70px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    & {
      display: ${(props) => (props.isOpen ? "" : "none")};
    }
  }
  a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: #ab9e9e;
    transition: font-size 0.3s;
  }
  a:hover {
    color: white;
    font-size: 1.5rem;
  }
  
`;
