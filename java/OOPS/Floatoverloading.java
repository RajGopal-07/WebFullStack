public class Floatoverloading {
    public void m1(float f){
        System.out.println("float arguments");
    }
    public static void main(String[]args){
        Demo d =new Demo();
        d.m1('a');
      
        d.m1(10);

    }
}
