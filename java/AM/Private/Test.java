package AM.Private;

public class Test {
    
      private  int a=100;
      private void m1(){
          System.out.println("private method -m1()");

      }
      public static void main (String[]args){
          Test t=new Test();
          System.out.println(t.a);
          t.m1();
      }
    }
    

