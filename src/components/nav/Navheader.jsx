import { Navheader } from "../styled/NavHeader.styled";

import styled, { css } from "styled-components";

export const NavHeader = (props) => {
  return (
    <Navheader>
      <BurgerIcon
        onIconClick={props.onIconClicked}
        sideBarState={props.navState}
      />
    </Navheader>
  );
};
const BurgerIcon = ({ onIconClick, sideBarState }) => {
  console.log(sideBarState);
  return (
    <BurgerIconContainer onClick={onIconClick} isNavBarOpen={sideBarState}>
      <div></div>
      <div></div>
      <div></div>
    </BurgerIconContainer>
  );
};
const BurgerIconContainer = styled.div`
  position: relative;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: center;
  width: 3rem;

  & > * {
    position: absolute;
    top: 50%;
    border-radius: 4px;
    background-color: white;
    width: 32px;
    box-shadow: 0 0 10px 0 #00ffd58d;
    height: 3px;
    transition: all 0.5s cubic-bezier(0.68, 0, 0, 2.2);
  }
  & div:nth-child(1) {
    ${(props) =>
      props.isNavBarOpen
        ? css`
            transform: rotate(45deg);
          `
        : css`
            transform: translatey(-10px);
          `}
  }
  & div:nth-child(2) {
    ${(props) =>
      props.isNavBarOpen
        ? css`
            opacity: 0;
            transform: translate(-10px);
          `
        : css`
            opacity: 1;
          `}
  }
  & div:nth-child(3) {
    ${(props) =>
      props.isNavBarOpen
        ? css`
            transform: rotate(-45deg);
          `
        : css`
            transform: translatey(10px);
          `}
  }

  /* &:hover {
    div:nth-child(1) {
      transform: rotate(45deg);
    }
    div:nth-child(2) {
    }
    div:nth-child(3) {
    }
  } */
`;
