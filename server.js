import express from "express";
import cors from "cors";
import url from "url";
import path from "path";

const app = express();
const PORT = 8000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England' 
    },
    'chance the rapper':{
        'age': 29,
        'birthName':'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois' 
    },
    'dylan':{
        'age': 29,
        'birthName':'Dylan',
        'birthLocation': 'Dylan' 
    }
}

app.use(cors());

app.get('/', (request, response)=>{
    // response.sendFile(__dirname + '/index.html')
    response.sendFile(path.join(__dirname, "index.html"));
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})