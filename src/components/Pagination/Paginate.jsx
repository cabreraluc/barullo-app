import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useAuth from "../../containers/Login/useAuth";

export default function Paginate({
  page,
  totalPages,
  handlerGetFunction,
  context,
  search,
}) {
  const user = useAuth();
  const handlerChange = (e, value) => {
    if (context === "clients") {
      handlerGetFunction(null, value, search);
    }
    if (context === "prospects") {
      handlerGetFunction(user.id, value, search);
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
