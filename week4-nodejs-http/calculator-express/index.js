const express = require("express");
const app = express();

app.get("/sum", function(req, res) {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);
	const sum = a + b;
	res.send(sum.toString());
})

app.get("/subtract", function(req, res){
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);
	const subtract = a - b;
	res.sent(subtract.toString());
})

app.listen(3000);
