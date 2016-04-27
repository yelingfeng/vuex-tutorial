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

//
// app.get("/api/menu",function(req, res){
//   res.send({
//     result :[
//       {
//         "name" : "职员管理",
//         "icon"  : "face",
//         "secondlist" : [
//           { name : "员工信息", param:{path:"/employee"} ,icon:"list"},
//           { name : "新建职员",param:{path:"/addEmploree"} ,icon:"add"},
//           { name : "考勤管理",param:{path:"/attent"},icon:"schedule"}
//         ]
//       },
//       {
//         "name" : "部门管理",
//         "icon" :"equalizer",
//         "secondlist" : [
//           { name : "部门信息", param:{path:"/dept"},icon:"list" },
//           { name : "新建部门",param:{path:"/addDept"} ,icon:"add" },
//         ]
//       },
//       {
//         "name" : "用户管理",
//         "icon" : "person",
//         "secondlist" : [
//           { name : "用户列表", param:{path:"/user"},icon:"list"},
//           { name : "新建用户",param:{path:"/addUser"},icon:"add" }
//         ]
//       }
//     ]
//   });
// })
//
// app.get("/api/users",function(req,res){
//   res.status(200).json({data:[
//     {"id":1,empno:"0001",name:"王小二",sex :"1",telphone:"13812345678",dept:"技术部"},
//     {"id":2,empno:"0002",name:"张小四",sex :"1",telphone:"13812345678",dept:"技术部"},
//     {"id":3,empno:"0003",name:"赵小雨",sex :"2",telphone:"13812345678",dept:"技术部"},
//     {'id':4,empno:"0004",name:"尼古拉斯赵四",sex :"1",telphone:"13812345678",dept:"技术部"},
//     {"id":5,empno:"0005",name:"莱昂纳多刘能",sex :"1",telphone:"13812345678",dept:"技术部"},
//   ]});
// })


app.listen(port, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
