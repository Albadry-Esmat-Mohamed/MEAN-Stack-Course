abstract class Shape {

    color: string;
    filled: boolean;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }

    get Color(): string { return this.color; }
    set Color(newColor: string) { this.color = newColor; }

    IsFilled(): boolean { return this.filled}
    set Filled(value: boolean) { this.filled = value; }

    abstract GetArea(): number  
    abstract GetPrimeter(): number

    ToString(): string { return ` Shape [ Collor = ${this.Color}, Filled = ${this.filled} ] ` };


};


class Circle extends Shape {
    
    
    radius: number
    
    constructor(color: string, filled: boolean , radius: number){
        
        super(color, filled);
        this.radius = radius;

    }

    get Radius(): number {return this.radius;}
    set Radius(value: number){ this.radius = value; }
    
    GetArea(): number { return 3.14* this.radius * this.radius ; }
    GetPrimeter(): number { return 2 * 3.14 * this.radius}

    ToString(): string { return ` Circle [ Shape = [ Color = ${this.Color}, Filled = ${this.filled} ], Radius = ${this.radius} ] ` }

}



class Rectangle extends Shape {

    width: number
    length: number

    constructor( color:string, filled:boolean, width: number, height: number){

        super(color, filled)
        this.width = width
        this.length = height

    }

    get Width(): number {return this.width}
    set Width(value:number) {this.width = value}

    get Height(): number {return this.length}
    set Height(value:number) {this.length = value}




    GetArea(): number {return this.width * this.length}

    GetPrimeter(): number {
        return (this.width + this.length) *2
    }


        

}






















