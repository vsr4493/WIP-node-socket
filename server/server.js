import {PORT} from './config';
import express from 'express';

const app = express();
app.get("/",(req,res) => {
	res.send("Hello world");
});

const makeServer = () => {
	app.listen(PORT,()=>{
		console.log(`Server running on ${PORT}`);
	});
};

export default makeServer;