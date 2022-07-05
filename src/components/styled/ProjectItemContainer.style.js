import styled from "styled-components";

export const ProjectGridContainer = styled.div`
  position: relative;
  display: grid;
  grid-row-gap: 7rem;
  grid-column-gap: 6rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 80%;
  margin: 6rem auto;

  @media only screen and (max-width: 700px) {
    & {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-row-gap: 4.5rem;
      grid-column-gap: 0px;
      width: 85vw;
    }
  }
`;

export const ProjectItem = styled.div`
  background-color: #22223d;
  border-radius: 3%;
  padding: 25px 10%;
  box-shadow: 2px 2px 30px 9px #11111f;

  @media only screen and (max-width: 700px) {
    & {
      padding: 15px 5%;
    }
  }
`;

export const ProjectImg = styled.img`
  display: inline;
  width: max(2.5rem, 3vw);
  height: max(2.5rem, 3vw);

  @media only screen and (max-width: 700px) {
    & {
      width: max(2rem, 7vw);
      height: max(2rem, 7vw);
    }
  }
`;
export const ProjectTitle = styled.h1`
  align-self: center;
  margin-left: 10px;
  font-size: clamp(1rem, 2.5vw, 2rem);
  color: #00ffd1;
  font-family: sans-serif;
  letter-spacing: 2px;
  font-family: sans-serif;
  @media only screen and (max-width: 700px) {
    & {
      font-size: max(5.2vw, 1.4rem);
    }
  }
`;

export const ProjectDiscription = styled.p`
  margin-top: 10px;
  font-size: max(1.2vw, 0.9rem);
  font-weight: 100;
  color: #e0e0e0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  @media only screen and (max-width: 700px) {
    & {
      font-size: max(2.5vw, 0.8rem);
    }
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
