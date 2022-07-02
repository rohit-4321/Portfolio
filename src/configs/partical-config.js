export const ParticalOptions = {
  background: {
    color: "#18182D",
  },
  particles: {
    zIndex: 0,
    number: {
      value: 6,
      density: {
        enable: true,
        value_area: 180,
      },
    },
    color: {
      value: "#89939b",
    },
    shape: {
      type: "circle",
      // polygon: {
      //   sides: 6,
      // },
    },
    opacity: {
      value: 0.5,
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 8,
      random: {
        enable: true,
        minimumValue: 3,
      },
      anim: {
        enable: false,
        speed: 5,
        size_min: 40,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 100,
      color: "#ffffff",
      opacity: 1,
      width: 2,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
};
