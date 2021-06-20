import {Connection, IDatabaseDriver, MikroORM} from '@mikro-orm/core'
import { prod } from './constatnts'
import { Post } from './enteties/post';


async function main(){
const orm: MikroORM<IDatabaseDriver<Connection>> = await MikroORM.init({
entities: [Post],	
dbName: "backendwork",
password: "Aashi1234@",
debug: !prod,
type: 'postgresql'
})
orm.em.create(Post, {title: "Hello"})
orm.em.persistAndFlush;
}

main();