const uuid = require('uuid');
const habitRouter = require('express').Router()

habitRouter.post('/habit',(req,res)=>{
	const newId = uuid.v4();
	
	const {name,develop} = req.body;

	const newHabbit = {
		id : newId,
		name : name,
		develop : develop
	}
	
	res.status(201).json(newHabbit)
})

module.exports = habitRouter