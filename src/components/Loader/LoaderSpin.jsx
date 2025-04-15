import { CircularProgress } from "@mui/material";

const LoaderSpin = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};

export default LoaderSpin;
