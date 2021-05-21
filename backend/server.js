const express=require('express')
const app=express()
const connectDB=require('./config/connectDB')
const userRouter=require('./routes/user')

app.use(express.json())
connectDB()

app.use("/api/user",userRouter)








const port=process.env.Port||5000
app.listen(port,(err)=>{
err ? console.log(err) :console.log(`server running on port ${port}`)
})
