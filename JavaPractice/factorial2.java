class factorial2
{
    public static void run(int num)
    {
        int fact = 1;
        for(int i=num; i>1;i--)
        {
            fact=fact*i;
        }
        System.out.print("factorial is :   "+fact);
    }
    public static void main(String args[])
    {
        int num = 1  ;
        run(num);

    }
}