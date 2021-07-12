import { css, keyframes } from "@emotion/react";

const upAndNormal = keyframes`
  40% {
    transform: translateY(-.5rem);
  }
  80% {
    transform: translateY(0);
  }
`;

const downAndNormal = keyframes`
  20% {
    transform: translateY(.5rem);
  }
  80% {
    transform: translateY(0);
  }
`;

const commonArrowStyles = css`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1000;
  transition: all 0.2s;

  svg {
    width: 9rem;
    height: 9rem;
    fill: #fff;
  }

  &:hover {
    transform: translateX(-50%) scale(1.2);
  }

  &:active {
    transform: translateX(-50%) scale(0.9);
  }
`;

export const upArrow = css`
  top: 0;
  ${commonArrowStyles};

  svg {
    animation: ${upAndNormal} 1.5s linear infinite;
  }
`;

export const downArrow = css`
  bottom: 0;
  ${commonArrowStyles};

  svg {
    animation: ${downAndNormal} 1.5s linear infinite;
  }
`;
