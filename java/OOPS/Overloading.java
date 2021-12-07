class Demo{
    public void m1(String string){
        System.out.println("no-arguments");
    }
    public void m1(int i){
        System.out.println("double arguments");
        System.out.println(i);

    }
    public static void main(String[]args) {
      Demo d=new Demo();
      d.m1(null);
        d.m1(10);
        d.m1('A');
    }
}