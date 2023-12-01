import { Response } from "express";
import db from "../../db/database";
import { IUser } from "../types/user";

export default async function insertUserData(data: IUser[], res: Response) {
    // console.log('data before inserting to db :', data)
    try {

        const dbResult = await db.schema.hasTable('users').then((exists) => {
            if (!exists) {
                res.status(500).send("Error at database")
            }
        })
        console.log('db result :', dbResult)

    } catch (err) {
        console.log('err :', err)
    }

    try {
        const dbSelectAllReslut = await db.select('*').from('users')
        console.log('db select all reult :', dbSelectAllReslut)
        const insertUserResult = data.map(async (row) => {
            await db("users")
                .insert(row)
                .onConflict("fullname")
                .ignore()
                .then((result) => console.log('insert result:', result))
        });

        res.status(201).json({ success: true, message: "insert success" });

    } catch (err) {
        console.log('err :', err)
    }



    // const dbResult = await db('users').select('*').then(data => console.log('data :', data))
}