import styled from "styled-components";

export const ProjectItemContainer = styled.div`
  display: grid;
  grid-gap: 10%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin-left: 5%;
  margin-right: 15%;

  height: 85vh;
  margin-bottom: 12%;

  @media only screen and (max-width: 600px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      height: 200vh;
    }
  }
`;

export const ProjectItem = styled.div`
  background-color: #403257;
  border-radius: 3%;
  padding: 25px 35px;
  box-shadow: 0px 7px 10px black;
`;

export const ProjectImg = styled.img`
  display: inline;
  width: 50px;
  height: 50px;
`;
export const ProjectTitle = styled.h1`
  align-self: center;
  margin-left: 10px;
  color: #00ffd1;
  font-family: sans-serif;
  letter-spacing: 2px;
`;
export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ProjectDiscription = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: white;
`;
