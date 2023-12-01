import { Router } from 'express'


export const defaultRoute = Router()

defaultRoute.get("/", async (req, res) => {
    console.log('got a visit at base route')
    res.send("Hello from server!")
})

defaultRoute.get("/db", async (req, res, next) => {
    try {
        res.json({ 'test data': '' })
    } catch (err) {
        next(err)
    }
})
