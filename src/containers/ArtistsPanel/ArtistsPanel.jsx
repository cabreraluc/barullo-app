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

const ArtistsPanel = () => {
  const navigate = useNavigate();
  const { allArtists, getArtists, disableArtist, isLoading, setAllArtists } =
    useArtists();

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
      <Searcher list={allArtists} setList={setAllArtists} context={"artist"} />
      <ArtistsList>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ArtistsTable
            allArtists={allArtists}
            disableArtist={disableArtist}
            isLoading={isLoading}
          />
        )}
      </ArtistsList>
    </ArtistsContainer>
  );
};

export default ArtistsPanel;
