const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static('public'))


app.get('/', (req, res) => {
//   res.send('서버 점검중입니다!')
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/join', (req, res) => {
    res.sendFile(__dirname+'/public/register.html')
})

app.get('/cs', (req, res) => {
    res.sendFile(__dirname+'/public/customer.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})