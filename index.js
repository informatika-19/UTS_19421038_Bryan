const { Console } = require('console')
const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const mongoose= require ('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then (() => {
    console.log('Connected To MongoDB')
}).catch((e)=>{
    console.log(e)
    console.log('Failed To Connect')
})

app.use(bodyParser.json({
    extend: true,
    limit: '20mb'
}))

app.use(bodyParser.urlencoded({
    extend: true,
    limit: '20mb'
}))

app.get('/', (req, res)=>{
    res.send('Data Mahasiswa')

})

app.use('/mhs/', require('./routes/mhs'))

app.listen(4000, () => {
    console.log('Server Started')
})
