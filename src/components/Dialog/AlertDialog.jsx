import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import IconButton from "@mui/material/IconButton";
import { BtnCancelDialog, BtnSaveDialog, Title } from "./alertDialogStyles.js";
import { Button } from "@mui/material";

const contextMap = {
  users: {
    title: "Disable user",
    message: "Are you sure that you want to disable this user?",
    action: "DISABLE",
  },
  clients: {
    title: "Disable client",
    message: "Are you sure that you want to disable this client?",
    action: "DISABLE",
  },
  prospects: {
    title: "Disable prospect",
    message: "Are you sure that you want to disable this prospect?",
    action: "DISABLE",
  },
  calendar: {
    title: "Archive event",
    message: "Are you sure that you want to archive this event?",
    action: "ARCHIVE",
  },
};

export default function AlertDialog({
  handlerAction,
  page,
  objectId,
  open,
  context,
  onClose,
  object,
}) {
  const { title, message, action } = contextMap[context];

  return (
    <div>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
        sx={{}}
      >
        <div style={{ padding: "4rem 10rem" }}>
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

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "3rem 0",
              }}
            >
              <Title>{title}</Title>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <span style={{ fontSize: "16px", color: "rgb(56,71,100,0.55)" }}>
              {message}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3.7rem",
              marginBottom: "2.2rem",
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
