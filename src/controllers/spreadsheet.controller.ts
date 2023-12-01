import { NextFunction, Request, Response } from "express"
import fs from 'fs'
import insertUserData from "../utils/insertUserData"
import { prepareUserData } from "../utils/prepareUserData"
import { readXLSX } from "../utils/readXLSX"

const makeSpreadsheet = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.file) {
        res.status(403).send("required file not found")
    }
    try {

        console.log('makuSpaduRequFilu :', req.file)

        if (!req?.file?.path) return next(Error)

        const sheetData = readXLSX(req?.file?.path)

        const userData = prepareUserData(sheetData)

    } catch (err) {
        return next(err)
    } finally {
        if (req.file) {
            fs.unlink(req.file.path, (err) => {
                if (err) throw err;
                console.log("the file is deleted!");
            });
        }
    }
}


const makeSpreadsheetAndInsert = async (req: Request, res: Response, next: NextFunction) => {

    if (!req.file) {
        res.status(403).send("required file not found")
    }
    try {

        console.log('makuSpaduRequFilu :', req.file)

        if (!req?.file?.path) return next(Error)

        const sheetData = readXLSX(req?.file?.path)

        const userData = prepareUserData(sheetData)

        insertUserData(userData, res)

    } catch (err) {
        return next(err)
    } finally {
        if (req.file) {
            fs.unlink(req.file.path, (err) => {
                if (err) throw err;
                console.log("the file is deleted!");
            });
        }
    }
}

export {
    makeSpreadsheet, makeSpreadsheetAndInsert
}
