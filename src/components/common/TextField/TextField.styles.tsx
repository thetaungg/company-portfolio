import { css } from "@emotion/react";

export const container = css`
  position: relative;
  width: 100%;

  /* hide input number arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const label = css`
  position: absolute;
  left: 1.5rem;
  top: 0.5rem;
  transform: translateY(0);
  font-size: 1rem;
  color: #8b8b8b;
  pointer-events: none;
  transition: all 0.2s;
`;

export const input = css`
  width: 100%;
  background-color: inherit;
  font-size: 1.6rem;
  color: #424242;
  border: 1px solid #a5a5a5;
  padding: 2rem 1.5rem 1rem;
  border-radius: 0.5rem;
  outline: none;
  font-weight: 400;
  height: 100%;
  transition: all 0.2s;

  &:hover {
    border-color: #2980b9;
  }

  &:focus {
    border-color: #2980b9;
    box-shadow: 0 0 2px rgba(102, 175, 233, 0.5);

    & ~ label {
      font-size: 1rem !important;
      top: 0.6rem !important;
      transform: translateY(0) !important;
    }
  }

  &[value=""] ~ label {
    font-size: 1.4rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
