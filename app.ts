import express, { Request, Response } from "express";
import routes from './routes';
import "./database";
const app = express()
app.use(express.json())
app.use('/', routes)
app.get('/', (req: Request, res: Response) => {
    res.send("Request Getting Success")
})
const Port = 5000;
app.listen(Port, () => {
    console.log("server Listening on Port " + Port)

}) 