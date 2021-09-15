import { css } from "@emotion/react";

export const btn = css`
  outline: none;
  border: none;
  background-color: #f5f5f5;
  padding: 0.6rem;
  border-radius: 50%;
  width: 5.5rem;
  height: 5.5rem;
  position: fixed;
  bottom: 4rem;
  right: 2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
