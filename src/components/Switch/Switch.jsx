import * as React from "react";
import Switch from "@mui/material/Switch";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { SwitchContainer } from "./switchStyles";

export default function FormControlLabelPosition({
  setState,
  state,
  leftText,
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
