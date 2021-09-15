import mongoose from 'mongoose';

mongoose.connect(
	`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@nodejsplatzi.cg57m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
	{
		
	}
);
