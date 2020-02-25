const fs = require('fs');

function readFile(){
    let content = fs.readFileSync('data.json' , 'utf8');
    try {
        content = JSON.parse(content);
        return content;
    } catch (error) {
        // console.log("dd");
        return false;
    }
    // return content;
}

function resultObj(){
    this.readFile = readFile();
    // appendFile : appendFile(),
    // deleteFile : deleteFile(),
    // saveFile   : saveFile()
}

resultObj.prototype.appendFile = function appendFile(obj){

    let oldContent = readFile();

    if(oldContent){

        console.log(content);
        

    }else{
        return false
    }

}

resultObj.prototype.deleteFile = function deleteFile(id){

}

resultObj.prototype.saveFile = function saveFile(obj){
    
}

module.exports = new resultObj();