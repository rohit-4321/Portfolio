import React from "react";
import ContainerHeading from "../common/ContainerHeading";
import {
  ItemHeader,
  ProjectDiscription,
  ProjectImg,
  ProjectItem,
  ProjectItemContainer,
  ProjectTitle,
} from "../styled/ProjectItemContainer.style";

function Projects() {
  return (
    <div>
      <ContainerHeading heading={"Project"} />
      <ProjectItemContainer>
        <ProjectItemContent
          title={"My Dictionary"}
          imgScr={require("../../resources/icon.png")}
          discription="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."
        />
      </ProjectItemContainer>
    </div>
  );
}

const ProjectItemContent = (props) => {
  return (
    <ProjectItem>
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
