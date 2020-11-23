
class Employee{

    firstname;
    lastname;
    degree;
    clock;

    constructor (fn,ln,deg,clk){

        this.firstname = fn;
        this.lastname=ln;
        this.degree = deg;
        this.clock = clk;


    }

    sallery(){

        if(this.degree == "phd")
        {
            console.log(this.clock * 50000);
        }
        else if(this.degree == "master")
        {
            console.log(this.clock * 40000);
        }
        else if(this.degree == "batchlur")
        {
            console.log(this.clock * 30000);
        }
        else if (this.degree == "diploma")
        {
            console.log(this.clock * 20000);
        }
        

    }
}

 
const person01 = new Employee("hadi","mohammadian", "master" , 172);
person01.sallery();

