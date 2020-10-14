import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import api from "../../services/api";

import mapMarkerSvg from "../../images/mapMarker.svg";

import { useGlobalContext } from "../../context";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import mapIcon from "../../utils/mapIcon";

import {
  Container,
  SideBar,
  Header,
  Footer,
  Content,
  CreateOrphanageLink,
  CustomPopup,
} from "./styles";
import useGetMapTheme from "../../hooks/useGetMapTheme";

interface Orphanage {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const mapTheme = useGetMapTheme();
  const [orphanages, setOrphanges] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanges(response.data);
    });
  }, []);

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
          {orphanages.map((orphanage) => (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <CustomPopup closeButton={false} minWidth={240} maxWidth={240}>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={32} color="#Fff" />
                </Link>
              </CustomPopup>
            </Marker>
          ))}
        </Map>
      </Content>

      <CreateOrphanageLink to="/orphanages/create">
        <FiPlus size={32} color="var(--text-primary)" />
      </CreateOrphanageLink>
    </Container>
  );
};

export default OrphanagesMap;
