class bank_cust{
min_balance=500;
constructor(a,b,c,d){
    this.acc_no=a;
    this.acc_name=b;
    this.email=c;
    this.amount=d;
    console.log("constructor executed automatically")
}
open_account(){
    console.log("account open successfully");
}
}
let c1=new bank_cust(101,"karna","karna@tcs.com",2000)
console.log(c1)
let c2=new bank_cust(104,"surya","surya@fire.com",4000)
console.log(c2)