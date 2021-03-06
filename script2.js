tsParticles.load("tsparticles", {
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        bubble: {
          opacity: 0.8,
          size: 10,
          color: {
            value: "#ff0000"
          }
        }
      }
    },
    particles: {
      color: {
        value: "#000"
      },
      links: {
        color: {
          value: "#000"
        },
        enable: true,
        opacity: 0.5
      },
      move: {
        enable: true
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 2
      }
    }
  });
  