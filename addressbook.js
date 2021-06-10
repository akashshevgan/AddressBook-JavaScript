const regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
const regex_for_address = new RegExp('[A-Z]{1}[a-z]');
const regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
const regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
const regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

class AddressBook {
    constructor (...args) {
        this.firstName = args[0];
        this.lastName = args[1];
        this.address = args[2];
        this.city = args[3];
        this.state = args[4];
        this.zip = args[5];
        this.phoneNumber = args[6];
        this.email = args[7];
    }

    get getfirstName() {
        return this.firstName;
    }

    set setfirstName(firstName) {
        if (regex_for_name.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Invalid First Name";
        }
    }

    get getlastName() {
        return this.lastName;
    }

    set setlastName(lastName) {
        if (regex_for_name.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Invalid Last Name";
        }
    }

    get getaddress() {
        return this.address;
    }

    set setaddress(address) {
        if (regex_for_address.test(address)) {
            this.address = address;
        }
        else {
            throw "Invalid Address";
        }
    }
        
    get getcity(){ 
        return this.city; 
    }

    set setcity(city){ 
        if(regex_for_address.test(city)){
            this.city = city;
        }
        else{
            throw "Invalid City";
        }
    }

    get getstate(){
         return this.state;
     }

    set setstate(state){
        if(regex_for_address.test(state)){
            this.state = state;
        }
        else{
            throw "State is Incorrect";
        }
    }

    get getzip(){ 
        return this.zip; 
    }

    set setzip(zip){
        if(regex_for_zip.test(zip)){
            this.zip = zip;
        }
        else{
            throw "Invalid Zip";
        }
    }

    get getphoneNumber(){ 
        return this.phoneNumber;
     }

    set setphoneNumber(phoneNumber){
        if(regex_for_phoneNumber.test(phoneNumber)){
            this.phoneNumber = phoneNumber;
        }
        else{
            throw "Phone Number is Incorrect";
        }
    }

    get getemail(){
         return this.email;
    }

    set setemail(email){
        if(regex_for_email.test(email)){
            this.email = email;
        }
        else{
            throw "Invalid Email";
        }
    }

        
    toString() {
        return "FirstName = " + this.firstName + 
                " \nLastName = " + this.lastName + 
                " \nAddress = " + this.address + 
                " \nCity = " + this.city + 
                " \nState = " + this.state + 
                " \nZip = " + this.zip + 
                " \nPhoneNumber = " + this.phoneNumber + 
                " \nEmail = " + this.email;
    }

}

let addressBook = [];
try {
    let contact1 = new AddressBook("Akash", "Rajput", "Hadapsar", "Pune", "Maharashtra", 412307, 8793447817, "akashshevgan@gmail.com");
    let contact2 = new AddressBook("Yogesh", "Patil", "Gangapur", "Aurangabad", "Maharashtra", 400088, 9011871426, "yogeshpatil@gmail.com");
    let contact3 = new AddressBook("Pankaj", "Tripathi", "Mirzapur", "Gaziyabad", "Uttarpradesh", 400031, 9922347002, "pankajt@gmail.com");

    addressBook.push(contact1);
    addressBook.push(contact2);
    addressBook.push(contact3);
    console.log(addressBook);

    if (addressBook.find(name => name.firstName == "Akash")) {
        let id = addressBook.findIndex(name => name.firstName == "Akash");
        addressBook[id].setfirstName = "Sagar";
        console.log("Contacts after Editing are : ");
        console.log(addressBook);
    }
    else{
        console.log("This Contact is not available in the AddressBook");
    }

    if (addressBook.find(name => name.firstName == 'Sagar')) {
        let id = addressBook.findIndex(name => name.firstName == 'Sagar');
        addressBook.splice(id,1)
        console.log("After deletion contacts available are : " );
        console.log(addressBook);
        console.log("Size after deletion is : " + addressBook.length);
    }
}
catch (e) {
    console.error(e);
}