const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose
    .connect("mongodb+srv://meha:meha@cluster0.zm7lfvv.mongodb.net/events")
    .then((response) => console.log("Database connection successful"))
    .catch((e) => console.log(e));
}

module.exports = {
    connectToDatabase,
};