import ImageEvents from "../../event1.webp";
import ImageArtist from "../../artists.jpg";

const NextEvents = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          padding: "4rem 1rem",
          backgroundColor: "rgb(255,255,255,0.15)",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80vw",
          height: "80%",
          flexDirection: "column",
          color: "black",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10%",
          }}
        >
          Next events
        </h1>
        <img src={ImageArtist} alt="" style={{ height: "35%" }} />
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20%",
            textAlign: "center",
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum odit
          molestiae rerum aliquam reprehenderit ea dolores a dolor sed inventore
          ratione laboriosam recusandae, fugit at, est vitae facilis! Incidunt,
          vel.
        </h2>

        <img src={ImageEvents} alt="" style={{ height: "35%" }} />
      </div>
    </div>
  );
};

export default NextEvents;
