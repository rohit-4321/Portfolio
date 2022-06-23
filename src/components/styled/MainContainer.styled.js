import styled from "styled-components";

export const StyledMainContainer = styled.div`
  position: absolute;
  left: 14%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  @media only screen and (max-width: 600px) {
    & {
      left: 0%;
    }
  }
`;
