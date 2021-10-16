const axios = require("axios");

const api_key = process.env.REACT_APP_LAST_FM_API_KEY;
const base_url = process.env.BASE_URL;

const api = axios.create({
  baseURL: base_url,
  params: {
    api_key,
  },
});

module.exports = api;
