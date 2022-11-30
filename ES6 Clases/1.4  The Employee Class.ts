class employee{
    id : number
    firstName : string
    lastName : string
    salary : number

    constructor(id : number, firstName : string, lastName : string, salary : number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    GetId():number  { return this.id; }
    GetFirstName():string { return this.firstName; }    
    GetLastName():string { return this.lastName; }
    GetName():string { return `${this.firstName} ${this.lastName}`; }
    GetSalary():number { return this.salary; }
    GetAnnulaSalary():number { return this.salary * 12; }
    RaiseSalary(bonus:number):number { return this.salary += this.salary * bonus;}
    ToString():string { return `Employee [Id = ${this.id}, Name = ${this.firstName} ${this.lastName},Salary = ${this.salary}]`}
}