import cors from 'cors';
import express, { Express, Request, Response, Application, NextFunction } from 'express';
import { routes } from "./src/routes"
interface CustomError extends Error {
    status?: number
}

const { PORT, NODE_ENV } = process.env

const isDev = NODE_ENV === "development"

const app: Application = express();

// app.use(cors());
if (isDev) {
    app.use(cors({
        origin: "*",
        optionsSuccessStatus: 200,
        credentials: false
    }))
} else {
    // Update this for production
    app.use(cors({
        origin: "*",
        optionsSuccessStatus: 200,
        credentials: true
    }))
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", routes)


// Error handler middleware checks after any erorr passed
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not Found") as CustomError
    error.status = 404;
    error.message = `accessed to a not found route : ${req.url}`
    next(error)
})

app.use((error: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error("\x1b[47m", error)
    if (res.headersSent) {
        return next(error)
    }

    return res.status(error.status || 500).json({
        error: {
            status: error.status || 500,
            message: error.status ? error.message : "Internal Server Error"
        }
    })
})


app.listen(PORT || 3000, () => {
    console.info("Running on port :", PORT || 3000);
}).on('error', (error: Error) => {
    console.error('Error setup server', error)
})
