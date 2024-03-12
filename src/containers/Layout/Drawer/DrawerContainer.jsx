import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function DrawerContainer({ children }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
        backgroundColor: "black",
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "HOME",
          "NEXT EVENTS",
          "MERCH",
          "BARULLO AGENCY",
          "SE PARTE DE BARULLO",
        ].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Darker Grotesque, sans-serif",
            }}
          >
            <ListItemButton>
              <ListItemText
                primary={text}
                sx={{
                  textAlign: "start",
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ borderColor: "gray" }} />
      <List>
        {["¿QUIENES SOMOS?", "¿QUE HACEMOS EN ESTE MUNDO?"].map(
          (text, index) => (
            <ListItem
              key={text}
              disablePadding
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Darker Grotesque, sans-serif",
              }}
            >
              <ListItemButton>
                <ListItemText
                  primary={text}
                  sx={{
                    textAlign: "start",
                    color: "white",
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        {React.cloneElement(children, { onClick: toggleDrawer("left", true) })}
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

{
  /* <List>
{["All mail", "Trash", "Spam"].map((text, index) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      {/* <ListItemIcon></ListItemIcon> */
}
//       <ListItemText primary={text} sx={{ color: "black" }} />
//     </ListItemButton>
//   </ListItem>
// ))}
// </List>
