import  express  from 'express';
import { Port,Host } from './constants';
import { MongoConnect } from './DataBase/main';
import  log from './logger/PinoLogger'
import  routes from './Routes/index'
import  cookieSession from 'cookie-session'; 
async function Main() {
const app = express()
app.use(cookieSession({
	name: 'session',
	keys: ['cute_Adi', 'noba', 'vedant', '69420'], //Secret 
	maxAge: 24 * 60 * 60 * 1000 // 24 hours
      }))
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