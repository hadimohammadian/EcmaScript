const person = {

    firstName : "Hadi",
    lastName : "Mohammadian",
    age : 37,
    email : "Hadimohammadian83@gmail.com",

    fullName : function(){

        return this.firstName  + " " + this.lastName ; 
    },

    contact : function(){

        return this.firstName  + " " + this.lastName + " : " + this.age + "  ==>> " + this.email;
    },

    data : function (){
        return this.fullName + "<br> " + this.contact;
    }

}

 

console.log(person.fullName());
console.log(person.contact());
console.log(person.data());
