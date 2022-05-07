require("dotenv").config();
const axios = require("axios");

const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.LAST_FM_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

module.exports = api;
