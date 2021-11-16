package AM.Final;
    class P{
    public void getname(){
        System.out.println("final Parent class-getname method");
    }
    }
    class C extends P{
       public void getname(){
           System.out.println("Child class");

       
    }
    public static void main (String[]args){
        C obj = new C(); //implementing
        obj.getname();
        
    }
}

