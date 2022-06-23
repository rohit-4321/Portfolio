import ContainerHeading from "../common/ContainerHeading";
import Projects from "../projects/Projects";
import { StyledMainContainer } from "../styled/MainContainer.styled";
import { Intro } from "./Intro";

export const MainContainer = () => {
  return (
    <StyledMainContainer>
      <Intro />
      <Projects />
    </StyledMainContainer>
  );
};
