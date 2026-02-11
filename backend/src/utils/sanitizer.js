// Placeholder sanitizer helpers. For rich HTML content, consider using
// a dedicated library like DOMPurify (server) or sanitize-html.

const sanitizeString = (value) => {
	if (typeof value !== "string") return value;
	return value.trim();
};

const sanitizeObject = (obj) => {
	if (!obj || typeof obj !== "object") return obj;
	const result = {};
	for (const [key, value] of Object.entries(obj)) {
		result[key] = typeof value === "string" ? sanitizeString(value) : value;
	}
	return result;
};

module.exports = {
	sanitizeString,
	sanitizeObject,
};

