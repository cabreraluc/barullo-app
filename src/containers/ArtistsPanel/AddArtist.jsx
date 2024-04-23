import * as React from "react";
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
import { BreadcumsContainer } from "../../components/Global/GlobalStyles";
import BreadcrumbsMui from "../../components/Breadcrumbs/Breadcrumbs";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useArtists from "./useArtists";
import { artistValidations } from "./artistValidations";
import useNotistack from "../../components/Notistack/useNotistack";
import Button from "@mui/material/Button";

const AddArtist = () => {
  const { addArtist, isLoading, setIsLoading } = useArtists();
  const [artistInfo, setArtistInfo] = useState({
    name: "",
    lastName: "",
    cellphone: "",
    description: "",
    artistName: "",
    secondaryArtistName: "",
    shortDescription: "",
    primaryImage: null,
    secondaryImage: null,
    soundCloud: "",
    instagram: "",
    youtube: "",
    spotify: "",
    soundCloudSecondary: "",
    instagramSecondary: "",
    youtubeSecondary: "",
    spotifySecondary: "",
  });

  const { showNotification } = useNotistack();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setArtistInfo({ ...artistInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", artistInfo.primaryImage);

    console.log(formData);

    const response = artistValidations(artistInfo, "addArtist");

    if (response.valid) {
      addArtist(artistInfo, setErrors);
    } else {
      setErrors(response);
    }
  };
  const [errors, setErrors] = useState({});
  const handleSetErrors = (errors) => {
    errors[0]?.forEach((error) => {
      showNotification(error, "error");
    });
  };

  useEffect(() => {
    handleSetErrors(errors);
  }, [errors]);

  const uploadImage = async (e) => {
    console.log(e);
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

    console.log(res);
    const imagen = await res.json();
    const fileURL = imagen.secure_url;
    console.log(fileURL);

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
                title="Add artist"
                prev="Artists"
                path={"/admin-panel"}
              ></BreadcrumbsMui>
            </BreadcumsContainer>
          </PastPageContainer>
          <TitleContainer>
            <Title>Add artist</Title>
          </TitleContainer>
        </PastPageDataContainerAndTitle>

        <FormSectionsContainer>
          <LeftSectionContainer>
            <TextField
              autoComplete="given-name"
              required
              id="firstName"
              label="Name"
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
              label="Artist name"
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
              label="Second artist name "
              variant="standard"
              id="artistNameSecondary"
              autoComplete="artistNameSecondary"
              name="artistNameSecondary"
              onChange={handleChange}
              error={errors[1]?.artistNameSecondary}
              value={artistInfo.artistNameSecondary}
            />

            <TextField
              required
              fullWidth
              label="Description"
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

            <TextField
              autoComplete="primaryImage"
              required
              id="primaryImage"
              label="Primary image"
              autoFocus
              name="primaryImage"
              variant="standard"
              fullWidth
              onChange={uploadImage}
              error={errors[1]?.primaryImage}
              type="file"
              accept="image/*"
            />
          </LeftSectionContainer>
          <RightSectionContainer>
            <TextField
              required
              fullWidth
              label="Last name"
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
              label="Cellphone"
              autoComplete="cellphone"
              name="cellphone"
              onChange={handleChange}
              error={errors[1]?.cellphone}
              value={artistInfo.cellphone}
            />

            <TextField
              required
              fullWidth
              label="Short Description"
              variant="standard"
              id="short-description"
              autoComplete="short-description"
              name="shortDescription"
              onChange={handleChange}
              error={errors[1]?.shortDescription}
              value={artistInfo.shortDescription}
            />

            <TextField
              required
              fullWidth
              label="Second Sound Cloud"
              variant="standard"
              id="soundCloudSecondary"
              autoComplete="soundCloudSecondary"
              name="soundCloudSecondary"
              onChange={handleChange}
              error={errors[1]?.soundCloudSecondary}
              value={artistInfo.soundCloudSecondary}
            />

            <TextField
              required
              fullWidth
              label="Second Youtube"
              variant="standard"
              id="youtubeSecondary"
              autoComplete="youtubeSecondary"
              name="youtubeSecondary"
              onChange={handleChange}
              error={errors[1]?.youtubeSecondary}
              value={artistInfo.youtubeSecondary}
            />

            <TextField
              required
              fullWidth
              label="Second Instagram"
              variant="standard"
              id="instagramSecondary"
              autoComplete="instagramSecondary"
              name="instagramSecondary"
              onChange={handleChange}
              error={errors[1]?.instagramSecondary}
              value={artistInfo.instagramSecondary}
            />

            <TextField
              required
              fullWidth
              label="Second spotify"
              variant="standard"
              id="spotifySecondary"
              autoComplete="spotifySecondary"
              name="spotifySecondary"
              onChange={handleChange}
              error={errors[1]?.spotifySecondary}
              value={artistInfo.spotifySecondary}
            />
            <TextField
              autoComplete="secondary-image"
              required
              id="secondaryImage"
              label="Secondary image"
              autoFocus
              name="secondaryImage"
              variant="standard"
              fullWidth
              onChange={uploadImage}
              error={errors[1]?.secondaryImage}
              type="file"
              accept="image/*"
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
              Create
            </Button>
            <Button variant="outlined" onClick={() => navigate("/admin-panel")}>
              Cancel
            </Button>
          </ButtonsContainer>
        </ActionButtonContainer>
      </FormContainertArtistsAction>
    </ArtistsActionsContainer>
  );
};

export default AddArtist;
