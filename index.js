const express = require("express");
const path = require("path");

const app = express()
const PORT = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, '/public')))

// app.get('/', (req, res) => {
//     res.send(path.join(__dirname, '/public', 'index.html'))
//   })

app.listen(5000, () => {
    console.log('listening to port 5000')
  })
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

