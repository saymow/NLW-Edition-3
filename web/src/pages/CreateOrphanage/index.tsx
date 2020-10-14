import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FiPlus } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import Sidebar from "../../components/Sidebar";
import happyMapIcon from "../../utils/mapIcon";

import { Container, Main, Form, CofirmButton } from "./styles";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import useGetMapTheme from "../../hooks/useGetMapTheme";

export default function CreateOrphanage() {
  const history = useHistory();
  const mapTheme = useGetMapTheme();

  const [form, setForm] = useState({
    name: "",
    about: "",
    instructions: "",
    opening_hours: "",
    position: {
      latitude: 0,
      longitude: 0,
    },
    open_on_weekends: true,
  });

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setForm({
        ...form,
        position: {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        },
      });
    });
  }, []);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setForm({
      ...form,
      position: {
        latitude: lat,
        longitude: lng,
      },
    });
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = event.target;

    setForm({
      ...form,
      [id]: value,
    });
  }

  function handleSelectedImages(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) return;

    const selectedImages = Array.from(files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );

    console.log("selectedImagesPreview: ", selectedImagesPreview);

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const {
      name,
      about,
      instructions,
      position: { latitude, longitude },
      opening_hours,
      open_on_weekends,
    } = form;

    const data = new FormData();

    data.append("name", name);
    data.append("about", about);
    data.append("instructions", instructions);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("opening_hours", opening_hours);
    data.append("open_on_weekends", String(open_on_weekends));

    images.forEach((image) => {
      data.append("images", image);
    });

    await api.post("orphanages", data);

    alert("Cadastro realizado com sucesso");

    history.push("/app");
  }

  return (
    <Container>
      <Sidebar />

      <Main>
        <Form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[form.position.latitude, form.position.longitude]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/${mapTheme}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {form.position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={happyMapIcon}
                  position={[form.position.latitude, form.position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={form.name} onChange={handleInputChange} />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                value={form.about}
                onChange={handleInputChange}
                maxLength={300}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image) => (
                  <img key={image} src={image}></img>
                ))}

                <label htmlFor={"image[]"} className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input
                multiple
                onChange={handleSelectedImages}
                type="file"
                id="image[]"
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={form.instructions}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={form.opening_hours}
                onChange={handleInputChange}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={form.open_on_weekends ? "active" : ""}
                  onClick={() => setForm({ ...form, open_on_weekends: true })}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={!form.open_on_weekends ? "active" : ""}
                  onClick={() => setForm({ ...form, open_on_weekends: false })}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <CofirmButton className="confirm-button" type="submit">
            Confirmar
          </CofirmButton>
        </Form>
      </Main>
    </Container>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
