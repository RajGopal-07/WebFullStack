class order {
mobile_name ;
color;
Price;
constructor(a,b,c){
    this.mobile_name=a;
    this.color=b;
    this.price=c;
}
cancel_order(){
    console.log("order canceled successfully")
    return "";
}
}
let order1= new order("Iphone 5s","red",45000)
console.log(order1)
console.log(order1.mobile_name)
order1.cancel_order()