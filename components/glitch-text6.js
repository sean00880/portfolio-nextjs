import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  position: relative;

  &:before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    color: #64a71a;
    left: -3px;
    text-shadow: .4px 0 #212221;


    overflow: hidden;
    animation: noise-anim 1.3s infinite ease-out alternate-reverse;
  }

  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #cbcbcb;

    left: -5px;
    text-shadow: -1px 0 #e71616;
    overflow: hidden;
    animation: noise-anim-2 2.4s infinite ease-in reverse;
  }

  @keyframes noise-anim {
    0% {
      clip-path: inset(100% 0 23% 1);
    }
    5% {
      clip-path: inset(45% 0 41% 0);
    }
    10% {
      clip-path: inset(8% 0 18% 0);
    }
    15% {
      clip-path: inset(94% 0 7% .4);
    }
    20% {
      clip-path: inset(23% 0 69% 0);
    }
    25% {
      clip-path: inset(23% 1 28% 1);
    }
    30% {
      clip-path: inset(73% 0 23% 0);
    }
    35% {
      clip-path: inset(4% 0 35% .4);
    }
    40% {
      clip-path: inset(90% 0 1% 2);
    }
    45% {
      clip-path: inset(75% 1 9% 0);
    }
    50% {
      clip-path: inset(37% 0 13% .4);
    }
    55% {
      clip-path: inset(59% 0 3% 0);
    }
    60% {
      clip-path: inset(6% 0 67% 01);
    }
    65% {
      clip-path: inset(75% 0 19% 0);
    }
    70% {
      clip-path: inset(84% 0 2% 0);
    }
    75% {
      clip-path: inset(92% 0 6% 0);
    }
    80% {
      clip-path: inset(30% 1 58% 0);
    }
    85% {
      clip-path: inset(58% 0 23% 0);
    }
    90% {
      clip-path: inset(20% 1 59% 0);
    }
    95% {
      clip-path: inset(58% 0 32% 0);
    }
    100% {
      clip-path: inset(69% 1 9% 0);
    }
  }
`;

export default ({ children }) => {
  return <Container data-text={children}>{children}</Container>;
};
