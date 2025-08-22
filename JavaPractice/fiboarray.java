class fiboarray
{

    public static void run(int n)
    {
       

        int fib[] = new int[n*2+1];
        fib[0] = 0;
        fib[1] = 1;
        int sum=0;
 
        System.out.print(fib[0]+" "+fib[1]+" ");
        for(int i=2; i<=n*2;i++)
        {
            fib[i] = fib[i-1] + fib[i-2];

            System.out.print(fib[i]+" ");
            if(i % 2 == 0)
            {
              sum = sum + fib[i];
            }
        }

        System.out.print("sum : "+sum);


    }
    public static void main(String args[])
    {
          int n= 4;
          run(n);
    }
}