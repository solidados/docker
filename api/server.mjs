import express from 'express'
import cors from 'cors'

import { db } from "./db.mjs";

const PORT = 3000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json(db)
})

app.listen(PORT, () => console.log(`>> Listening for requests on port: ${PORT} <<`))
