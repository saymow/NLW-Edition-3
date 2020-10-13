import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { useGlobalContext } from "../../context";

import mapMarkerSvg from "../../images/mapMarker.svg";

import {
  Container,
  SideBar,
  Header,
  Footer,
  Content,
  CreateOrphanageLink,
} from "./styles";
import { useEffect } from "react";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const OrphanagesMap: React.FC = () => {
  const { theme } = useGlobalContext();
  const [mapTheme, setMapTheme] = useState<string>();

  useEffect(() => setMapTheme(theme === "light" ? "light-v10" : "dark-v10"), [
    theme,
  ]);

  return (
    <Container>
      <SideBar>
        <ThemeSwitcher />
        <Header>
          <img src={mapMarkerSvg} alt="Logo" />

          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Betim</strong>
          <span>Mg</span>
        </Footer>
      </SideBar>

      <Content>
        <Map
          center={[-19.9701412, -44.2004929]}
          zoom={15}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/${mapTheme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
        </Map>
      </Content>

      <CreateOrphanageLink to="">
        <FiPlus size={32} color="var(--text-primary)" />
      </CreateOrphanageLink>
    </Container>
  );
};

export default OrphanagesMap;
