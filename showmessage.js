const readlineSync = require('readline-sync'); 

function viewContact(){
    console.log("view contact");
}

function addContact(){
    console.log("add contact");
}

function editContact(){ 
    console.log("edit contact");
}

function deleteContact() {
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