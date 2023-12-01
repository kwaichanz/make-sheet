import { NextFunction, Request, Response, Router } from "express";
import { sendMailToGroup } from "../controllers/email.controller";

export const mailingRoutes = Router()


mailingRoutes.get("/make-sheet/mailing", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from make mailing route")
})
mailingRoutes.post("/make-sheet/mailing", sendMailToGroup)
