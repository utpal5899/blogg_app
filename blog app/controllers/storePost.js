
const BlogPost = require("../models/BlogPost")
const path = require("path");

module.exports=async (req, res) => {
    // res.sendFile(path.resolve(__dirname,"pages/post.html"))
  
    console.log(req.body);
    //  res.redirect("/")
    let image = req.files.image;
    image.mv(path.resolve(__dirname, "public/img", image.name), async (error) => {
      await BlogPost.create({ ...req.body, image: "/img/" + image.name });
      res.redirect("/");
    });
  }