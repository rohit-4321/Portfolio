import React from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";

import { loadFull } from "tsparticles";

import { ParticalOptions } from "../../configs/partical-config";

export const ParticalComponent = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <ParticleStyle>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticalOptions}
      />
    </ParticleStyle>
  );
};

const ParticleStyle = styled.div`
  z-index: -1;
  position: absolute;
  width: auto;
  height: auto;
`;
