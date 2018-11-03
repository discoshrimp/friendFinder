var path=require("path");
module.exports = function (app) {

	
	var API=[]

app.get('/api', function(req,res){
	res.send(API)
})
app.post('/apipost', function(req, res){
	console.log(req.body)
	API.push(req.body)
	// sessionStorage.setItem('API', API)
})

}