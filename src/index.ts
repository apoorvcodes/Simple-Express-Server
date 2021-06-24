import  express  from 'express';
import { Port,Host } from './constants';
import { MongoConnect } from './DataBase/userEnt';
import  log from './logger/PinoLogger'
import  routes from './Routes/index'

async function Main() {
const app = express()
app.listen(Port, Host, () => log.info(`Port Started on ${Port}`))
app.use('/api', routes);
app.use(express.json)
}


MongoConnect();


Main().catch(err  =>{
log.info(err)
})