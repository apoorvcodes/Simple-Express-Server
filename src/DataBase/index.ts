import mongoose from 'mongoose'
import {MongoDBPass} from '../constants'
import log from '../logger/PinoLogger'

export default async function MongoConnect(){
mongoose.connect(MongoDBPass,{
useNewUrlParser: true,
useUnifiedTopology: true
}).then(()=>{
log.info(`Connected to the mongoDB database`)
})
}