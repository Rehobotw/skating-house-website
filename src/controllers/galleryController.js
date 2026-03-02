const {
	getAllGallery,
	createGalleryItem,
	updateGalleryItem,
	deleteGalleryItem,
} = require("../services/galleryService");

exports.getAll = async (req, res, next) => {
	try {
		const items = await getAllGallery();
		res.json(items || []);
	} catch (err) {
		next(err);
	}
};

exports.create = async (req, res, next) => {
	try {
		const created = await createGalleryItem(req.body);
		res.status(201).json(created);
	} catch (err) {
		next(err);
	}
};

exports.update = async (req, res, next) => {
	try {
		const { id } = req.params;
		const updated = await updateGalleryItem(id, req.body);
		res.json(updated);
	} catch (err) {
		next(err);
	}
};

exports.remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteGalleryItem(id);
		res.status(204).end();
	} catch (err) {
		next(err);
	}
};
