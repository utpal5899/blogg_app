
const BlogPost = require("../models/BlogPost")
module.exports=async (req, res) => {
    const blogposts = await BlogPost.find({});
    // res.sendFile(path.resolve(__dirname,"pages/index.html"))
    res.render("index", { blogposts });
  }