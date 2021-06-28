import  express  from 'express';
import { Port,Host } from './constants';
import { MongoConnect } from './DataBase/main';
import  log from './logger/PinoLogger'
import  routes from './Routes/index'
import cookieParser from 'cookie-parser';



async function Main() {
const app = express()
app.use(cookieParser());
app.listen(Port, Host, () => log.info(`Port Started on ${Port}`))
app.use('/api', routes);
app.use(express.json)

}
process.on('uncaughtException', function (err) {
	console.log(err);
 }); 

MongoConnect();

Main().catch(err  =>{
log.info(err)
})