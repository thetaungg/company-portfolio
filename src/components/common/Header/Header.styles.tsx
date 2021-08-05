import { css } from "@emotion/react";

export const header = css`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 5rem 0 3rem;

  @media only screen and (max-width: 695px) {
    padding: 2rem 5rem 0 1.5rem;
  }

  @media only screen and (max-width: 650px) {
    padding: 3rem 5rem 0 2.5rem;
  }
  @media only screen and (max-width: 465px) {
    padding: 2rem 3rem 0 1rem;
  }
`;

export const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f5;
`;

export const logoContainer = css`
  /* width: 6rem;
  height: 6rem;
  background-color: #112d4e;
  border-radius: 50%;
  border: 1px solid #c4c4c4;
  padding: 0.5rem;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1rem);
  overflow: hidden; */
  cursor: pointer;
  height: 6rem;

  @media only screen and (max-width: 650px) {
    height: 4rem;
  }

  img {
    height: 100%;
  }
`;

export const name = css`
  font-size: 3.5rem;
  color: #f5f5f5;
  font-family: "AvertaStd", cursive;
  font-weight: 900;
  margin-left: 1rem;

  @media only screen and (max-width: 650px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 465px) {
    font-size: 2.5rem;
  }
`;

export const links = css`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 695px) {
    display: none;
  }
`;

export const link = css`
  font-size: 2rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:last-of-type) {
    margin-right: 3rem;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }
`;
