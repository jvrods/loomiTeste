import express, { NextFunction, Request, Response, response } from "express"
import "express-async-errors";
import { TextDecoderStream } from "stream/web";
import { routes } from "./routes/routes";



const app = express()

const nodemailer = require("nodemailer");

app.use(express.json())

app.use(routes);

app.use((err:Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            message: err.message
        })
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    })
})

app.get("/sendmail", async (request, response) => {

        var transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "6d4c3978974917",
                pass: "cd5b30b15bcea6"
            }
        });

        let message = await transport.sendMail({
            from: '"Teste" <teste@teste.com>',
            to: "teste@teste.com",
            subject: "Email com nodemailer",
            text: "email teste",
            html: "<p>TESTE</p>"
        });
        response.send("enviou");
    });

app.listen(3000, () => console.log("Server is running"));