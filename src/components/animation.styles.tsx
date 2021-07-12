import { keyframes } from "@emotion/react";

export const moveInTop = keyframes`
  0% { /*beginning of animation */
    opacity: 0;
    transform: translateY(-30%); /*negative value means the element goes to l.h.s */
  }
  100% { /*ending of animation */
    opacity: 1;
    transform: translate(0);
  }
`;

export const moveInLeft = keyframes`
  0% { /*beginning of animation */
    opacity: 0;
    transform: translateX(-30%); /*negative value means the element goes to l.h.s */
  }
  100% { /*ending of animation */
    opacity: 1;
    transform: translate(0);
  }
`;

export const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(30%);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;
