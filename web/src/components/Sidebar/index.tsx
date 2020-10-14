import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import mapMarkerImg from "../../images/mapMarker.svg";
import ThemeSwitcher from "../ThemeSwitcher";

import { Container, Footer } from "./styles";

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />
      <ThemeSwitcher />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Container>
  );
};

export default Sidebar;
