const fs = require('fs');

fs.readdir('./files/',(err,files)=>{
    if(err){
        console.log(err);
        return ;
    }
    console.log(files)
    // }else{
    //     files.forEach(file =>{
    //         console.log(file)
    //     })
    // }
});
