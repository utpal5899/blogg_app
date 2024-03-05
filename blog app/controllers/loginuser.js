const bcrypt=require("bcrypt");
const User=require("../models/User")




module.exports=(req, res) => {
    // res.sendFile(path.resolve(__dirname,"pages/post.html"))
  const {userName,password}=req.body;
  console.log(userName,password)

  

  User.findOne({userName:userName},(err,user)=>{
    console.log(user)
    if(user){
        bcrypt.compare(
        password,user.password,function (err,same){

            console.log(typeof password)
            console.log(user.password)
            console.log("gsdwe")
            console.log(same)
            if(same){
              req.session.userid=user._id
                            console.log("gwe")
                            res.redirect("/")
                        }
                        else{
                            console.log("hello there")
                            res.redirect("auth/login")
                        }
                    })

    }
    else{
                res.redirect("/auth/login")
            }
  })













    // res.render("create");
    // User.findOne({userName:userName},(err,user)=>{
    //     if(user){
    //         bcrypt.compare(password,User.password,(err,same)=>{
    //             if(same){
                    // res.redirect("/")
    //             }
    //             else{
    //                 res.redirect("auth/login")
    //             }
    //         })
    //     }
    //     else{
    //         res.redirect("/auth/login")
    //     }
    // })
  }