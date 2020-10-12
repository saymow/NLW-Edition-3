import styled from "styled-components";
import { Link } from "react-router-dom";

import LandingSvg from "../../images/landing.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 110rem;

  height: 100%;
  max-height: 68rem;

  padding: 3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${LandingSvg}) no-repeat 90% center;
`;

export const MainContent = styled.main`
  max-width: 35rem;

  h1 {
    font-size: 7.6rem;
    font-weight: 800;
    line-height: 7rem;
  }

  p {
    margin-top: 4rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

export const EnterApp = styled(Link)`
  position: absolute;
  right: 3rem;
  bottom: 3rem;

  width: 8rem;
  height: 8rem;
  background: #ffd666;
  border-radius: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 200ms ease;

  &:hover {
    background: #96feff;
  }
`;

export const Location = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;

  font-size: 2.4rem;
  line-height: 3.4rem;
  text-align: right;

  display: flex;
  flex-direction: column;

  strong {
    font-weight: 800;
  }
`;
