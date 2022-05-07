import apiGateway from "../lib/axios-instance-local";

export const getAllArtist = (name) => {
  const params = { artista: name };

  return apiGateway.get("/last-fm/artist", { params });
};

export const getAllAlbum = (name) => {
  const params = { album: name };

  return apiGateway.get("/last-fm/album", { params });
};
