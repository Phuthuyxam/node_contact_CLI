const readlineSync = require('readline-sync'); 
const controller = require('./Controller');
const Table = require('cli-table');


function viewContact(){
    let allContact = controller.readFile;

    var table = new Table({
        head: ['Name', 'Phone']
      , colWidths: [60, 60]
    });
   if(allContact.length > 0){
        let allContact_ = JSON.parse( JSON.stringify(allContact));
        allContact_.map((x) => { 
            table.push(
                [x.name, x.phone]
            );
        });    
        console.log(table.toString());
   }
}

function addContact(){
    controller.appendFile();
    console.log("<==== add complete! ====>");
}

function enterName(){
    let enterName = readlineSync.question("Enter name! ");
    controller.editByName(enterName);

}

function editContact(){
    console.log("1. Enter name contact");
    console.log("2. View all contact");

    let editcontactChoose = readlineSync.question("Enter you choose!: ");
    
    if( editcontactChoose == "1" ){
        enterName();
    }else{
        if(editcontactChoose == "2"){
            viewContact();
            enterName();
        }else{
            console.log("No option for you choose!");
            showMess();
        }
    }


}

function deleteContact() {

    console.log("1. Enter name contact");
    console.log("2. View all contact");

    let editcontactChoose = readlineSync.question("Enter you choose!: ");
    
    if( editcontactChoose == "1" ){
        let enterName = readlineSync.question("Enter name! ");
        controller.deleteFile(enterName);
    }else{
        if(editcontactChoose == "2"){
            viewContact();
            
        }else{
            console.log("No option for you choose!");
            showMess();
        }
    }

    console.log("delete contact");
}

function findContact(){
    console.log("findconatc");
}

function exitfunc(){
    console.log("exit");
}

let Mess = function showMess(){
    console.log("1. Xem danh bạ");
    console.log("2. Nhập dữ liệu (name , phone number)");
    console.log("3. Sửa dữ liệu contact");
    console.log("4. Xóa contact");
    console.log("5. Tìm kiếm contact");
    console.log("0. exit!");
    let choose = readlineSync.question("==== Enter you selection: ");

    switch (choose) {
        case "1":
            viewContact();
            showMess();
            break;
        case "2":
            addContact();
            showMess();
            break;
        case "3":
            editContact();
            showMess();
            break;
        case "4":
            deleteContact();
            showMess();
            break;
        case "5":
            findContact();
            showMess();
            break;
        case "0":
            exitfunc();
        default:
            console.log("=== The request is not valid ===");
            showMess();
            break;
    }
}

module.exports = Mess; 