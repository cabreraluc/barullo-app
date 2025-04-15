import {
  ArtistsContainer,
  ArtistsList,
  PanelRight,
  ButtonContainer,
} from "./artistsStyles";
import { useNavigate } from "react-router-dom";
import useArtists from "./useArtists";
import { useEffect } from "react";
import ArtistsTable from "../../components/Artists/ArtistsTable";
import Searcher from "../../components/Searcher/Searcher";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoaderSpin from "../../components/Loader/LoaderSpin";

const ArtistsPanel = () => {
  const navigate = useNavigate();
  const {
    allArtists,
    getArtists,
    disableOrActiveArtist,
    isLoading,
    setAllArtists,
  } = useArtists();

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <ArtistsContainer>
      <ButtonContainer>
        <AddCircleIcon
          onClick={() => navigate("/add-artist")}
          fontSize="large"
        ></AddCircleIcon>
      </ButtonContainer>
      <Searcher list={allArtists} setList={setAllArtists} context={"artists"} />
      {isLoading ? (
        <LoaderSpin />
      ) : (
        <ArtistsList>
          <ArtistsTable
            allArtists={allArtists}
            disableOrActiveArtist={disableOrActiveArtist}
            isLoading={isLoading}
          />
        </ArtistsList>
      )}
    </ArtistsContainer>
  );
};

export default ArtistsPanel;
