import styled from "styled-components";
import { ProjectDiscription } from "./ProjectItemContainer.style";

export const SkillLang = styled.h2`
  color: #00ffd1;
  margin-left: 12px;
  font-size: max(1.3em, 1.6vw);
  @media only screen and (max-width: 700px) {
    & {
      font-size: max(3.7vw, 1.3rem);
    }
  }
`;

export const SkillsBar = styled.div`
  position: relative;
  width: 100%;
  height: 1.4rem;
  background-color: #757575;

  border-radius: 40px;

  box-shadow: 0px 0px 25px 1px #757575;

  border: 0.5px solid #00ffd1;
  box-shadow: inset 0px 0px 9px 1px black;
  opacity: 0.95;
`;

export const Indicator = styled.div`
  width: 0%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background-color: #18dbb8;
  border-radius: 40px;
  box-shadow: inset 0px 0px 5px 1px black;

  @media only screen and (max-width: 700px) {
    & {
      height: 1.2rem;
    }
  }
  &.aos-animate {
    width: ${(prop) => prop.percentage};
  }
`;
export const SkillContainer = styled.div`
  padding: 0.5rem 1rem;
`;
