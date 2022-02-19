//import router library and controller handler 
const { Router } = require("express");
const controller = require("../controllers/battery.controller.js");
const { controllerHandler: c } = require("../utils");

const router = Router();

router.get("/", c(controller.getBatteries));
router.get(
    "/:id",
    c(controller.getBatteryById, (req)=> [req.params.id])
);
router.post("/", c(controller.addBattery, (req) => [req.body]));

module.exports = router; //export module for usage