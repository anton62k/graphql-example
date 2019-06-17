const express = require("express");
const cors = require("cors");
const upload = require("./upload");

const app = express();
app.use(cors());
app.use("/images/", express.static("upload"));
app.use(upload);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
