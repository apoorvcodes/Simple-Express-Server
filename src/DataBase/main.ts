import mongoose from 'mongoose'
import log from '../logger/PinoLogger';
import { MongoDBPass, Port } from '../constants';

export const MongoConnect = async() => {
  await mongoose.connect(MongoDBPass, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(() => log.info(`Connected to Database at Port ${Port}`))
}
