
import express from 'express';

// server configurations
const app = express();

//express serve static files
app.use(express.static('static_files'))


app.listen(3000, () =>{
  console.log('Server Listening on port 3000')
});