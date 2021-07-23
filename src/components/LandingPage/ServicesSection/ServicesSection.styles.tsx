import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 8rem 8rem 4rem 12rem;
  color: #fff;
  background-color: hsl(232, 21%, 35%);
  display: flex;
  align-items: center;

  @media only screen and (max-width: 1065px) {
    padding: 8rem 8rem 4rem;
  }
  @media only screen and (max-width: 975px) {
    padding: 8rem 4rem 4rem;
    flex-direction: column;
    align-items: flex-start;
  }

  @media only screen and (max-width: 465px) {
    padding: 8rem 2rem 2rem;
  }
`;

export const heading = (isVisible: boolean) => css`
  font-size: 10rem;
  transition: all 1.5s ease;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: translateX(-80%);
  `};

  @media only screen and (max-width: 1125px) {
    font-size: 8rem;
  }

  @media only screen and (max-width: 1065px) {
    font-size: 7rem;
  }
  @media only screen and (max-width: 975px) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 650px) {
    overflow-x: auto;
  }

  @media only screen and (max-width: 465px) {
    font-size: 5rem;
  }
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  padding-top: 5rem;

  @media only screen and (max-width: 975px) {
    width: 100%;
  }
  @media only screen and (max-width: 650px) {
    padding: 2rem;
  }
`;

export const contactUsBtn = (isVisible: boolean) => css`
  padding: 2rem 4rem;
  margin-top: 4rem;
  font-weight: 700;
  font-size: 2rem;
  background-color: #2573a7;
  border: 1px solid #164666;
  color: #f5f5f5;
  border-radius: 0.4rem;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  transition: all 1s ease;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: translateX(-80%);
  `};

  @media only screen and (max-width: 1125px) {
    padding: 1.5rem 3rem;
  }

  @media only screen and (max-width: 975px) {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 650px) {
    display: none;
  }
`;

export const services = (isVisible: boolean) => css`
  width: 70%;
  padding: 5rem 4rem 5rem 10rem;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  transition: all 2s ease;

  ${isVisible
    ? `
     transform: translateX(0); 
  `
    : `
     transform: translateX(40%);
  `};

  @media only screen and (max-width: 1125px) {
    padding: 5rem 3rem 5rem 5rem;
  }

  @media only screen and (max-width: 975px) {
    width: 100%;
    padding: 5rem 3rem 5rem 5rem;
  }
  @media only screen and (max-width: 650px) {
    padding: 0 3rem 5rem 0;
  }
`;

export const service = css`
  background-color: #edecec;
  color: #424242;
  padding: 1.2rem 2rem;
  border-radius: 2.5rem;
  border: 1px solid #424242;
  width: fit-content;
  height: fit-content;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  font-size: 1.7rem;
  font-weight: 700;
  margin: 1rem 0.6rem;

  @media only screen and (max-width: 650px) {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    margin: 0.6rem 0.4rem;
    border-radius: 2rem;
  }
`;
