class convertbinary
{
    public static void run(int a)
    {
        String binary = "";
        int re , i = 1;
        while(a!=0)
        {
            re = a % 2;
            a = a / 2;
            binary = re + binary;
            // binary = binary + re * i;
            // i = i * 10;
        }      
        System.out.print("binary : "+binary);

    }
    public static void main(String args[] )
    {
        int a = 7;
        run(a);

    }
}