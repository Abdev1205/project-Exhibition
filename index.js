let {PythonShell} = require("python-shell");
let option ={
    args:["Abhay","Mishra"]
};

PythonShell.run('app.py',option,function(err,results){
    if(err){
        console.log(err);
    }
    else{
        console.log(results);
        console.log(`Python script Finished`);

    }

})
