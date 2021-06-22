import  express  from 'express';
import { Port,Host } from './constants';
import  log from './logger/PinoLogger'
import { MainRouter }from './Routes/index'




async function Main() {
const app = express()

app.listen(Port, Host, () => log.info(`Port Started on ${Port}`))
app.use('/api', MainRouter);
}
Main().catch(err  =>{
log.info(err)
})