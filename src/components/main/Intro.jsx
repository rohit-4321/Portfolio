import {
  ContentStyled,
  ResumeButton,
  StyledIntro,
} from "../styled/Intro.styled";
import { WrapperMain } from "../styled/MainContentWrapper.style";
import "aos/dist/aos.css";
import pdf from "./rohit_resume_.pdf";

export const Intro = () => {
  return (
    <WrapperMain>
      <StyledIntro id="about">
        <ContentIntro />
      </StyledIntro>
    </WrapperMain>
  );
};
const ContentIntro = () => {
  return (
    <ContentStyled>
      <p
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="150"
        data-aos-offset="0"
      >
        HI THERE👋, I’M
      </p>
      <p
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        Rohit Choudhary
      </p>

      <p
        data-aos="zoom-in"
        data-aos-delay="450"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        I am a Web and Android Developer from India.
      </p>
      <p
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-duration="1000"
        data-aos-offset="0"
      >
        I am a technology enthusiast ,I love to code for website and Mobile
        Apps. I am always excited to Web and Mobile Apps with great user
        experience.
      </p>
      <ResumeButton
        href={pdf}
        target="_blank"
        rel="noreferrer"
        data-aos="zoom-in"
        data-aos-delay="750"
        data-aos-duration="1000"
        data-aos-offset="-80"
      >
        <span>Resume</span>
      </ResumeButton>
    </ContentStyled>
  );
};
