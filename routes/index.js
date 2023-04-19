const routes = require("express").Router();

const controller = require("../controller");
Router.get("/", controller.myfunction);

module.exports = routes;

// const routes = require("express").Router();

// const { Router } = require("express");
// const controller = require("../controller");
// Router.get("/", controller.myfunction);

// module.exports = routes;