const express = require("express");
const cors = require("cors");

const app = express();
// Use environment variable or fallback to 5000 for local development
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello World from bibh and sathi, subha , may192025!" });
});

// Add health check endpoint (required by Azure)
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});
