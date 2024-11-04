const fs = require('fs');

fs.mkdir('rappers',{recursive:true},err =>{
    if(err){
        throw(err);
    }
    else{
        console.log('Directory created')
    }
})

const data = new Uint8Array(Buffer.from('Hello krsna'));
fs.writeFile('./rappers/krsna.txt',data,(err)=> {
if(err){
    throw(err);
}
else{
    console.log('file written');
}
})

fs.readFile('./rappers/krsna.txt','utf8',(err,data)=>{
    if(err){
      throw(err);
    }else{
        console.log(data)
    }
})