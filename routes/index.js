const express = require("express");
const router = express.Router();

const buildTree = require("../services/parser");

router.get("/", (req, res) => {

    const tree = buildTree();

    res.render("index", { tree });

});

module.exports = router;