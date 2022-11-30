class Person{
    name: string
    address: string

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

    GetName():string {return this.name}
    GetAddress():string {return this.address}
    SetAddress(address:string){this.address = address}
    ToString():string { return `Person [ Name = ${this.name}, Address = ${this.address},  ]` }
}



class Student extends Person {
    program: string;
    year: number;
    fee: number;
    
    constructor(name:string, Address:string,program: string, year: number, fee: number){
        super (name, Address)
        this.program = program
        this.year = year
        this.fee = fee
    }
    
    get Program():string {return this.program}
    set Program(program:string){this.program = program}

    get Year():number {return this.year}
    set Year(year:number){this.year = year}

    get Fee():number {return this.fee} 
    set Fee(fee:number){this.fee = fee}

    ToString(): string {
            return ` Student[ Person [ Name = ${this.name}, Address = ${this.address}], Programm = ${this.program}, Year = ${this.year}, Fee = ${this.fee}  ] `
    }

}


class Staff extends Person {

    school: string
    pay:number

    constructor(name:string, address:string,school:string, pay:number){

        super(name,address)
        this.school = school
        this.pay = pay

    }

    get School():string{return this.school}
    set School(newSchool:string){this.school = newSchool}

    get Pay():number{return this.pay}
    set Pay(newPay:number){this.pay = newPay}

    ToString(): string {
        return ` Staff [ Person [ Name = ${this.name}, Address = ${this.address} ], School = ${this.school}, Pay = ${this.pay} ] `
    }


}










