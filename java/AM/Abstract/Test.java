package AM.Abstract;
abstract class A{
    abstract void getname();//defined class
}

public class Test extends A{         //child class

    public void getname(){
        System.out.println("get name method");
   
      
        System.out.println("get name");
    
        
    }
    public static void main(String[]args){
        System.out.println("hii....?");
        Test t=new Test();
        t.getname();

    }
    
}
