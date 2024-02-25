import { SearcherContainer } from "./searcherStyles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";

const Searcher = ({
  context,
  list,
  setList,
  searchToGet,
  setSearchToGet,
  getFunction,
}) => {
  const [listToFilter, setListToFilter] = useState([]);
  const [search, setSearch] = useState("");

  const handlerSearchChange = (e) => {
    if (context === "users") {
      const { value } = e.target;
      setSearch(value);
      const result = listToFilter.filter((e) =>
        e.name.toLowerCase().startsWith(value)
      );
      setList(result);
    }
    if (context === "clients") {
      const { value } = e.target;
      setSearch(value);
      setSearchToGet(value);
    }
  };

  const handlerRefresh = () => {
    if (context === "clients") {
      getFunction(null, 1, undefined);
      setSearch("");
      setSearchToGet("");
    }
  };

  const handlerSearch = (e) => {
    e.preventDefault();
    if (context === "clients") {
      getFunction(null, 1, searchToGet);
    }
  };

  useEffect(() => {
    if (context === "users") {
      if (!listToFilter.length) {
        setListToFilter(list);
      }
    }
  }, [list]);

  return (
    <SearcherContainer onSubmit={(e) => handlerSearch(e)}>
      {context === "users" ? null : (
        <SearchIcon
          sx={{
            color: "black",
            marginTop: 2,
            marginRight: 1,
            cursor: "pointer",
          }}
          type="submit"
        />
      )}
      <TextField
        onChange={(e) => handlerSearchChange(e)}
        value={search}
        id="standard-basic"
        label="Search user..."
        variant="standard"
        sx={{
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

      {context === "users" ? null : (
        <RefreshIcon
          sx={{
            color: "black",
            marginTop: 2,
            marginLeft: 1,
            cursor: "pointer",
          }}
          onClick={handlerRefresh}
        ></RefreshIcon>
      )}
    </SearcherContainer>
  );
};
export default Searcher;
