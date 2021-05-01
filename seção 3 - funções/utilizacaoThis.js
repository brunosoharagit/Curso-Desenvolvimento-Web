var person = {
    firstName: "Bruno",
    lastName: "Sohara",
    
    fullName: function(){
        console.log(this.firstName + ' ' + this.lastName);

        /*
        Pode ser escrito desta forma
        console.log(person.name + ' ' + person.lastName)
        */
    }
}


person.fullName()