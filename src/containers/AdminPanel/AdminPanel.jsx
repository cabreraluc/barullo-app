import {
  PanelContainer,
  BoxContainer,
  Section,
  ButtonsContainer,
  Button,
} from "./adminPanelStyles";
import { useState, useEffect } from "react";
import ArtistsPanel from "../ArtistsPanel/ArtistsPanel";
import UsersPanel from "../UsersPanel/UsersPanel";
import EventsPanel from "../EventsPanel/EventsPanel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AdminPanel = () => {
  const [selectedSection, setSelectedSection] = useState("eventos");
  const handleSelectSection = (s) => {
    setSelectedSection(s);
  };

  const sections = ["eventos", "artistas", "usuarios"];
  return (
    <PanelContainer>
      <Section>
        <FormControl
          sx={{
            width: "100%",
            height: "15vh",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Select
            sx={{
              width: "10rem",
              height: "1.6rem",
            }}
            MenuProps={{ disableScrollLock: true }}
            onChange={(e) => handleSelectSection(e.target.value)}
            value={selectedSection}
          >
            {sections.map((section) => {
              return <MenuItem value={section}>{section}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Section>
      {selectedSection === "eventos" ? (
        <EventsPanel></EventsPanel>
      ) : selectedSection === "artistas" ? (
        <ArtistsPanel></ArtistsPanel>
      ) : (
        <UsersPanel></UsersPanel>
      )}
    </PanelContainer>
  );
};

export default AdminPanel;
