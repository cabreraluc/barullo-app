import { useCallback } from "react";
import { useSnackbar } from "notistack";

const useNotistack = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = useCallback(
    (message, variant = "success", options = {}) => {
      enqueueSnackbar(message, {
        variant,
        ...options,
      });
    },
    [enqueueSnackbar]
  );

  return { showNotification };
};

export default useNotistack;
