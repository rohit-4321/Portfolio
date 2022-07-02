import {
  ContentStyled,
  ResumeButton,
  StyledIntro,
} from "../styled/Intro.styled";
import { WrapperMain } from "../styled/MainContentWrapper.style";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

export const Intro = () => {
  return (
    <WrapperMain>
      <StyledIntro>
        <ContentIntro />
      </StyledIntro>
    </WrapperMain>
  );
};
const ContentIntro = () => {
  return (
    <ContentStyled>
      <p data-aos="fade-right" data-aos-duration="1500" data-aos-offset="0">
        Hii, I am
      </p>
      <p data-aos="fade-left" data-aos-duration="1500" data-aos-offset="0">
        Rohit Choudhary
      </p>

      <p data-aos="fade-right" data-aos-duration="1500" data-aos-offset="0">
        I am a Web and Android Developer from India.{" "}
      </p>
      <p data-aos="fade-left" data-aos-duration="1500" data-aos-offset="0">
        I am a technology enthusiast ,I love to code for website and Mobile
        Apps. I always excited to build user friendly Web and Mobile Apps with
        great user experience.
      </p>
      <ResumeButton
        data-aos="fade-right"
        data-aos-duration="1500"
        data-aos-offset="0"
      >
        <span>Resume</span>
      </ResumeButton>
    </ContentStyled>
  );
};
