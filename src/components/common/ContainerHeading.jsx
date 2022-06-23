import React from "react";
import { ContainerHeadingStyled } from "../styled/ContainerHeading.style";

function ContainerHeading({ heading }) {
  return (
    <div>
      <ContainerHeadingStyled>{heading}</ContainerHeadingStyled>
    </div>
  );
}

export default ContainerHeading;
