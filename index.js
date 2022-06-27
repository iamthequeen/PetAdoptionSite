const express = require("express");
const path = require("path");

const app = express()
const PORT = process.env.PORT || 5000

app.get("/signup", (req, res) => {
  
})
// app.use(express.static(path.join(__dirname, '/public')))

app.use(express.static('public'))
// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, '/public', 'index.html'))
//   })

app.listen(5000, () => {
    console.log('listening to port 5000')
  })

