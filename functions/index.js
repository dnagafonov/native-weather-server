const app = require(`express`)();
const functions = require("firebase-functions");
const cors = require("cors");
const { weatherAPI } = require("./axios");
var bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

app.get("/forecast", async (req, res) => {
  try {
    const url = `forecast?lat=${req.query.lat}&lon=${req.query.lon}&limit=2`;
    const weather = await weatherAPI.get(url).then((res) => res.data);
    res.json(weather);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports.app = functions.https.onRequest(app);
