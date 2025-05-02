import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  ArtistsActionsContainer,
  PastPageDataContainerAndTitle,
  Title,
  FormContainertArtistsAction,
  LeftSectionContainer,
  RightSectionContainer,
  FormSectionsContainer,
  TitleContainer,
  PastPageContainer,
  ActionButtonContainer,
  ButtonsContainer,
} from "./artistsStyles";
import { BreadcumsContainer } from "../../../components/Global/GlobalStyles";
import BreadcrumbsMui from "../../../components/Breadcrumbs/Breadcrumbs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useArtists from "./useArtists";
import { artistValidations } from "./artistValidations";
import useNotistack from "../../../components/Notistack/useNotistack";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import InputFile from "../../../components/InputFile/InputFile";

const EditArtist = () => {
  const { id } = useParams();
  const { editArtist, getArtistById, artist, isLoading, setIsLoading } =
    useArtists();
  const [artistInfo, setArtistInfo] = useState({
    name: "",
    lastName: "",
    cellphone: "",
    description: "",
    artistName: "",
    shortDescription: "",
    primaryImage: "",
    secondaryImage: "",
    eventDate: "",
    youtube: "",
    spotify: "",
    instagram: "",
    soundCloud: "",
    organization: "",
  });
  const { showNotification } = useNotistack();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setArtistInfo({ ...artistInfo, [name]: value });
  };

  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = artistValidations(artistInfo);

    if (response.valid) {
      editArtist(artistInfo, id, setErrors);
    } else {
      setErrors(response);
    }
  };

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  useEffect(() => {
    getArtistById(id);
  }, []);

  useEffect(() => {
    setArtistInfo({
      ...artistInfo,

      name: artist?.name,
      lastName: artist?.lastName,
      cellphone: artist?.cellphone,
      description: artist?.description,
      artistName: artist?.artistName,
      shortDescription: artist?.shortDescription,
      primaryImage: artist?.primaryImage,
      secondaryImage: artist?.secondaryImage,
      eventDate: artist?.eventDate,
      youtube: artist?.youtube,
      instagram: artist?.instagram,
      spotify: artist?.spotify,
      soundCloud: artist?.soundCloud,
      organization: artist?.organization,
    });
  }, [artist]);

  const uploadImage = async (e) => {
    setIsLoading(true);
    const files = e.target.files[0];
    const data = new FormData();

    data.append("file", files);
    data.append("upload_preset", "artists_preset");
    data.append("api_key", "327992413885574");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dsdbscv2h/image/upload",

      {
        method: "POST",
        body: data,
      }
    );

    const imagen = await res.json();
    const fileURL = imagen.secure_url;

    if (e.target.name === "primaryImage") {
      setArtistInfo({
        ...artistInfo,
        primaryImage: fileURL,
      });
    } else {
      setArtistInfo({
        ...artistInfo,
        secondaryImage: fileURL,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(artistInfo);
  }, [artistInfo]);

  const navigate = useNavigate();
  return (
    <ArtistsActionsContainer>
      <FormContainertArtistsAction onSubmit={(e) => handleSubmit(e)} noValidate>
        <PastPageDataContainerAndTitle>
          <PastPageContainer>
            <BreadcumsContainer>
              <BreadcrumbsMui
                title="Edit artist"
                prev="Artists"
                path={"/admin-panel"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            <Title>Editar artista</Title>
          </TitleContainer>
        </PastPageDataContainerAndTitle>

        <FormSectionsContainer>
          <LeftSectionContainer>
            <TextField
              autoComplete="given-name"
              required
              id="firstName"
              label="Nombre"
              autoFocus
              name="name"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.name}
              value={artistInfo.name}
            />

            <TextField
              required
              fullWidth
              label="Nombre artistico"
              variant="standard"
              id="artistName"
              autoComplete="artistName"
              name="artistName"
              onChange={handleChange}
              error={errors[1]?.artistName}
              value={artistInfo.artistName}
            />
            <TextField
              required
              fullWidth
              label="Descripción"
              variant="standard"
              id="description"
              autoComplete="description"
              name="description"
              onChange={handleChange}
              error={errors[1]?.description}
              value={artistInfo.description}
            />

            <TextField
              required
              fullWidth
              label="Sound Cloud"
              variant="standard"
              id="soundcloud"
              autoComplete="soundcloud"
              name="soundCloud"
              onChange={handleChange}
              error={errors[1]?.soundCloud}
              value={artistInfo.soundCloud}
            />

            <TextField
              required
              fullWidth
              label="Youtube"
              variant="standard"
              id="youtube"
              autoComplete="youtube"
              name="youtube"
              onChange={handleChange}
              error={errors[1]?.youtube}
              value={artistInfo.youtube}
            />

            <TextField
              required
              fullWidth
              label="Instagram"
              variant="standard"
              id="instagram"
              autoComplete="instagram"
              name="instagram"
              onChange={handleChange}
              error={errors[1]?.instagram}
              value={artistInfo.instagram}
            />

            <TextField
              required
              fullWidth
              label="Spotify"
              variant="standard"
              id="spotify"
              autoComplete="spotify"
              name="spotify"
              onChange={handleChange}
              error={errors[1]?.spotify}
              value={artistInfo.spotify}
            />
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              required
              fullWidth
              label="Apellido"
              variant="standard"
              id="lastname"
              autoComplete="new-lastname"
              name="lastName"
              onChange={handleChange}
              error={errors[1]?.lastName}
              value={artistInfo.lastName}
            />
            <TextField
              variant="standard"
              required
              fullWidth
              id="cellphone"
              label="Número telefónico"
              autoComplete="cellphone"
              name="cellphone"
              onChange={handleChange}
              error={errors[1]?.cellphone}
              value={artistInfo.cellphone}
            />
            <TextField
              required
              fullWidth
              label="Organización"
              variant="standard"
              id="organization"
              autoComplete="organization"
              name="organization"
              onChange={handleChange}
              error={errors[1]?.organization}
              value={artistInfo.organization}
            />

            <TextField
              required
              fullWidth
              label="Descripción corta"
              variant="standard"
              id="short-description"
              autoComplete="short-description"
              name="shortDescription"
              onChange={handleChange}
              error={errors[1]?.shortDescription}
              value={artistInfo.shortDescription}
            />
            <TextField
              autoComplete="eventDate"
              required
              id="eventDate"
              label="Fecha de evento"
              autoFocus
              name="eventDate"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.eventDate}
              value={artistInfo.eventDate}
            />

            <InputFile
              autoComplete="primaryImage"
              required={true}
              id="primaryImage"
              autoFocus={true}
              name="primaryImage"
              variant="standard"
              fullWidth={true}
              onChange={uploadImage}
              error={errors[1]?.primaryImage}
              type="file"
              accept="image/*"
              label={"Imágen primaria"}
            />
            <InputFile
              autoComplete="secondaryImage"
              required={true}
              id="secondaryImage"
              autoFocus={true}
              name="secondaryImage"
              variant="standard"
              fullWidth={true}
              onChange={uploadImage}
              error={errors[1]?.primaryImage}
              type="file"
              accept="image/*"
              label={"Imágen secundaria"}
            />
          </RightSectionContainer>
        </FormSectionsContainer>
        <ActionButtonContainer>
          <ButtonsContainer>
            <Button
              variant="outlined"
              type="submit"
              disabled={isLoading ? true : false}
            >
              Editar
            </Button>
            <Button variant="outlined" onClick={() => navigate("/admin-panel")}>
              Cancelar
            </Button>
          </ButtonsContainer>
        </ActionButtonContainer>
      </FormContainertArtistsAction>
    </ArtistsActionsContainer>
  );
};

export default EditArtist;
