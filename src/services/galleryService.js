const Gallery = require("../models/Gallery");

// Get all gallery images
const getAllGallery = () => Gallery.find();

// Create a new gallery image entry
const createGalleryItem = (data) => Gallery.create(data);

// Update an existing gallery image entry by id
const updateGalleryItem = (id, data) =>
	Gallery.findByIdAndUpdate(id, data, { new: true });

// Delete a gallery image entry by id
const deleteGalleryItem = (id) => Gallery.findByIdAndDelete(id);

module.exports = {
	getAllGallery,
	createGalleryItem,
	updateGalleryItem,
	deleteGalleryItem,
};
