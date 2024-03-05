 const User= require('../models/User')
 const path= require('path')
module.exports=(req, res) => {
    // res.sendFile(path.resolve(__dirname,"pages/post.html"))
  User.create(req.body,(error,user)=>{
     
        if(error){
            Object.keys(error.errors).map(key =>
            error.errors[key].message)
        return res.redirect('/auth/register')
        }
      res.redirect("/");
  })
  }