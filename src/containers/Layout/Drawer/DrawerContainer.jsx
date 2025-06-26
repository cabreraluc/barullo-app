import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaSoundcloud } from "react-icons/fa";

import LogoVP from "../../../assets/images/logoVerdePurple.png";
import useAuth from "../../VisibleToClient/Login/useAuth";

const navigationItems = [
  { title: "LOGIN", link: "/login" },
  { title: "HOME", link: "/" },
  // { title: "NEXT EVENTS", link: "a" },
  // { title: "MERCH", link: "a" },
  // { title: "BARULLO AGENCY", link: "a" },
  // { title: "SE PARTE DE BARULLO", link: "a" },
];

export default function DrawerContainer({ children, setOpenSlider }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const userLocalStorage = useAuth();
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = (shouldOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenSlider(shouldOpen);
    setOpen(shouldOpen);
  };

  const filteredNavigationItems = navigationItems.filter((item) => {
    if (pathname === "/login" || userLocalStorage?.role) {
      return item.title !== "LOGIN";
    }
    return true;
  });

  const renderListItem = (title, link) => (
    <ListItem
      key={title}
      disablePadding
      sx={{
        display: "flex",
        justifyContent: "center",
        fontFamily: "Darker Grotesque, sans-serif",
      }}
    >
      <ListItemButton onClick={() => navigate(link)}>
        <ListItemText
          primary={title}
          sx={{ textAlign: "start", color: "white" }}
        />
      </ListItemButton>
    </ListItem>
  );

  const renderSocialLinks = () => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "20vh",
      }}
    >
      <a
        href="https://on.soundcloud.com/uF6v8qNpeoSeDadV7"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "gray" }}
      >
        <FaSoundcloud size="20" />
      </a>
      <a
        href="https://www.instagram.com/barullo.rave/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "gray" }}
      >
        <InstagramIcon fontSize="medium" />
      </a>
      <a
        href="https://www.youtube.com/@Barullo_rave"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "gray" }}
      >
        <YouTubeIcon fontSize="medium" />
      </a>
    </Box>
  );

  const renderLogoAndLocation = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        mt: 4,
      }}
    >
      <img src={LogoVP} alt="Logo" style={{ width: "50%", height: "3rem" }} />
      <h4 style={{ color: "white", fontWeight: 200 }}>
        Buenos Aires, Argentina
      </h4>
      <h4 style={{ color: "white", fontWeight: 200 }}>Zona sur</h4>
    </Box>
  );

  return (
    <>
      {React.cloneElement(children, { onClick: handleToggleDrawer(true) })}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleToggleDrawer(false)}
        PaperProps={{
          sx: { overflow: "hidden" }, // Para Material UI
        }}
      >
        <Box
          sx={{ width: 300, backgroundColor: "black", height: "100%" }}
          role="presentation"
          onClick={handleToggleDrawer(false)}
          onKeyDown={handleToggleDrawer(false)}
        >
          <List>
            {filteredNavigationItems.map((item) =>
              renderListItem(item.title, item.link)
            )}
          </List>

          <Divider sx={{ borderColor: "gray" }} />

          <List sx={{ backgroundColor: "black", height: "100%" }}>
            {userLocalStorage?.role === "Admin" && (
              <>
                {renderListItem("PANEL ADMIN", "/admin-panel")}
                {renderListItem("QR SCANNER", "/scanner")}
              </>
            )}
            {renderSocialLinks()}
            {renderLogoAndLocation()}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
