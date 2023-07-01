var express = require('express')
var connectDB = require('./Config/db')
var cors = require('cors')

//DB connection
connectDB()

//express app
const app = express()

//middlewares
app.use(express.json())
app.use(cors())

//routes
app.use('/api/users', require('./Routes/userRoutes'))
app.use('/api/ideas', require('./Routes/ideaRoutes'))
app.use('/api/admin', require('./Routes/adminRoutes'))

//server
const port = 8080

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
