import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import {
  Title,
  DialogContentWrapper,
  CloseButtonWrapper,
  MessageWrapper,
  TextMessage,
  ActionsWrapper,
  TitleWrapper,
} from "./alertDialogStyles.js";
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
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xl"
    >
      <DialogContentWrapper>
        <CloseButtonWrapper>
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
        </CloseButtonWrapper>

        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>

        <MessageWrapper>
          <TextMessage>{message}</TextMessage>
        </MessageWrapper>

        <ActionsWrapper>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={() => handlerAction(objectId)}>{action}</Button>
        </ActionsWrapper>
      </DialogContentWrapper>
    </Dialog>
  );
}
