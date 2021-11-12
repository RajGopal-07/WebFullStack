class account{
    open_account(){
        console.log("account open successfully");
    }
    close_account(){
        console.log("closing account successfully")
    }
}
class saving_account extends account{
    savings(){
        console.log("savings");
    }
}
let s1 =new saving_account();
s1.open_account();
s1.savings();
s1.close_account();

class salary_account extends account{
    salary(){
        console.log("salary account")
    }
}
console.log("................")
let s2 =new salary_account();
s2.open_account();
s2.salary();
s2.close_account();

class current_account extends account{
    current(){
        console.log("current account");
    }
    
    }
console.log(".................")
let s3 =new current_account();
s3.open_account();
s3.current();
s3.close_account();