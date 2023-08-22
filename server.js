const express = require('express')
const app = express()
const PORT = 8000
const rappers = { 
    'savage': {
        'age':29,
        'birthName':'Joseph',
        'birthLocation': 'London, England'
    }
    'chance the rapper': {
        'age':29,
        'birthName':'Bill',
        'birthLocation': 'Amurica'
    }
    'unknown': {
        'age':0,
        'birthName':'unknown',
        'birthLocation': 'unknown'
    }
}
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=> {
    const rappersName = req.params.name.toLowerCase()
    if (rappers[rapperName]){
        res.json(rappers[rapperName])
    }else res.json(rappers['unknown'])
   
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}! Betta go catch it!`)
})


