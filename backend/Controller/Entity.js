const express = require("express");
const router = express.Router();
const { getEntitiesByUser } = require("../controllers/entityController");

// Define the route
router.get("/entities/:userId", getEntitiesByUser);

module.exports = router;
