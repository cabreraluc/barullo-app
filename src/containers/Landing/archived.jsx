// {allArtists.length ? (
//   allArtists.map((e, index) => {
//     const color =
//       e.status !== "active"
//         ? "black-white"
//         : Number.isInteger((index + 1) / 2)
//         ? "violet"
//         : "green";
//     return (
//       <SwiperSlide key={e._id}>
//         <Artists
//           setTurnOffLogo={setTurnOffLogo}
//           titles={[
//             `${e.artistName}${
//               e.secondaryArtistName
//                 ? " & " + e.secondaryArtistName
//                 : ""
//             }`,
//           ]}
//           body={e.shortDescription}
//           description={e.description}
//           image={e.primaryImage}
//           soundCloud={e.soundCloud}
//           instagram={e.instagram}
//           artistName={e.artistName}
//           secondaryArtistName={e.secondaryArtistName}
//           spotify={e.spotify}
//           youtube={e.youtube}
//           soundCloudSecondary={e.soundCloudSecondary}
//           instagramSecondary={e.instagramSecondary}
//           spotifySecondary={e.spotifySecondary}
//           youtubeSecondary={e.youtubeSecondary}
//           secondaryImage={e.secondaryImage}
//           name={e.artistName}
//           color={color}
//           open={open}
//           setOpen={setOpen}
//         />
//       </SwiperSlide>
//     );
//   })
// ) : (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       color: "white",
//       fontSize: "2rem",
//     }}
//   >
//     CARGANDO
//   </div>
// )}
