const express = require("express");
const fileUpload = require("express-fileupload");
const nanoid = require("nanoid");
const mkdirp = require("mkdirp");

const router = express.Router();
const uploadDir = "./upload";

mkdirp.sync(uploadDir);

router.post("/upload", fileUpload(), (req, res) => {
  const file = req.files.files;
  const ext = file.name.split(".").pop() || "jpg";
  const name = `${nanoid()}.${ext}`;

  const path = `${uploadDir}/${name}`;

  file.mv(path, function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(name);
  });
});

module.exports = router;
