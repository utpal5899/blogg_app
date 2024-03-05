const express = require("express");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
const { error } = require("console");
const fileupload = require("express-fileupload");
const home=require("./controllers/home")
const getPost=require("./controllers/getPost");
const storePost = require("./controllers/storePost"); 
const newUser = require("./controllers/newUser");
const expressSession=require("express-session")
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.f8rjolj.mongodb.net/blogapp?retryWrites=true&w=majority"
  );
  // custome middleware
  const valiadteMiddleware=require("./midderware/validationMiddlerware");
const storeUser = require("./controllers/storeUser");
const login = require("./controllers/login");
const loginuser = require("./controllers/loginuser");
const authMiddleware = require("./midderware/authMiddleware");
const redirectifauthenticatedmiddleware = require("./midderware/redirectifauthenticatedmiddleware");
const { logout } = require("./controllers/logout");



// midlerware

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(fileupload());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use('/posts/store',valiadteMiddleware)
app.use(expressSession({secret:"utpal tank"}))
app.listen(4000, () => {
  console.log("first");
});
global.loggedIn=null;
app.use("*",(req,res,next)=>{
  loggedIn=req.session.userid;
  next()
})

app.get("/",  home);

app.get("/posts/new", authMiddleware,(req, res) => {
  // res.sendFile(path.resolve(__dirname,"pages/post.html"))

  res.render("create");
});
app.get("/auth/register", newUser);

app.post("/posts/store",authMiddleware, storePost
);

app.post("/users/register", redirectifauthenticatedmiddleware,storeUser
);
 

app.get("/post/:id", redirectifauthenticatedmiddleware,getPost);

app.get("/auth/login",redirectifauthenticatedmiddleware, login);
app.get("/user/auth/login",redirectifauthenticatedmiddleware, login);
app.post("/user/login", loginuser);
app.get("/logout", logout);


app.use((req,res)=>{
  // return res.render(" 404 page")
})
// Crud oprastion

// BlogPost.create({
//     title:"my post",
//     body:"hello there"
// },(error,blogpost)=>{console.log(error,blogpost)})

// BlogPost.find(
//   { title: /my post/ },

//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// const id="63dadd0574b1fda5cafb3358"
// // // findbyid
// BlogPost.findById(id,

//   (error, blogpost) => {
//     console.log(error, blogpost);
//   }
// );

// BlogPost.findByIdAndUpdate(id,
//     { title: "my tzcazsditle" },

//     (error, blogpost) => {
//       console.log(error, blogpost);
//     }
//   );

//   BlogPost.findByIdAndDelete("63dadcfc2782f0530d678248",

//     (error, blogpost) => {
//       console.log(error, blogpost);
//     }
//   );
