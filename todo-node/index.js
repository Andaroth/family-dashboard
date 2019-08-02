const express = require('express')
const app = express()
const cors = require('cors')

var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var mongoUrl = "mongodb://localhost:27017/todo-list"

app.use(express.json())
app.use(cors())

const client = new MongoClient(mongoUrl, { useNewUrlParser: true })

client.connect((err)=>{

   assert.equal(null,err)
   const db = client.db('todo-list')
   console.log("connected.")

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })
  
  
  app.get('/task', (req,res)=>{
    let tasks = db.collection('tasks')
    let obj = tasks.find({}).toArray((err,tasklist)=>{
      console.log('get tasklist')
      res.send(tasklist)
    })
  })
  
  app.post('/task', (req,res)=>{
    let tasks = db.collection('tasks')
    tasks.insertOne(req.body,()=>{
      console.log('insert task',req.body)
      res.send()
    })
  })

  app.put('/delete', (req,res)=>{
    let tasks = db.collection('tasks')
    tasks.deleteOne({_id:req.body._id},()=>{
      console.log('delete task',req.body)
      res.send()
    })
  })
  app.put('/edit', (req,res)=>{
    console.log('put edit task',req.body)
    let tasks = db.collection('tasks')
    tasks.replaceOne(({_id:req.body._id},req.body),()=>{
        res.send()
    })
  })

  app.listen(3000, function () {
    console.log('Running!')
  })
})