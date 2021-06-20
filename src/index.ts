import {Connection, IDatabaseDriver, MikroORM} from '@mikro-orm/core'
import { prod } from './constatnts'
import { Post } from './enteties/post';
import  express  from 'express'


async function main(){
const app = express()

const orm: MikroORM<IDatabaseDriver<Connection>> = await MikroORM.init({
 entities: [Post],
  dbName: 'Backenddb',
  clientUrl: 'mongodb+srv://totu:aashi1234@cluster0.xibbs.mongodb.net/Data',
  type: 'mongo',
})


 
app.listen(4000)
console.log(`Starting port at 4000`)

}

main();