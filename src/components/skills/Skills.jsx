import React from "react";
import ContainerHeading from "../common/ContainerHeading";
import "aos/dist/aos.css";
import { WrapperMain } from "../styled/MainContentWrapper.style";
import { ProjectGridContainer } from "../styled/ProjectItemContainer.style";
import {
  Indicator,
  SkillContainer,
  SkillLang,
  SkillsBar,
} from "../styled/SkillsItem.style";

function Skills() {
  return (
    <>
      <ContainerHeading heading={"Skills"} />
      <WrapperMain>
        <ProjectGridContainer>
          <SkillItem name={"JAVA"} percentage={"98%"} />
          <SkillItem name={"KOTLIN"} percentage={"92%"} />
          <SkillItem name={"JAVASCRIPT"} percentage={"90%"} />
          <SkillItem name={"HTML"} percentage={"92%"} />
          <SkillItem name={"CSS"} percentage={"89%"} />
          <SkillItem name={"JETPACK COMPOSE UI"} percentage={"95%"} />
          <SkillItem name={"TYPESCRIPT"} percentage={"75%"} />
          <SkillItem name={"STYLED COMPONENT"} percentage={"85%"} />
          <SkillItem name={"C/C++"} percentage={"60%"} />
          <SkillItem name={"GITHUB"} percentage={"97%"} />
          <SkillItem name={"FIGMA"} percentage={"92%"} />
        </ProjectGridContainer>
      </WrapperMain>
    </>
  );
}

const SkillItem = (props) => {
  return (
    <SkillContainer>
      <SkillLang>{props.name}</SkillLang>
      <SkillsBar percentage={props.percentage}>
        <Indicator
          id="indicator"
          percentage={props.percentage}
          data-aos="ease"
          data-aos-offset="30"
          data-aos-duration="1000"
        />
      </SkillsBar>
    </SkillContainer>
  );
};
export default Skills;
