const express = require('express')

const app = express();

console.log('olakase')

app.listen(3000)

app.get('/', (req, res)=> res.send('Helloo'))