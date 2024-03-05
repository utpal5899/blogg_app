 
module.exports=(req, res) => {
    // res.sendFile(path.resolve(__dirname,"pages/post.html"))
  if(req.session.userid){
    return res.render("create");

  }
  res.redirect("/auth/login")
  }