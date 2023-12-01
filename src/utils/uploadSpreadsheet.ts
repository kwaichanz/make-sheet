import { Request } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";

type DestinationCallback = (error: Error | null, desitination: string) => void
type FileNamecallback = (error: Error | null, filename: string) => void

const storageEngine = multer.diskStorage({
    destination: "./spreadsheets",
    filename: (req: Request, file: Express.Multer.File, cb: FileNamecallback) => {
        console.log('express multer file :', file)

        cb(null, `${Date.now()}--${file.originalname}`);
    },
});

const upload = multer({
    storage: storageEngine,
    limits: { fileSize: 30000000 },
    fileFilter: (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
        checkFileType(file, cb);
    },
});

const checkFileType = function (file: Express.Multer.File, cb: FileFilterCallback) {
    const fileTypes = /xlsx|xls|csv/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

    const whitelist = ["application/vnd.ms-excel", "text/csv", "application/msexcel", "application/x-msexcel", "application/x-ms-excel", "application/x-excel", "application/xls", "application/x-xls", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "excel", "spreadsheetml"];
    const mimeType = whitelist.includes(file.mimetype);

    if (extName && mimeType) {
        return cb(null, true);
    } else {
        console.log('extName', extName)
        console.log('mimeType', mimeType)
        console.log('Please upload only excel file')
        cb(null, false);
    }
};

export {
    upload
};
