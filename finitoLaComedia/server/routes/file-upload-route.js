"use strict";

const express = require("express");
const { upload } = require("../middleware/filehelper");
const {
  singleFileUpload,
  multipleFileUpload,
  getAllSingleFiles,
  getMultipleSingleFiles,
} = require("../controllers/fileuploaderController");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
router.post("/multipleFiles", upload.array("files"), multipleFileUpload);
router.get("/getSingleFiles", getAllSingleFiles);
router.get("/getMultipleFiles", getMultipleSingleFiles);

module.exports = {
  routes: router,
};

// http://localhost:5000/api/getSingleFiles/