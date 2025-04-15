import { SearcherContainer } from "./searcherStyles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import useAuth from "../../containers/Login/useAuth";
const Searcher = ({
  context,
  list,
  setList,
  searchToGet,
  setSearchToGet,
  getFunction,
  resetFunction,
}) => {
  const [listToFilter, setListToFilter] = useState([]);
  const [search, setSearch] = useState("");
  const { id } = useAuth();

  useEffect(() => {
    if (context === "calendar") {
      if (searchToGet === "undefined") {
        setSearch("");
      } else {
        setSearch(searchToGet);
      }
    }
  }, [searchToGet]);

  const handlerSearchChange = (e) => {
    if (context === "users") {
      const { value } = e.target;
      setSearch(value);
      const result = listToFilter.filter((e) =>
        e.email.toLowerCase().startsWith(value)
      );
      setList(result);
    }
    if (context === "artists") {
      const { value } = e.target;
      setSearch(value);
      const result = listToFilter.filter((e) =>
        e.artistName.toLowerCase().startsWith(value)
      );
      setList(result);
    }
  };

  const handlerRefresh = () => {
    if (context === "clients") {
      getFunction(null, 1, undefined);
      setSearch("");
      setSearchToGet("");
    }

    if (context === "prospects") {
      getFunction(id, 1, undefined);
      setSearch("");
      setSearchToGet("");
    }
    if (context === "calendar") {
      setSearchToGet("undefined");
      resetFunction();
    }
  };

  const handlerSearch = (e) => {
    e.preventDefault();
    if (context === "clients") {
      getFunction(null, 1, searchToGet);
    }

    if (context === "prospects") {
      getFunction(id, 1, searchToGet);
    }
    if (context === "calendar") {
      getFunction();
    }
  };

  const handlerSearchButton = (e) => {
    if (context === "clients") {
      getFunction(null, 1, searchToGet);
    }

    if (context === "prospects") {
      getFunction(id, 1, searchToGet);
    }

    if (context === "calendar") {
      getFunction();
    }
  };

  useEffect(() => {
    if (context === "users" || context === "artists") {
      if (!listToFilter.length) {
        setListToFilter(list);
      }
    }
  }, [list]);

  return (
    <SearcherContainer onSubmit={(e) => handlerSearch(e)}>
      <TextField
        onChange={(e) => handlerSearchChange(e)}
        value={search}
        id="standard-basic"
        label={
          context === "artists"
            ? "Buscar artista"
            : context === "users"
            ? "Buscar usuario"
            : context === "events"
            ? "Buscar evento"
            : "Search event"
        }
        variant={context !== "calendar" ? "standard" : "outlined"}
        sx={{
          width: context !== "calendar" ? null : "80%",
          "& .MuiInput-underline:before": {
            borderBottomColor: `black`, // Cambia el color del borde inferior aquí
          },
          "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            borderBottomColor: `black`, // Cambia el color del borde inferior en el hover aquí
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
          },
          input: {
            color: `black`,
          },
        }}
        InputLabelProps={{
          style: {
            color: `gray`,
          },
        }}
      />

      <RefreshIcon onClick={handlerRefresh}></RefreshIcon>
    </SearcherContainer>
  );
};
export default Searcher;
