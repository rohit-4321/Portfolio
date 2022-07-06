import React from "react";
import { ContainerHeadingStyled } from "../styled/ContainerHeading.style";
import { WrapperMain } from "../styled/MainContentWrapper.style";
import "aos/dist/aos.css";

function ContainerHeading({ heading, id }) {
  return (
    <WrapperMain id={id}>
      <ContainerHeadingStyled data-aos="">{heading}</ContainerHeadingStyled>
    </WrapperMain>
  );
}

export default ContainerHeading;
