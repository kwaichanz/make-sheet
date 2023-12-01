import { NextFunction, Request, Response, Router } from "express";
import { upload } from '../utils/uploadSpreadsheet'
import { makeSpreadsheet, makeSpreadsheetAndInsert } from "../controllers/spreadsheet.controller"

export const spreadsheetRoutes = Router()

spreadsheetRoutes.get("/spreadsheet", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from make sheet route")
})
spreadsheetRoutes.post("/spreadsheet/make-sheet", upload.single("file"), makeSpreadsheet)

spreadsheetRoutes.post("/spreadsheet/make-sheet/insert", upload.single("file"), makeSpreadsheetAndInsert)