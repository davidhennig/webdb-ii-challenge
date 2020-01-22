const express = require("express");

const db = require("./dbConfig.js");

const router = require("./router.js");

const server = express();

server.use(express.json());

server.use("/api/cars", router);

module.exports = server;
