const express = require("express");
const app = express();
const fs = require('fs').promises;
const path = require('path');

app.use(express.json())

// get -> gets the files
// post -> Posts a new file
// Put -> Updates the files
// Deletes -> deletes the files

app.get("/todo", function (req, res) {
    fs.readdir(path.join(__dirname, './todo/'), function (err, todo) {
        if (err) {
            return res.status(500).send('unable to scan directory' + err);
        }
        else {
            res.send(todo);
        }
    })
})

app.get("/todo/:filename", function (req, res) {
    const filepath = path.join(__dirname, "./todo", req.params.filename);

    fs.readFile(filepath, 'utf-8', function (err, data) {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send(data);
    });
});

app.post('/todo', async function (req, res) {

    const { filename, filecontent } = req.body;

    const filepath = path.join(__dirname, "./todo", filename);

    try {
        await fs.writeFile(filepath, filecontent);
        res.status(201).send('File added successfully');
    } catch (err) {
        console.error('Error adding file:', err);
        res.status(500).send('Error adding file');
    }

})


app.put('/todo/:filename', async function (req, res) {

    const filename = req.params.filename; // Get filename from URL parameter
    const filecontent = req.body.filecontent; //send file content in the request body
    
    const filepath = path.join(__dirname, "./todo", filename);
    try{
        await fs.appendFile(filepath, filecontent);
        res.status(201).send('File updated successfully');
    }catch(err){
        console.error('Error adding file:', err);
        res.status(500).send('Error adding file');
    }
})

app.delete('/todo/:filename',async function (req,res){
    const filename = req.params.filename;
    const filecontent = req.body.filecontent;

    const filepath = path.join(__dirname,"./todo",filename)
    try{
        await fs.unlink(filepath,filecontent);
        res.status(201).send('file deleted successfully')
    }
    catch(err){
        console.error('Error deleting file:', err);
        res.status(500).send('Error deleting file');
    }
})


app.listen(3000)