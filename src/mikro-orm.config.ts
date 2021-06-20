import { MongoDBPass, prod } from "./constants";
import { Post } from "./enteties/post";
import { MikroORM } from '@mikro-orm/core'
import path from "path";
export default{
migrations :{
path: path.join(__dirname, './migrations'), // path to the folder with migrations
pattern: /^[\w-]+\d+\.[tj]s$/,			
},

entities: [Post],
dbName: 'Backenddb',
clientUrl: MongoDBPass ,
debug: !prod,
type: 'mongo',
} as Parameters<typeof MikroORM.init>[0];