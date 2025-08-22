class majority
{
    public static int search(int nums [])
    {
        int count = 0;
        int candidate = 0;
        for(int i=0;i<nums.length;i++) //3,2,2,3,3
        {
          if(count == 0)
          {
            candidate = nums[i];
          }
          if(candidate==nums[i])
          {
            count++;
          }else
          {
            count--;
          }   
        }
        return candidate;
    }
    public static void main(String argd[])
    {
        int nums[] ={3,2,2,3,3,2,2};
        
       int result = search(nums);
      System.out.print(result);

    }
}