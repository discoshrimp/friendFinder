var express=require("express")
var bodyParser=require("body-parser")
var path=require("path")

var app=express()
var PORT=3500

//require routing
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// module.exports = function (app) {
//home page
// 	app.get('/', function (req, res) {
// 		res.sendFile(path.join(__dirname'../public/home.html'))
// 	})
// 	//survey page
// 	app.get('/survey', function (req, res) {
// 		res.sendFile(path.join(__dirname, '../public/survey.html'))
// 	})
// }


app.listen(PORT, function(){
	console.log("App listening on PORT: "+PORT)
})