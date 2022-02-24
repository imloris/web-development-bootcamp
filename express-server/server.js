const express = require("express");
const server = express();
const port = 3000;

server.get("/", (req, res) => {
	res.send("Opa Lóris");
});

server.get("/about", (req, res) => {
	res.send("im loris");
});

server.get("/contact", (req, res) => {
	res.send("contact me at: victorldcarvalho@gmail.com");
});

server.listen(port, () => {
	console.log(`o server está na porta ${port}`);
});
