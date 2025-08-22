class solution
{
    public  int remove(int[] num ,int val)
    {
       int index=0;
       for(int i=0;i<num.length;i++)
       {
        if(num[i]!=val)
        {
           num[index++]=num[i];
        }
    }
    return index;
    }
    public static void main(String[] args) 
    {
      int num[] = {0,2,3,5,3,6,3};
      solution s = new solution();
      int result = s.remove(num,3); 
     for(int i=0;i<result;i++)
     {
        System.out.print(num[i]+" ");
     }
      
    }
}