import React from "react";
import { FiArrowRight } from "react-icons/fi";

import LogoImg from "../../images/logo.svg";

import {
  Container,
  ContentWrapper,
  MainContent,
  EnterApp,
  Location,
} from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={LogoImg} alt="Imagem de logo" />

        <MainContent>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </MainContent>

        <Location>
          <strong>Betim</strong>
          <span>Minas Gerais</span>
        </Location>

        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0, 0.6)" />
        </EnterApp>
      </ContentWrapper>
    </Container>
  );
};

export default Main;
