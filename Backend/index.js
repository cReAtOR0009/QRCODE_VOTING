const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



app.get("/", (req, res)=> {
    res.json({data:"server is working"})
})



app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

