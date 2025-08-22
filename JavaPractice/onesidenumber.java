class onesidenumber
{
    public static void pattern(int n)
    {
        
        for(int i= n; i>=1;i--)
        {
            for(int j=1;j<=n-i;j++)
            {
                
                System.out.print(j+" ");
            }
             
            System.out.println();
             
        }

        System.out.println("-------------------------------------");
        for(int i= 1; i<=n;i++)
        {
            for(int j=1;j<=n-i;j++)
            {
                
                System.out.print(j+" ");
            }
             
            System.out.println();
             
        }


        System.out.println("-----------------3--------------------");
        
        int c = 1;
        for(int i= n; i>=1;i--)
        {
           
            for(int j=n-i;j>=1;j--)
            {
                
                System.out.print(c+" ");
                c++;
                
            }
            
            System.out.println();
             
        }


        System.out.println("-----------------4--------------------");
        
        
        for(int i=1; i<=n;i++)
        {
              
            for(int j=1;j<=i;j++)
            {
                
                if((i+j) % 2 == 0)
                {
                System.out.print("1 ");
                }else
                {
                System.out.print("0 ");
                }
                
            }
            
            System.out.println();
             
        }


        System.out.println("-----------------7--------------------");
        
        
        for(int i=1; i<=n;i++)
        {
              
            for(int j=1;j<=2*(n-i);j++)
            {
               System.out.print(" ");              
            }            
             

            for(int j=i ;j>=1;j--)
            {
               System.out.print(j+" ");              
            }
            
            for(int j = 2;j<= i;j++)
            {
                System.out.print(j+" ");
            }


            System.out.println();
             
        }
        System.out.println("-----------------8--------------------");        

        for(int i=0;i<=n;i++)
        {
            for(int j=0;j<=n-i;j++)
            {
                System.out.print(" ");
            }
            for(int j=0;j<=n;j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }

        System.out.println("-----------------9--------------------");     

        for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n-i;j++)
            {
                System.out.print(" ");
            }
            for(int j=2;j<=i;j++)
            {
                System.out.print("*");
            }
            for(int j =1;j<=i;j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n-1;i>=1;i--)
        {
            for(int j=1;j<=n-i;j++)
            {
                System.out.print(" ");
            }
            for(int j=1;j<=i;j++)
            {
                System.out.print("*");
            }
           for(int j=2;j<=i;j++)
            {
                System.out.print("*");
            }
            System.out.println();
        }
        
    }
    public static void main(String args[])
    {

        int n=7;
        pattern(n);
    }
}