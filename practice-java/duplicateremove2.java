class duplicateremove2 
{
    public static int removeDuplicates(int[] nums)
     {
        int i = 0;
        for (int n : nums) 
        {
            if (i < 2 || n != nums[i - 2]) 
            {
                nums[i++] = n;
            }
        }
        return i;
    }

    public static void main(String args[])
    {
        int nums[] = { 2,2,2,3,3,3,3,4,4,4,5,5,6,6,6,6,7,7,7 };
         System.out.println(removeDuplicates(nums));
       
    }
}