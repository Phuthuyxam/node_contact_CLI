const fs = require('fs');
const readlineSync = require('readline-sync'); 
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

function createContact(){
    let name = readlineSync.question("Enter contact name: ");
    let phone = readlineSync.question("Enter you phone: ");

    let objWrite = {'name': name,'phone': phone };
    return objWrite;
}

resultObj.prototype.appendFile = function appendFile(obj){

    let oldContent = readFile();

    if(oldContent){
        // oldContent = oldContent.toString();
        try {
            let objContent = JSON.parse(JSON.stringify(oldContent));
            objContent = JSON.parse(objContent);
            let newContact = createContact();
            objContent.push(newContact);
            objWrite = JSON.stringify(objContent);
            // console.log(typeof(objContent));
            fs.writeFileSync('data.json',objWrite,'utf8');
            
        } catch (error) {
            return new Error('can not convert data to json');
        }
        

    }else{

        objWrite = createContact();
        objWrite = [objWrite];
        objWrite = JSON.stringify(objWrite);

        fs.writeFileSync('data.json',objWrite,'utf8');
        
    }

}

resultObj.prototype.deleteFile = function deleteFile(id){

}

resultObj.prototype.saveFile = function saveFile(obj){
    
}

module.exports = new resultObj();