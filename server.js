//importing
import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbmessage.js'
import Pusher from 'pusher'
import cors from 'cors'
//app config
const app=express()
const port=process.env.PORT || 5000
app.get('/',(req,res) =>{
    res.status(200).send('hello world')

});

const pusher = new Pusher({
    appId: "1164570",
    key: "87dd2e5b6a69e31096d7",
    secret: "52203e62205cbb23c3a2",
    cluster: "eu",
    useTLS: true
  });

//middleware
app.use(express.json());
app.use(cors());


//DB config
mongoose.connect("mongodb+srv://admin:abcd1234@cluster0.7urzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db=mongoose.connection
db.once('open',()=>{
    console.log("DB connected")
     
  const msgCollection=db.collection("messagecontents");
  const changeStream=msgCollection.watch();
  changeStream.on('change',(change)=>{
   console.log('A change occured',change);
   if(change.operationType === 'insert'){
       const messageDetails =change.fullDocument;
       pusher.trigger("messages","inserted" ,{
           name:messageDetails.name,
           message:messageDetails.message,
           timestamp:messageDetails.timestamp,
           received: messageDetails.received,
        
       });
   }
   else{
       console.log('Error triggering pusher')
   }


  });
});
//api routes
app.get('/',(req,res) =>{
    res.status(200).send('hello world')

});
app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    });
});
app.post('/messages/new',(req,res)=>{
    const dbMesssage =req.body
    Messages.create(dbMesssage,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(`new message craete:\n ${data}`)
        }
    });
});

//Listen
app.listen(port,()=>{
    console.log(`Listening on localhost: ${port}`)
});