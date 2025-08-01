const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

// Middleware
app.use(cors())


let todo = [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todo', (req, res) => {
    console.log("triggered")
  res.json(todo)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
