import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import { display } from "@mui/system";
import React from "react";

const ProspectHead = ({ handleSelectAllOperations, checked }) => {
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
              backgroundColor: "transparent",
              fontSize: "14px",
              paddingLeft: `${t.paddingLeft}`,
              paddingRight: `${t.paddingRight}`,
              whiteSpace: "nowrap",
            }}
            align="left"
          >
            {/* {t.name === "checkbox" ? (
              <Checkbox
                sx={{
                  color: "gray",
                  "&.Mui-checked": {
                    color: "#384764",
                  },
                }}
                checked={checked}
                onChange={handleSelectAllOperations}
              />
            ) : ( */}
            t.name
            {/* )} */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ProspectHead;
