import styled, { css } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";

export const Container = styled.span`
  position: absolute;
  top: 2rem;
  right: 0;

  transform: rotate(90deg);

  > label {
    position: relative;
    cursor: pointer;

    width: 6rem;
    height: 3rem;
    border-radius: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;

  &:checked + label {
    background: rgba(0, 0, 0, 0.6);

    div {
      transform: translateX(3rem);
    }
  }
`;

export const Ball = styled.div`
  position: absolute;
  z-index: 2;

  width: 2.4rem;
  height: 2.4rem;
  top: 0.3rem;
  left: 0.3rem;
  border-radius: 50%;

  background: #fff;

  transition: transform 200ms ease;
`;

const iconsCss = css`
  width: 2rem;
  height: 2rem;
`;

export const SunIcon = styled(FaSun)`
  ${iconsCss}
  fill: #fff506;

  position: absolute;
  left: 0.3rem;
`;
export const MoonIcon = styled(FaMoon)`
  ${iconsCss}
  fill: #FEFCD7;

  position: absolute;
  right: 0.3rem;

  transform: rotate(-90deg);
`;
