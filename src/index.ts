
import {Connection, IDatabaseDriver, MikroORM} from '@mikro-orm/core'
import {  Port } from './constants'
import { Post }  from './enteties/post';
import  express  from 'express'
import Mikroconfig from './mikro-orm.config'
import { ApolloServer } from 'apollo-server-express';
import {buildSchema} from 'type-graphql'
import { Hello } from './resolvers/hello';
import { PostResolver } from './resolvers/PostResolver';
async function main(){
	
const orm: MikroORM<IDatabaseDriver<Connection>> = await MikroORM.init(Mikroconfig)
const app = express()


const apolloServer = new ApolloServer({
schema: await buildSchema({
resolvers: [Hello, PostResolver],
validate: false
}),
context:  () =>({ em : orm.em})
});



apolloServer.applyMiddleware({ app });
app.get('/', (_ ,res)=>{
res.send('Hello World')
})


const Posts = await orm.em.find(Post,{})
console.log(Posts)
app.listen(Port, () => console.log("Starting"))

}

main().catch(err  => {
console.error(err)
});

