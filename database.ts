const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/TSP2P',()=>{
    console.log("Data Base is Connected")
})