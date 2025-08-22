class mycode {
    public int[] twoSum(int[] nums, int target) 
    {
        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
                if(nums[i]==target -nums[j])
                return new int[] {i,j};
            }
        }
        return new int[] {};
    }
    public static void main(String[] args) 
    {
       
        mycode mc = new mycode();
       int [] nums = {3,2,5,1};
       int target = 6;
       int result[] =mc.twoSum(nums, target);
       System.out.println(result[0] + "," +result[1 ]);
    }
}