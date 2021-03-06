import styled from "styled-components";

export const StyledMainContainer = styled.div`
  position: relative;
  width: auto;
  height: auto;
  left: auto;
  transition: all 0.5s ease-in;
  @media only screen and (max-width: 700px) {
    & {
      opacity: ${(props) => (props.navState ? "0" : "1")};
    }
  }
`;
