import  express  from 'express';
import { Port } from './constants';

async function Main() {
const app = express()

app.listen(Port, () => console.log('Working'))
}
Main().catch(err  =>{
	console.log(err)
})