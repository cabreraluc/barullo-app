import { TableCell, TableHead, TableRow } from "@mui/material";

import React from "react";

const ArtistsHead = () => {
  const headTableTitle = ["Name", "Last name", "Rol"];
  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headTableTitle.map((t) => (
          <TableCell
            key={t}
            sx={{
              fontWeight: "500",

              width: `${t.width}`,
              fontSize: "14px",
              paddingLeft: `${t.paddingLeft}`,
              paddingRight: `${t.paddingRight}`,
              whiteSpace: "nowrap",
            }}
            align="left"
          ></TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ArtistsHead;
