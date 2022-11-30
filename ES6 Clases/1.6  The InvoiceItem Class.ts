class Account{


    id : string
    name : string
    balance:number = 0
    
    constructor(id : string, name : string, balance:number){
        this.id = id
        this.name = name
        this.balance = balance
    }

    GetId(): string {return this.id}
    GetName(): string {return this.name}
    GetBalance(): number {return this.balance}
    Credit(amount:number):number {return this.balance += amount}
    Depit(amount:number):number {
        if (amount <= this.balance) return this.balance -= amount
        else {
            console.log("amount Exceeds balance");
            return this.balance
        }
    }
    TransferTo(Account:Account, amount:number):number 
    {
        if (amount <= this.balance)
        {
            this.balance -= amount
            Account.balance += amount
            return this.balance
        }
        else{
            console.log("amount Exceeds balance");
            return this.balance
        }
    }

    ToString():string{
    return `Account [ id = ${this.id}, name = ${this.name}, Palance = ${this.balance} ]`
    }
    

}