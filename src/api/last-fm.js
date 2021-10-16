import apiGateway from "../lib/axios-instance-local";

export const getAllArtist = (name) => {
  const params = { artista: name };

  console.log("api, getAllArtist", name);
  return apiGateway.get("/last-fm/artist", { params });
};

export const getAllAlbum = (name) => {
  const params = { album: name };

  console.log("api, getAllAlbum");
  return apiGateway.get("/last-fm/album", { params });
};
