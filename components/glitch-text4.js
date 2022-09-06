import React from "react";
import styled from "@emotion/styled";

const GlitchText = styled.div`

  position: relative;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    left: 2px;
    text-shadow: -1px 0 #d6d6d6;


    overflow: hidden;
    animation: noise-anim-2 5s infinite linear alternate-reverse;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #242323;
    left: -2px;
    text-shadow: -1px 0 #bfe9ba;
    overflow: hidden;
    animation: noise-anim 1s infinite linear alternate-reverse;
  }

  @keyframes noise-anim {
    0% {
      clip-path: inset(100% 0 21% 0);
    }
    5% {
      clip-path: inset(45% 0 1% 0);
    }
    10% {
      clip-path: inset(28% 0 18% 0);
    }
    15% {
      clip-path: inset(94% 0 7% 0);
    }
    20% {
      clip-path: inset(23% 0 69% 0);
    }
    25% {
      clip-path: inset(21% 0 28% 0);
    }
    30% {
      clip-path: inset(92% 0 3% 0);
    }
    35% {
      clip-path: inset(2% 0 5% 0);
    }
    40% {
      clip-path: inset(8% 0 13% 0);
    }
    45% {
      clip-path: inset(7% 0 9% 0);
    }
    50% {
      clip-path: inset(37% 0 3% 0);
    }
    55% {
      clip-path: inset(9% 0 3% 0);
    }
    60% {
      clip-path: inset(26% 0 67% 0);
    }
    65% {
      clip-path: inset(75% 0 19% 0);
    }
    70% {
      clip-path: inset(84% 0 32% 0);
    }
    75% {
      clip-path: inset(2% 0 56% 0);
    }
    80% {
      clip-path: inset(10% 0 58% 0);
    }
    85% {
      clip-path: inset(32% 0 32% 0);
    }
    90% {
      clip-path: inset(20% 0 29% 0);
    }
    95% {
      clip-path: inset(10% 0 32% 0);
    }
    100% {
      clip-path: inset(39% 0 39% 0);
    }
  }
`;

GlitchText.displayName = "GitchText";


const GlitchText = ({ children }) => {
  return <Container data-text={children}>{children}</Container>;
};

export default GlitchText;
