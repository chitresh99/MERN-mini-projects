const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');

app.use(express.json());

app.get('/posts', function (req, res) {
    fs.readdir(path.join(__dirname, '/Posts/'), function (err, posts) {
        if (err) {
            return res.status(500).send("unable to load directory " + err)
        } else {
            res.send(posts)
        }
    })
})

app.get('/posts/:foldername/:postid', function (req, res) {

    const filepath = path.join(__dirname, '/Posts/', req.params.foldername, req.params.postid);
    fs.readFile(filepath, 'utf-8', function (err, data) {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.send(data);
    });
})

//post -> make a new directory and also a new file + send content

// app.post('/posts',async function(req,res){
//    const {foldername,postid,filecontent} = req.body;
//    const filepath = (path.join(__dirname,'/Posts',foldername,postid));
//    try{
//     await fs.mkdir(filepath,foldername);
//     await fs.writeFile(filepath,filecontent);
//     res.status(201).send('Folder and file added successfully');
//    }catch(err){
//     console.error('Error adding file:', err);
//         res.status(500).send('Error adding file');
//    }
// })

app.post('/posts', async function(req, res) {
    const { foldername, postid, filecontent } = req.body;
    const folderpath = path.join(__dirname, 'Posts', foldername);
    const filepath = path.join(folderpath, postid);

    try {
        await fs.mkdir(folderpath, { recursive: true }); // Create the folder path recursively
        await fs.writeFile(filepath, filecontent); // Write the file content
        res.status(201).send('Folder and file added successfully');
    } catch (err) {
        console.error('Error adding file:', err);
        res.status(500).send('Error adding file');
    }
});

app.put('/posts/:foldername/:postid',async function(req,res){
    
    const foldername = req.params.foldername;
    const postid = req.params.postid;
    const filecontent = req.body.filecontent;

    const folderpath = path.join(__dirname, 'Posts', foldername);
    const filepath = path.join(folderpath, postid);

    try{
        await fs.appendFile(filepath,filecontent);
        res.status(201).send('File updated successfully');
    }
    catch(err){
        console.error('Error updating file:', err);
        res.status(500).send('Error updating file');
    }
})

app.delete('/posts/:foldername/:postid',async function(req,res){
    const foldername = req.params.foldername;
    const postid = req.params.postid;

    const folderpath = path.join(__dirname, 'Posts', foldername);
    const filepath = path.join(folderpath, postid);

    try {
        await fs.unlink(filepath);
        await fs.rmdir(folderpath, { recursive: true })
        res.status(200).send('File and folder deleted successfully'); // Use 200 for successful deletion
    } catch (err) {
        console.error('Error deleting file:', err);
        res.status(500).send('Error deleting file');
    }
})

app.listen(3000);