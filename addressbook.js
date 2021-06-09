class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor (...args) {
        let regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
        let regex_for_address = new RegExp('[A-Z]{1}[a-z]');
        let regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
        let regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/);
        let regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

        if(regex_for_name.test(args[0]) && regex_for_name.test(args[1])){
            this.firstName = args[0];
            this.lastName = args[1];
        }
        else{
            throw "Invalid Name";
        }

        if (regex_for_address.test(args[2]) && regex_for_address.test(args[3]) && regex_for_address.test(args[4])) {
            this.address = args[2];
            this.city = args[3];
            this.state = args[4];
        }
        else{
            throw "Invalid Address";
        }

        if (regex_for_zip.test(args[5])) {
            this.zip = args[5];
        }
        else {
            throw "Invalid Zip Code";
        }

        if (regex_for_phoneNumber.test(args[6])) {
            this.phoneNumber = args[6];            
        }
        else {
            throw "Invalid Phone Number";
        }

        if (regex_for_email.test(args[7])) {
            this.email = args[7];
        }
        else {
            throw "Invalid Email";
        }
    }
    

    toString() {
        return "First Name = " + this.firstName + 
                " \nLast Name = " + this.lastName + 
                " \nAddress = " + this.address + 
                " \nCity = " + this.city + 
                " \nState = " + this.state + 
                " \nZip = " + this.zip + 
                " \nPhoneNumber = " + this.phoneNumber + 
                " \nEmail = " + this.email;
    }
}


try {
    let addressbook = new AddressBook("Akash", "Shevgan", "Hadapsar", "Pune", "Maharashtra", 412307, 8793447817, "akashshevgan11@gmail.com");
    console.log(addressbook.toString());
}
catch (e) {
    console.error(e);
} 