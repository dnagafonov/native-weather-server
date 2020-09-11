const axios = require("axios");
const settings = require("./settings.json");

const weatherAPI = axios.create({
  baseURL: "https://api.weather.yandex.ru/v2",
  headers: { "X-Yandex-API-Key": settings.yandexApiKey },
});

module.exports = { weatherAPI };