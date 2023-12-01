import { NextFunction, Request, Response } from "express"
import createQR from "../utils/createQR"

export const sendMailToGroup = async (req: Request, res: Response, next: NextFunction) => {
    console.log('post mailing')
    for (let i = 137; i < 500; i++) {
        await createQR(i.toString())
    }

}
