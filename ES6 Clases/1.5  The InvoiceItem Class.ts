class InvoiceItem{
    id: string
    desc:string
    qty:number
    unitPrice:number

    constructor(id:string, desc:string, qty:number, unitPrice:number){

        this.id = id;
        this.desc = desc;
        this.qty = qty; 
        this.unitPrice = unitPrice;
        }

        GetId() :string { return this.id; }
        GetDesc() :string { return this.desc; }
        GetQuantity() :number { return this.qty; }

        setQuantity(newqty){this.qty = newqty;}
        GetUnitPrice() :number { return this.unitPrice; }
        SetUnitPrice(newunitPrice){this.unitPrice = newunitPrice}
        GetTotal() :number { return this.unitPrice * this.qty; }
        ToString() :string { return `InvoiceItem [ Id = ${this.id}, Desc = ${this.desc}, UnitPrice = ${this.unitPrice} ]`}
        


}