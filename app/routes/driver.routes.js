//import router library and controller handler
const { Router } = require("express");
const controller = require("../controllers/driver.controller.js");
const { controllerHandler: c } = require("../utils");

const router = Router();

router.get("/", c(controller.getDrivers));
router.get(
    "/:id",
    c(controller.getDriverById, (req)=> [req.params.id])
);
router.post("/", c(controller.addDriver, (req) => [req.body]));

module.exports = router; //export module for usage 