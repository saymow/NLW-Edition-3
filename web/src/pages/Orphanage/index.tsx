import React, { useEffect, useState } from "react";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import useGetMapTheme from "../../hooks/useGetMapTheme";
import api from "../../services/api";
import happyMapIcon from "../../utils/mapIcon";
import {
  Container,
  Content,
  Images,
  Main,
  OpenDetails,
  Section,
} from "./styles";

interface Orphanage {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>;
}

export default function Orphanage() {
  const { id } = useParams<{ id: string }>();
  const mapTheme = useGetMapTheme();

  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get("orphanages/" + id).then((response) => {
      setOrphanage(response.data);
    });
  }, [id]);

  if (!orphanage) return <p>Loading...</p>;

  return (
    <Container id="page-orphanage">
      <Sidebar />

      <Main>
        <Section className="orphanage-details">
          {orphanage.images.length !== 0 && (
            <>
              <img
                src={orphanage.images[activeImageIndex].url}
                alt={orphanage.name}
              />

              <Images className="images">
                {orphanage.images.map((image, i) => (
                  <button
                    key={image.id}
                    onClick={() => setActiveImageIndex(i)}
                    className={activeImageIndex === i ? "active" : ""}
                    type="button"
                  >
                    <img src={image.url} alt={orphanage.name} />
                  </button>
                ))}
              </Images>
            </>
          )}

          <Content className="orphanage-details-content">
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <div className="map-container">
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/${mapTheme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails className="open-details">
              <div className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </div>
              {orphanage.open_on_weekends ? (
                <div className="open-on-weekends ">
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </div>
              ) : (
                <div className="open-on-weekends dont-open">
                  <FiInfo size={32} color="#ff6690" />
                  Não Atendemos <br />
                  fim de semana
                </div>
              )}
            </OpenDetails>

            {/* <ContactButton type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton> */}
          </Content>
        </Section>
      </Main>
    </Container>
  );
}
