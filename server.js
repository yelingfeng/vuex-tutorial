var path = require('path');
var express = require('express');
var cors = require("cors");

var app = new express();
var port = process.env.PORT || 8400;
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.get("/", function(req, res) {
  return res.sendFile(__dirname + '/dist/index.html')
})


app.post("/api/search" , function(req, res){
	 res.send({
	    result :[
	      {
	        "name" : "张三",
	        "address"  : "朝阳区/汇鑫大厦",
	        
	      },
	      {
	        "name" : "李四",
	        "address" : "昌平区天通苑龙德广场",
	      },
	      {
	        "name" : "王五",
	        "address" : "通州区富丽华大厦",
	      }
	    ]
	  });
})



app.listen(port, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
