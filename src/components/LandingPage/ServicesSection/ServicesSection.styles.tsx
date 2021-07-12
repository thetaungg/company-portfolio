import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 8rem 8rem 4rem 12rem;
  color: #fff;
  background-color: #053742;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const heading = (isVisible: boolean) => css`
  font-size: 8rem;
  transition: all 1.5s ease;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: translateX(-80%);
  `}
`;

export const services = css`
  display: flex;
  margin-top: 3rem;
  flex-grow: 1;
`;

export const textGroup = css`
  flex-basis: 50%;
  height: 100%;

  &:not(:last-of-type) {
    margin-right: 4rem;
  }
`;

export const serviceHeading = (isVisible: boolean, orientation: "left" | "right") => css`
  font-size: 3rem;
  margin-left: 0.5rem;

  transition: all 1s ease;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: ${orientation === "left" ? "translateX(-60%)" : "translateX(60%)"} ;
  `}
`;

export const list = css`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const listItem = (
  isVisible: boolean,
  orientation: "left" | "right",
  animationTiming: number
) => css`
  display: flex;
  align-items: flex-start;
  font-size: 1.8rem;
  font-weight: 600;
  transition: all ${animationTiming}s ease;

  &:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: ${orientation === "left" ? "translateX(-60%)" : "translateX(60%)"} ;
  `}
`;

export const iconContainer = css`
  margin-right: 1.5rem;
  margin-top: -1rem;
  svg {
    width: 4rem;
  }
`;

export const col = css`
  display: flex;
  flex-direction: column;
`;

export const serviceDetails = css`
  font-size: 1.4rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;