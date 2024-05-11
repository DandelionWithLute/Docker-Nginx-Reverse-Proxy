const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World from Server 1");
});

const port = 3000;
app.listen(port, () =>
  console.log(`App is listening on http://localhost:${port}`)
);
