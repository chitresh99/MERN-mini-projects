const express = require('express');
const app = express();
app.use(express.json());

//front page
app.get('/frontpage', function (req, res) {
    res.send(
        "Welcome to our owner side store"
    )
})

let data = [{
    bookid: 1,
    bookname: "tradinglogic",
    authorname: "chitresh",
}, {
    bookid: 2,
    bookname: "mllogic",
    authorname: "chitresh",
},{
    bookid: 3,
    bookname: "dsalogic",
    authorname: "chitresh",
}];

console.log(JSON.stringify(data));

app.post('/createbook', function (req, res) {
    response = {
        bookname: req.body.bookname,
        authorname: req.body.authorname
    };
    console.log(response);
    res.send(JSON.stringify(response));

})

app.put('/updatebook/data/:id', function (req, res) {
// const id = req.params.bookid;
// const updatedata = req.body;

// if(data.bookid !== parseInt(id)){
// return res.status(404).send("Data not found");
// }

// data = { ...data, ...updatedata };

// res.json(data);

const id = parseInt(req.params.id);
const { bookname, authorname } = req.body;


const book = data.find(b => b.bookid === id);

if (!book) {
    return res.status(404).send("Data not found");
}


book.bookname = bookname || book.bookname;
book.authorname = authorname || book.authorname;

res.json(book);
});

app.delete('/deletebook/data/:id',function(req,res){
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.bookid === id);
    
    // to check if data exists
    if(index === -1){
     return res.status(404).send("Data not found");
    }
    
    //removing data from the array
    data.splice(index,1)

    res.json({
        "message":"data deleted succesfully"
    })

    console.log(JSON.stringify(data));
});


app.listen(3000);