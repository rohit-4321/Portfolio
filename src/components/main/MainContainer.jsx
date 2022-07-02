import Contact from "../contact/Contact";
import { Footer } from "../footer/Footer";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import { StyledMainContainer } from "../styled/MainContainer.styled";
import { Intro } from "./Intro";

export const MainContainer = (props) => {
  return (
    <>
      <StyledMainContainer navState={props.navState}>
        <Intro />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </StyledMainContainer>
    </>
  );
};
