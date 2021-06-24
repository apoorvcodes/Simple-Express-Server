import  express  from 'express';
import { Port,Host } from './constants';
import  log from './logger/PinoLogger'
import  routes from './Routes/index'
import { MikroORM } from "@mikro-orm/core/MikroORM";
import { MongoDBPass } from './constants'
import { UserEnt } from './Entities/userEnt'
import { TestPost } from './Entities/TestPost';
const OrmConnect = async() => {

	const orm = await MikroORM.init({
		entities: [UserEnt, TestPost],
		dbName: 'BackendTest',
		type: 'mongo',
		clientUrl: MongoDBPass, 
	      });
	      console.log(orm.em);
	      
}
 



async function Main() {
const app = express()

app.listen(Port, Host, () => log.info(`Port Started on ${Port}`))
app.use('/api', routes);
app.use(express.json)

}
OrmConnect();



Main().catch(err  =>{
log.info(err)
})