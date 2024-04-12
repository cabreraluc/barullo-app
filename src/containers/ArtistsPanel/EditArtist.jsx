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
import {
  ActionButton,
  CancelActionButton,
  BreadcumsContainer,
} from "../../components/Global/GlobalStyles";
import BreadcrumbsMui from "../../components/Breadcrumbs/Breadcrumbs";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useArtists from "./useArtists";
import { artistValidations } from "./artistValidations";
import useNotistack from "../../components/Notistack/useNotistack";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const EditArtist = () => {
  const roles = ["Admin", "Setter", "Closer"];
  const { id } = useParams();
  const { editArtist, getArtistById, artist, isLoading } = useArtists();
  const [artistInfo, setArtistInfo] = useState({
    name: "",
    lastName: "",
    cellphone: "",
    description: "",
    artistName: "",
    shortDescription: "",
    primaryImage: "",
    secondaryImage: "",
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
    });
  }, [artist]);

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
            <Title>Edit artist</Title>
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
              autoComplete="primaryImage"
              required
              id="primaryImage"
              label="Primary image"
              autoFocus
              name="primaryImage"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.primaryImage}
              value={artistInfo.primaryImage}
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
              autoComplete="secondary-image"
              required
              id="secondaryImage"
              label="Secondary image"
              autoFocus
              name="secondaryImage"
              variant="standard"
              fullWidth
              onChange={handleChange}
              error={errors[1]?.secondaryImage}
              value={artistInfo.secondaryImage}
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
              edit
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

export default EditArtist;
