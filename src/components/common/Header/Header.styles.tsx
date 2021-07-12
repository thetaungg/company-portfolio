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
  padding: 2rem 3rem 0 3rem;
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
  cursor: pointer;
  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.1rem);
  overflow: hidden; */

  img {
    width: 100%;
  }
`;

export const name = css`
  font-size: 4rem;
  font-family: "Fredoka One", cursive;
  font-weight: 400;
  margin-left: 1rem;
`;

export const links = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const link = css`
  font-size: 2rem;
  color: #fff;
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
