
class Humen{
    firstname;
    lastname;

    constructor (fn,ln,deg,clk){

        this.firstname = fn;
        this.lastname=ln;
      
    }

    info(){
        return this.firstname + " " + this.lastname;

    }

}


class Employee extends Humen{

    
    degree;
    clock;

    constructor (fn,ln,deg,clk){

super(fn,ln);

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
console.log(person01.info());
person01.sallery();

