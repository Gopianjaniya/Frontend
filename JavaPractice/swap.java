import java.util. Scanner;
class swap
{
    public static void run(int a , int b)
    {
        // int temp = a;
        // a = b;
        // b = temp;
        
        a = a^b;
        b = a^b;
        a = a^b;
        
        System.out.println("A : "+a);
        System.out.println("B : "+b);
    }

    public static void main(String args [])
    {
       Scanner sc =new Scanner(System.in);
       System.out.print("Enter A number : ");
       int num1 = sc.nextInt();
       System.out.print("Entere second number : ");
       int num2 = sc.nextInt();
       run(num1, num2);
       
       

    }
}