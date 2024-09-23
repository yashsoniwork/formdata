const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://demoprojects:qwerty123@demoproject1.8tlt5.mongodb.net/shop?retryWrites=true&w=majority&appName=demoproject1")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error by connecting to MongoDB:", err);
    });
