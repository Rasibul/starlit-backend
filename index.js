const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./src/config/config");
const app = express();




app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());



// Database connection
mongoose
	.connect(config?.dbConnection)
	.then(() => {
		console.log("Mongoose connected successfully");
		// Start the server only after successfully connecting to MongoDB
		app.listen(config.port, () => {
			console.log(`Server is running on port ${config.port}`);
		});
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB", error);
	});

// Test route to check if server is running
app.get("/", (req, res) => {
	res.send("Starlit-Server is running");
});

// Graceful error handling
process.on("uncaughtException", (error) => {
	console.error("Uncaught Exception:", error);
	// Optionally perform cleanup

	// Exit the process with a non-zero status code
	process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
	// Optionally perform cleanup
	// Exit the process with a non-zero status code
	process.exit(1);
});

module.exports = app;
