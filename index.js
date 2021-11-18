const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/",(req,res)=>{
    res.send("Method POST")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let person = {
    name: "Khien",
    age: 20,
    isBeautiful: true
}
