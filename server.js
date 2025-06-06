const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbconnect");
// parse requests of content-type -application/json

app.use(express.json());



app.get("/", (req, res) => {res.json({ message: "Welcome to myMongoDB application." });
});

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// set port, listen for requests

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});