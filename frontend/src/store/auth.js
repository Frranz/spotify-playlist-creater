import config from "../../app.config";

const SPOTIFY_ACCESS_TOKEN = 'spotifyAccessToken';
const SPOTIFY_TOKEN_EXPIRY = 'spotifyTokenExpiry';

export default {
  state: {
    spotifyAccessToken: localStorage.getItem(SPOTIFY_ACCESS_TOKEN),
    spotifyTokenExpiration: localStorage.getItem(SPOTIFY_TOKEN_EXPIRY),
  },
  mutations: {
    setSpotifyAccessToken(state, auth) {
      if (config.spotifyApi.isSaveTokensEnabled) {
        localStorage.setItem(SPOTIFY_ACCESS_TOKEN, auth.accessToken);
        localStorage.setItem(SPOTIFY_TOKEN_EXPIRY, auth.expirationDate);
      }

      state.spotifyAccessToken = auth.accessToken;
      state.spotifyTokenExpiration = auth.expirationDate;
    },
    invalidateSpotifyAccessToken(state) {
      localStorage.removeItem(SPOTIFY_ACCESS_TOKEN);
      localStorage.removeItem(SPOTIFY_TOKEN_EXPIRY);

      state.spotifyAccessToken = null;
      state.spotifyTokenExpiration = null;
    }
  },
  actions: {
  },
  getters: {
    spotifyAccessToken: state => state.spotifyAccessToken,
    spotifyTokenExpiry: state => state.spotifyTokenExpiration,
    isAuthenticated: state => state.spotifyAccessToken != null && state.spotifyTokenExpiration > new Date().getTime(),
  }
}
