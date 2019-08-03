const express = require('express')
const app = express()
const cors = require('cors')

var MongoClient = require('mongodb').MongoClient
ObjectID = require('mongodb').ObjectID;
var assert = require('assert')
var mongoUrl = "mongodb://localhost:27017/todo-list"

app.use(express.json())
app.use(cors())

const client = new MongoClient(mongoUrl, { useNewUrlParser: true })

client.connect((err)=>{
  console.log("> Starting ...")
  assert.equal(null,err)

  const db = client.db('todo-list')
  console.log("> Connected to "+mongoUrl)

  app.get('/', function (req, res) {res.send()})
  
  app.get('/task', (req,res)=>{
    let tasks = db.collection('tasks')
    let obj = tasks.find({}).toArray((err,tasklist)=>{
      res.send(tasklist)
    })
  })
  
  app.post('/task', (req,res)=>{
    let tasks = db.collection('tasks')
    tasks.insertOne(req.body,()=>{
      console.log('< insert task',JSON.stringify(req.body))
      res.send()
    })
  })

  app.put('/delete', (req,res)=>{
    let tasks = db.collection('tasks')
    tasks.deleteOne({_id:new ObjectID(req.body._id)},()=>{
      console.log('< delete task ',req.body._id)
      res.send()
    })
  })
  app.put('/edit', (req,res)=>{
    let tasks = db.collection('tasks')
    tasks.updateOne({_id:new ObjectID(req.body._id)},{$set:req.body},{upsert:true},()=>{
      console.log('< '+req.body._id+' now '+req.body.done)
      res.send() 
    })
  })

  app.listen(3000, function () {
    console.log('\n>> Up and running!\n')
  })
})