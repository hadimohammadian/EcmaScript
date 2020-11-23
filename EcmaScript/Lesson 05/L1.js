class Circle{

    static reduis;

    static getArea(){

        return Math.PI*Math.pow(Circle.reduis,2);

    }

    static getEnv(){
        return Math.PI * Circle.reduis *2; 
    }

}

Circle.reduis = 5;
console.log(Circle.getArea());
console.log(Circle.getEnv());