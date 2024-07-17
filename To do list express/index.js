// var users = [{
//     name:chitresh,
//     metadata:{   //metadata is an object in itselfs
//     profilepicture : "",
//     pronouns:"he/us",
//     address:{

//     }
//     }
// }]

const express = require("express");
const app = express();

//very important line for post request
app.use(express.json()); 

//user array

const users = [{
    name : "chitresh",
    kidneys:[{
        healthy:false
    }]
}];

// Problem Statement :- 

//get :- users can check how many kidneys they have and their health
//post :- users can add a new kidney
//put :- users can replace the kidney and make it healthu
//delete :- users can remove a kidney

app.get('/damn',function(req,res){
    res.send("hola at your boy");
})

// Query parameters in get request
app.get('/',function(req,res){
    const chitreshkidneys = users[0].kidneys;
    const numberofkidneys = chitreshkidneys.length;


    let numberofhealthykidneys = 0; 
    //.length -> returns no of characters in a string
    //.length -> returns no of elements in an array

    for(let i = 0; i < chitreshkidneys.length;i++){
        if(chitreshkidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }

    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys
    res.json({
        numberofkidneys,
        numberofunhealthykidneys,
        numberofhealthykidneys,
    });
})

//pushing a new kidney 
// body parameter in post request
app.post('/',function(req,res){
  const ishealthy = req.body.ishealthy;
  users[0].kidneys.push({
    healthy:ishealthy
  })
  res.json({
    msg:"Done"
  })
})

//replace all kidneys and make it healthy

app.put('/',function(req,res){
    for(let i = 0; i < users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({}) //this is must
})


//removing all the kidneys
// amytime i find a healthy kidney push that to the new kidneys array

app.delete('/',function(req,res){
    
    if(isthereatleastoneunhealthykidney()) {
        const newkidneys = []; //empty array

        //iterate over all the kidneys
        for(let i = 0; i < users[0].kidneys.length;i++){
    
          if(users[0].kidneys[i].healthy){ //kidney is healthy
            newkidneys.push({
                healthy:true
            })
          }
        }
        users[0].kidneys = newkidneys;
        res.json({msg:"done"});
    }
    else{
       res.status(411).json({
        msg: "you have no bad kidney"
       });
    }
    
    
})

function isthereatleastoneunhealthykidney(){
    //edge case

    
    //when ever there comes a request to delete a unhealty kidneys when 
    // there are no unhealty kidneys you should return a
    // status code 411 :- wrong input 

    let atleastoneunhealtykidney = false;
    for(let i = 0; i < users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealtykidney = true;
        }
    }
    return atleastoneunhealtykidney;
}



app.listen(3000);