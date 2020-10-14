import { Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;
`;

export const SideBar = styled.aside`
  position: relative;

  width: 44rem;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  h2 {
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem;
  }

  p {
    line-height: 2.8rem;
    margin-top: 2.4rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;

  line-height: 2.4rem;

  strong {
    font-weight: 800;
  }
`;

export const Content = styled.main`
  z-index: 0;
  width: 100%;
  height: 100%;
`;

export const CreateOrphanageLink = styled(Link)`
  position: absolute;
  right: 4rem;
  bottom: 4rem;

  width: 6.4rem;
  height: 6.4rem;
  border-radius: 2rem;

  background: #15c3d6;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 200ms ease;

  &:hover {
    background: #17e6eb;
  }
`;

export const CustomPopup = styled(Popup as any)`
  .leaflet-popup-content-wrapper {
    background: var(--background);
    border-radius: 2rem;
    box-shadow: none;

    div {
      color: #0089a5;
      font-size: 2rem;
      font-weight: bold;
      margin: 0.8rem 1.2rem;

      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 4rem;
        height: 4rem;
        background: #15c3d6;

        border-radius: 1.2rem;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;
