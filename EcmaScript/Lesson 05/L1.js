class Circle{

    static reduis;
    varradius;

    static getArea(){

        return Math.PI*Math.pow(Circle.reduis,2);

    }

    static getEnv(){
        return Math.PI * Circle.reduis *2; 
    }

    getArea(){
        return Math.PI*Math.pow(this.varradius,2);
    }

}

Circle.reduis = 5;
console.log(Circle.getArea());
console.log(Circle.getEnv());

let pp = new Circle();
pp.varradius = 5;
console.log(pp.getArea());