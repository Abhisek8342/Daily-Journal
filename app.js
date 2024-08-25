
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { log } = require("console");
var _= require('lodash');
// let posts=[];
const mongoose= require("mongoose");

const homeStartingContent = "Welcome to Daily Journal Website, your ultimate destination for insightful news, thought-provoking articles, and up-to-the-minute updates from around the world. Whether you're seeking in-depth analysis, expert opinions, or just want to stay informed on the latest trends, we have it all covered. Our mission is to empower you with the knowledge you need to navigate the complexities of today’s world. Dive into our diverse categories, explore our top stories, and never miss a beat with our curated content designed to keep you informed and engaged every day.";
const aboutContents = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContents = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

// mongoose.connect("mongodb://127.0.0.1:27017/PostDB").then(()=>console.log("Database connected successfully..."));
mongoose.connect("mongodb+srv://nayakabhisek435:KqvyjR8Zpp5YlXSp@cluster0.uvcvkgh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{}).catch((err)=>{
    console.log(err);
}).then(()=>console.log("Successfully connected to database"));
// create a mongoose Schema
const PostSchema= new mongoose.Schema({
         title:{
          type:String,
          required:true,
         },
        content:{
          type:String,
        }
});

const Posts= mongoose.model("Posts",PostSchema);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){

  Posts.find().catch(err => console.log(err)).then
  ((posts)=>{

    res.render("home",{homeContent:homeStartingContent, posts:posts});
  });

});


app.get("/about",function(req,res){
res.render("about",{aboutContent: aboutContents});
});

app.get("/contact",function(req,res){
  res.render("contact",{contactContent:contactContents});
  });

app.get("/compose",function(req,res){
  res.render("compose");
});

app.post("/compose", async function(req,res){

  const post= new Posts({
    title:req.body.lists,
    content:req.body.postBody

  });

post.save();
  
     res.redirect("/");

});


app.get("/post/:postId",function(req,res){
 const requiestId= req.params.postId;
 Posts.findOne({_id:requiestId}).catch(err=>console.log(err)).then((posts)=>{
     res.render("post",{title:posts.title,content:posts.content});
 });


});

app.post("/delete",function(req,res){
  const requiestId= req.body.dele;
  Posts.findByIdAndRemove({_id:requiestId}).catch(err=>console.log(err)).then(()=>{console.log("Successfully deleted one Post.");});
 res.redirect("/");
 });
 
const port= process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Server started successfully...");
});
