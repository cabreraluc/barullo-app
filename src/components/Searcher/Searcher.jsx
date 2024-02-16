import { SearcherContainer } from "./searcherStyles";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";

const Searcher = ({ context, list, setList }) => {
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
  };

  const handlerSearch = () => {
    if (context === "users") {
    }
  };

  useEffect(() => {
    if (context === "users") {
      if (!listToFilter.length) {
        setListToFilter(list);
      }
    }
  }, [list]);

  useEffect(() => {
    console.log(listToFilter);
  }, [listToFilter]);

  return (
    <SearcherContainer>
      <SearchIcon sx={{ color: "white", marginTop: 2, marginRight: 1 }} />
      <TextField
        onChange={(e) => handlerSearchChange(e)}
        value={search}
        id="standard-basic"
        label="Search user..."
        variant="standard"
        sx={{
          input: {
            color: `white`,
          },
        }}
        InputLabelProps={{
          style: {
            color: `gray`,
          },
        }}
      />
    </SearcherContainer>
  );
};
export default Searcher;
