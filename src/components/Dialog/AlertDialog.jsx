import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import { BtnCancelDialog, BtnSaveDialog, Title } from "./alertDialogStyles.js";
import { Button } from "@mui/material";

const contextMap = (context, status) => {
  const map = {
    users: {
      title: "Disable user",
      message: "Are you sure that you want to disable this user?",
      action: "DISABLE",
    },
    artists: {
      title: status === "active" ? "Desactivar artista" : "Activar artista",
      message:
        status === "active"
          ? "¿Estas segúro que deseas desactivar este artista?"
          : "¿Estás seguro que deseas activar este artista?",
      action: status === "active" ? "DESACTIVAR" : "ACTIVAR",
    },
    events: {
      title: "Disable event",
      message: "Are you sure that you want to disable this event?",
      action: "DISABLE",
    },
  };
  return map[context];
};

export default function AlertDialog({
  status,
  handlerAction,
  page,
  objectId,
  open,
  context,
  onClose,
  object,
}) {
  const { title, message, action } = contextMap(context, status);

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <div
          style={{
            padding: "5rem 5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 30,
                top: 25,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              X
            </IconButton>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: "1.5rem 0rem",
            }}
          >
            <Title>{title}</Title>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                textAlign: "center",
                fontSize: "16px",
                color: "rgb(56,71,100,0.55)",
              }}
            >
              {message}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3.7rem",
              marginBottom: "2.2rem",
              gap: "1rem",
            }}
          >
            <Button onClick={() => onClose()}>CANCEL</Button>
            <Button onClick={() => handlerAction(objectId)}>{action}</Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
