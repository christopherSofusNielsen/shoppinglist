class Logger{

    info(msg){
        console.log(msg)
    }

    error(msg){
        console.log("ERROR:\n"+msg);
    }

}

module.exports=Logger;