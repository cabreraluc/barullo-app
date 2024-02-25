import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Paginate({
  page,
  totalPages,
  handlerGetFunction,
  context,
}) {
  const handlerChange = (e, value) => {
    if (context === "clients") {
      handlerGetFunction(null, value);
    }
  };
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page ? page : 1}
        onChange={handlerChange}
      />
    </Stack>
  );
}
