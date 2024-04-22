
import express from 'express';

const app = express();

app.use(express.static('static_files'))


app.listen(3000, () =>{
  console.log('Server Listening on port 3000')
});