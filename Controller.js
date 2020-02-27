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

function findName(name){
    
    let oldContent = readFile();


    // console.log(oldContent);
    
    if(oldContent){
        // oldContent = oldContent.toString();
        try {
            let objContent = JSON.parse(JSON.stringify(oldContent));    
            
            let found = objContent.find((element) => {
                return element.name = name;
            });

            return found ? found : false;

        } catch (error) {
            return false;
        }
        

    }else{
        return false;
    }


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

resultObj.prototype.deleteFile = function deleteFile(name){
    let obj = findName(name);
    if(obj){
        let oldContent = readFile();
        let objContent = JSON.parse(JSON.stringify(oldContent));

        for (let i = 0;  i < objContent.length ; i++ ) {
            if( objContent[i].name === name ) {
                objContent.splice(i, 1);
            }
        }
        let objWrite = JSON.stringify(objContent);
        fs.writeFileSync('data.json',objWrite,'utf8');

    }else{
        return false;
    }
}

resultObj.prototype.saveFile = function saveFile(obj){

}

resultObj.prototype.editByName = function editContact(name){
    let obj = findName(name);

    if(obj){

        let newName = readlineSync.question("Enter new name: ");
        let newPhone = readlineSync.question("Enter new phone: ");

        let oldContent = readFile();
        let objContent = JSON.parse(JSON.stringify(oldContent));

        for (let i = 0;  i < objContent.length ; i++ ) {
            if( objContent[i].name === name ) {
                objContent[i]['name'] = newName;
                objContent[i]['phone'] = newPhone;
            }
        }
        let objWrite = JSON.stringify(objContent);
        fs.writeFileSync('data.json',objWrite,'utf8');

    }else{
        return false;
    }
}



module.exports = new resultObj();