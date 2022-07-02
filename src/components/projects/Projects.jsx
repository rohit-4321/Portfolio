import "aos/dist/aos.css";
import Aos from "aos";
import React from "react";
import ContainerHeading from "../common/ContainerHeading";
import { WrapperMain } from "../styled/MainContentWrapper.style";
import {
  ItemHeader,
  ProjectDiscription,
  ProjectImg,
  ProjectItem,
  ProjectGridContainer,
  ProjectTitle,
} from "../styled/ProjectItemContainer.style";
import { useEffect } from "react";

function Projects() {
  return (
    <>
      <ContainerHeading id="projects" heading={"Project"} />
      <WrapperMain>
        <ProjectGridContainer>
          <ProjectItemContent
            title={"Snake Game "}
            imgScr={require("../../resources/snake_icon.png")}
            discription="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
          />
          <ProjectItemContent
            title={"My Dictionary"}
            imgScr={require("../../resources/icon.png")}
            discription="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
          />

          <ProjectItemContent
            title={"My Dictionary"}
            imgScr={require("../../resources/icon.png")}
            discription="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
          />
          <ProjectItemContent
            title={"Snake Game"}
            imgScr={require("../../resources/snake_icon.png")}
            discription="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
          />
        </ProjectGridContainer>
      </WrapperMain>
    </>
  );
}

const ProjectItemContent = (props) => {
  return (
    <ProjectItem data-aos="fade-in" data-aos-once="false">
      <ItemHeader>
        <ProjectImg
          src={props.imgScr}
          alt="icon"
          width="50"
          height="50"
        ></ProjectImg>
        <ProjectTitle>{props.title}</ProjectTitle>
      </ItemHeader>

      <ProjectDiscription>{props.discription}</ProjectDiscription>
    </ProjectItem>
  );
};

export default Projects;
