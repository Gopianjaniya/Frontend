class solution2
{
 public int removeDuplicate(int [] nums)
    {
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length-i-1;j++)
            {
               if(nums[j] > nums[j+1])
               {
                int temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                
               } 
            }
            
        }
        int uindex = 1;
        for(int i=1;i<nums.length;i++)
        {
            if(nums[i]!=nums[i-1])
            {
                nums[uindex] = nums[i];
                uindex++;
            }
        }

        for(int i=0;i<uindex;i++)
        {
            System.out.print(nums[i]+" ");
        }
        return uindex;
    }
    
}

class removedupli
{
    public static void main(String args[])
    {
        int nums[] = {2,6,3,4,6,4,1,2,1,2};
        solution2 s =new solution2();
         s.removeDuplicate(nums);
     


    }
}