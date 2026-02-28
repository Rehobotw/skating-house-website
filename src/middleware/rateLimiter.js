// Lightweight in-memory rate limiter (per IP + path)
// This is a simple implementation suitable for small deployments.

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

const hits = new Map();

module.exports = (req, res, next) => {
	const key = `${req.ip}:${req.path}`;
	const now = Date.now();

	const entry = hits.get(key) || { count: 0, start: now };

	if (now - entry.start > WINDOW_MS) {
		entry.count = 0;
		entry.start = now;
	}

	entry.count += 1;
	hits.set(key, entry);

	if (entry.count > MAX_REQUESTS) {
		return res.status(429).json({ error: "Too many requests, please try again later." });
	}

	next();
};

