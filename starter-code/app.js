const express = require("express");

const app = express();

app.use(express.static("public"));

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

const data = {
  name: "Dalina",
  job: "Web Developer",
  email: "dalina.weidinger@gmail.com",
  bootcamp: {
    school: "IronHack",
    name: "Web Development"
  },
  cities: ["Miami", "Madrid", "Barcelona", "México", "Berlin"],
  images: {
    image1: "https://source.unsplash.com/random",
    image2: "https://source.unsplash.com/random",
    image3: "https://source.unsplash.com/random",
    image4: "https://source.unsplash.com/random",
    image5: "https://source.unsplash.com/random"
  }
};

app.get(["/", "/home"], (request, response, next) => {
  response.render("home", data);
});

app.get("/about", (request, response, next) => {
  response.render("about", data);
});

app.get("/gallery", (request, response, next) => {
  response.render("gallery", data);
});

app.listen(3000, () => {
  console.log("My first app listening on port 3000!");
});
