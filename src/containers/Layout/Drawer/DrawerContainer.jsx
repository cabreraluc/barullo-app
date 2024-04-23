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
import LogoVP from "../../../logoVerdePurple.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../Login/useAuth";
import useUsers from "../../UsersPanel/useUsers";
export default function DrawerContainer({ children, setOpenSlider }) {
  const { pathname } = useLocation();
  const { getUserById, user } = useUsers();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  let listArray = [
    { title: "LOGIN", link: "/login" },
    { title: "HOME", link: "/" },
    // { title: "NEXT EVENTS", link: "a" },
    // { title: "MERCH", link: "a" },
    // { title: "BARULLO AGENCY", link: "a" },
    // { title: "SE PARTE DE BARULLO", link: "a" },
  ];
  const navigate = useNavigate();

  const userLocalStorage = useAuth();

  const toggleDrawer = (anchor, open) => (event) => {
    if (open) {
      setOpenSlider(true);
    } else {
      setOpenSlider(false);
    }
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // useEffect(() => {
  //   getUserById(userLocalStorage?.id);
  // }, []);

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
        {listArray
          .filter((e) => {
            if (pathname === "/login" || userLocalStorage?.role?.length) {
              return e.title !== "LOGIN";
            } else {
              return e;
            }
          })
          .map((element, index) => (
            <ListItem
              key={element.title}
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
                  primary={element.title}
                  sx={{
                    textAlign: "start",
                    color: "white",
                  }}
                  onClick={() => navigate(element.link)}
                />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider sx={{ borderColor: "gray" }} />
      <List
        style={{
          height: "100%",
          backgroundColor: "black",
        }}
      >
        {/* {["¿QUIENES SOMOS?", "¿QUE HACEMOS EN ESTE MUNDO?"].map(
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
        )} */}

        {userLocalStorage?.role === "Admin" ? (
          <ListItem
            key={"1"}
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontFamily: "Darker Grotesque, sans-serif",
            }}
          >
            <ListItemButton onClick={() => navigate("/admin-panel")}>
              <ListItemText
                primary={"PANEL ADMIN"}
                sx={{
                  textAlign: "start",
                  color: "white",
                }}
              />
            </ListItemButton>
            <ListItemButton onClick={() => navigate("/scanner")}>
              <ListItemText
                primary={"QR SCANNER"}
                sx={{
                  textAlign: "start",
                  color: "white",
                }}
              />
            </ListItemButton>
          </ListItem>
        ) : null}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10rem",
          }}
        >
          <img src={LogoVP} style={{ width: "50%", height: "3rem" }} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h4 style={{ color: "white", fontWeight: "200" }}>
            Buenos Aires, Argentina
          </h4>
          <h4 style={{ color: "white", fontWeight: "200" }}>Zona sur</h4>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        {React.cloneElement(children, {
          onClick: toggleDrawer("left", true),
        })}
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
