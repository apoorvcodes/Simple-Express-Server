import {Connection, IDatabaseDriver, MikroORM} from '@mikro-orm/core'
import { prod, Port, MongoDBPass } from './constants'
import { Post }  from './enteties/post';
import  express  from 'express'


async function main(){
const app = express()

const orm: MikroORM<IDatabaseDriver<Connection>> = await MikroORM.init({
 entities: [Post],
  dbName: 'Backenddb',
  clientUrl: MongoDBPass ,
  debug: prod,
  type: 'mongo',
})

const post:Post = orm.em.create(Post ,{Name : "idk"})
orm.em.persistAndFlush(post)
console.log(post)

 
app.listen(Port, () => console.log("Starting"))

}

main().catch(err  => {
console.error(err)
});

