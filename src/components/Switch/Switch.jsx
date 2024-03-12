import * as React from "react";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { SwitchContainer } from "./switchStyles";
import { useState } from "react";
import { useEffect } from "react";

export default function FormControlLabelPosition({
  setState,
  state,
  leftText,
  rightText,
}) {
  return (
    <SwitchContainer>
      <FormControl component="fieldset">
        <Stack direction="column" spacing={1} alignItems="center">
          <Typography>{leftText}</Typography>
          <Switch checked={state} onChange={() => setState(!state)} />
        </Stack>
      </FormControl>
    </SwitchContainer>
  );
}
