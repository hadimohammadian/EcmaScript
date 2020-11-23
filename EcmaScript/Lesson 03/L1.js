class Human{

    firstName;
    lastName;
    age;

    constructor(fn,ln,age){

        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    fullName(){
        console.log(`My FullName is ${this.firstName +" " +this.lastName}`);
    }
}


const obj1 = new Human();
obj1.firstName = "hadi";
obj1.lastName = "Mohammadian";
obj1.age = 37 ;

console.log(obj1);
console.log(`My firstname is : ${obj1.firstName} and last name is : ${obj1.lastName} and my age is : ${obj1.age}`);

obj1.fullName();

const obj2 = new Human("sara","Adabi", 33);
console.log(obj2);