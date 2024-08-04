import express from 'express'
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use('/*', (req, res,next) => res.status(200).json({
    status: 'success',
    message: 'Server is running',
  }))
app.listen(port, () => console.log(`app listening on port ${port}!`))