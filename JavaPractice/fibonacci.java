class fibonacci
{
 
    public static void run(int n)
    {
        int num1=0,num2=1,num3=1,sum=0;
        System.out.print(num1 +" ");
        for(int i=0;i<n;i++)
        {
             
            System.out.print(num3+" ");
            sum = sum + num3;
            num3 = num1+num2;
            num1 = num2;
            num2 = num3;


        }
         
        System.out.print("sum : "+sum);

        
    }

     public static void main(String args[])
    {
         int n = 7;
         run(n);
    }
}