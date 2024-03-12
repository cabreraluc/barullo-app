import ImageArtist from "../../artists.jpg";

const Artists = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={ImageArtist}
        alt=""
        style={{
          width: "clamp(20rem, 60vw, 60vw)",
        }}
      />
    </div>
  );
};

export default Artists;
