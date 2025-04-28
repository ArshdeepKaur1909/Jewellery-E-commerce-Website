const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded(({extended: true})));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/sophiaJewels", (req, res) => {
  res.render("frontpage.ejs");
});
app.get("/necklace", (req, res) => {
  res.render("necklace.ejs");
});
app.get("/Bracelet", (req, res) => {
  res.render("bracelet.ejs");
});
app.get("/shopping-cart", (req, res) => {
  res.render("cart.ejs");
});
app.get("/productDescription", (req, res) => {
  let {name, price, img} = req.query;
  res.render("product.ejs", {name, price, img});
});
app.listen(8080, () => {
    console.log("Listening Started");
});

