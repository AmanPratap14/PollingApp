const express= require('express');
const handle = require("./handlers");

const app= express();
const port=  8080;


app.get('/', (req, res)=> res.json({ Hello: 'Aman' }));


app.use(handle.notFound);
app.use(handle.error);

app.listen(port, console.log(`server running on port ${port}`));
