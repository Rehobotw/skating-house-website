const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

// Public: get all gallery items
router.get("/", galleryController.getAll);

// Unauthenticated create, update (by id), delete (by id) gallery items
router.post("/", galleryController.create);
router.put("/:id", galleryController.update);
router.delete("/:id", galleryController.remove);

module.exports = router;
