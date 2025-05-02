import { PanelContainer, Section } from "./adminPanelStyles";
import { useState } from "react";
import ArtistsPanel from "../ArtistsPanel/ArtistsPanel";
import UsersPanel from "../UsersPanel/UsersPanel";
import EventsPanel from "../EventsPanel/EventsPanel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { sectionsAdminPanel } from "../../../utils/constants";

const AdminPanel = () => {
  const [selectedSection, setSelectedSection] = useState("Eventos");
  const handleSelectSection = (s) => {
    setSelectedSection(s);
  };

  return (
    <PanelContainer>
      <Section>
        <FormControl
          sx={{
            width: "100%",
            height: "100%",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Select
            sx={{
              width: "10rem",
              height: "1.6rem",
              fontFamily: "Oswald",
            }}
            onChange={(e) => handleSelectSection(e.target.value)}
            value={selectedSection}
          >
            {sectionsAdminPanel.map((section) => {
              return (
                <MenuItem sx={{ fontFamily: "Oswald" }} value={section}>
                  {section}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Section>
      {selectedSection === "Eventos" ? (
        <EventsPanel></EventsPanel>
      ) : selectedSection === "Artistas" ? (
        <ArtistsPanel></ArtistsPanel>
      ) : (
        <UsersPanel></UsersPanel>
      )}
    </PanelContainer>
  );
};

export default AdminPanel;
