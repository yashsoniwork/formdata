const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 3000;
require("./connection");
const Register = require("./userregister");

const static_path = path.join(__dirname, "public");
const views = path.join(__dirname, "templates/views");

hbs.registerPartials(path.join(__dirname, "templates/views/partials"));

app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data

app.set("view engine", "hbs");
app.set("views", views);
app.set("view cache", false);

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/partials/register", (req, res) => {
    res.render("register");
});

app.post("/partials/register", async (req, res) => {
    try {
        const registerEmployee = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email : req.body.email
        })
        
        const registered = await registerEmployee.save();
        res.status(201).send("your registration is succesfull")
         
    } catch (error) {
        console.error("dublicate emails please check");
        res.send(" <h1> kya kr rhe ho bhai duplicate email kyu bna rhe ho :)</h1>")
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
