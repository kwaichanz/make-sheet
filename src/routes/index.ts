import express from 'express'
import { defaultRoute } from './default.route'
import { spreadsheetRoutes } from './spreadsheet.route'
import { mailingRoutes } from './mailing.route'

export const routes = express.Router()

routes.use(defaultRoute)
routes.use(spreadsheetRoutes)
routes.use(mailingRoutes)