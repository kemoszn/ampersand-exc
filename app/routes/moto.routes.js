//import router library and controller handler
const { Router } = require("express");
const controller = require("../controllers/moto.controller.js");
const { controllerHandler: c } = require("../utils");

const router = Router();

router.get("/", c(controller.getMotos));
router.get(
    "/:id",
    c(controller.getMotoById, (req)=> [req.params.id])
);
router.post("/", c(controller.addMoto, (req) => [req.body]));

module.exports = router; //export module for usage 