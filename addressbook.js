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
        this.firstName = args[0];
        this.lastName = args[1];
        this.address = args[2];
        this.city = args[3];
        this.state = args[4];
        this.zip = args[5];
        this.phoneNumber = args[6];
        this.email = args[7];
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

let addressbook = new AddressBook("Akash", "Shevgan", "hadapsar", "pune", "maharastra", 412307, 8793447817, "akashshevgan11@gmail.com");
console.log(addressbook.toString()); 