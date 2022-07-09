import "aos/dist/aos.css";

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
  ProjectLink,
} from "../styled/ProjectItemContainer.style";

function Projects() {
  return (
    <>
      <ContainerHeading id="projects" heading={"Project"} />
      <WrapperMain>
        <ProjectGridContainer>
          <ProjectItemContent
            title={"Snake Game "}
            url={"https://github.com/rohit-4321/Snake-game-in-Android."}
            imgScr={require("../../resources/snake_icon.png")}
            discription="This is a simple snake game in Android which uses Java Thread , android canvas , SurfaceView etc.I learn about how multithreading works in java through this projects. It also uses share Preference to store highest score in the game."
          />
          <ProjectItemContent
            title={"My Dictionary"}
            imgScr={require("../../resources/icon.png")}
            discription="This is a Online Dictionary which fetch word meaning from Remote Server. I have used Retrofit Library for making meaning request and Room Database for storing the meaning of a word in local storage. I have use google translation Api for translating meaning in more than 10 language."
            url=" https://play.google.com/store/apps/details?id=com.elite.mydictionary"
          />

          <ProjectItemContent
            title={"Matrix Calculator"}
            url={"https://github.com/rohit-4321/Matrix-Calculator"}
            imgScr={require("../../resources/matrix_icon.png")}
            discription="This matrix calculator used for advance matrix operation and basic arithmetic operation. UI is mostly 
            build using Jetpack Compose UI Library and Jetpack Navigation. We can calculate Inverse of a 
            matrix and determinant of a matrix and basic arithmetic calculation."
          />
          <ProjectItemContent
            title={"Photo Gallery"}
            url={"https://appphotogallery.netlify.app/"}
            imgScr={require("../../resources/photo_gallary_icon.png")}
            discription="This project was build using ReactJs and plain Css. It uses firebase authentication for every users.It also uses firestore database and storage for storing all the photos of every users separately."
          />
          <ProjectItemContent
            url={"https://github.com/rohit-4321/TakeTask"}
            title={"TakeTask"}
            imgScr={require("../../resources/takeTask_icon.png")}
            discription="This project was build on TypeScript and ReactJs. It Store user's Tasks and allow them to mark complete, edit, delete task from the List."
          />
          {/* <ProjectItemContent
            title={"Portfolio"}
            imgScr={require("../../resources/snake_icon.png")}
            discription="This is a responsive Personal Portfolio website. I use ReactJs and Styled Component for the the front-end."
          /> */}
        </ProjectGridContainer>
      </WrapperMain>
    </>
  );
}

const ProjectItemContent = (props) => {
  return (
    <ProjectLink
      href={props.url}
      target="_blank"
      data-aos="fade-in"
      data-aos-offset="60"
    >
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
    </ProjectLink>
  );
};

export default Projects;
