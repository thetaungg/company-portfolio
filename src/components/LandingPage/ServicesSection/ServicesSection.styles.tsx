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

  @media only screen and (max-width: 1065px) {
    padding: 8rem 8rem 4rem;
  }
  @media only screen and (max-width: 650px) {
    padding: 8rem 4rem 4rem;
  }

  @media only screen and (max-width: 465px) {
    padding: 8rem 2rem 2rem;
  }
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
  `};

  @media only screen and (max-width: 1125px) {
    font-size: 7rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 975px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 650px) {
    font-size: 4rem;
  }
`;

export const services = css`
  display: flex;
  margin-top: 3rem;
  flex-grow: 1;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
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
  `};

  @media only screen and (max-width: 1125px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 975px) {
    font-size: 2rem;
  }
`;

export const list = css`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media only screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
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
  `};

  @media only screen and (max-width: 1125px) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 975px) {
    font-size: 1.4rem;

    &:not(:last-of-type) {
      margin-bottom: 1rem;
    }
  }

  @media only screen and (max-width: 650px) {
    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }
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

  @media only screen and (max-width: 1125px) {
    font-size: 1.3rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 975px) {
    font-size: 1.1rem;
  }
  @media only screen and (max-width: 650px) and (max-height: 813px) {
    display: none;
  }
`;
