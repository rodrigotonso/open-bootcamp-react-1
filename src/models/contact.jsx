export class Contact {
    firstName = "";
    lastName = "";
    email = "";
    connect = false;

    constructor(firstName, lastName, email, connect) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.connect = connect;
    }
}
