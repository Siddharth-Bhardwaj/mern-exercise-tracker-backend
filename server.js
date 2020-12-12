const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
    "mongodb+srv://siddharth:activesid0@cluster0.72cfk.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection established successfully");
});

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});
