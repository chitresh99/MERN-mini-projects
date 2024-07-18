const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());


//reads files from directory

app.get('/files',function(req,res){
 
//path.join is used to ->  is used to join all given path segments

fs.readdir(path.join(__dirname, './files/'),function(err,files){
    if(err){
      return res.status(500).send('unable to scan directory'+err);
    }
    else{
       res.send(files);
    }

})

})

app.get('/file/:filename',function(req,res){
    const filepath = path.join(__dirname,"./files",req.params.filename);

    fs.readFile(filepath,'utf-8',function(err,data){
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send(data);
    })
})

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});



app.listen(3000);