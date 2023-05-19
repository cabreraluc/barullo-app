import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";

export default function BasicPagination({ page, setPage, totalPages }) {
  const { pagina } = useParams();
  const handleChange = (event, value) => {
    window.location.href = `/${value}`;
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page ? page : 1}
        onChange={handleChange}
      />
    </Stack>
  );
}
