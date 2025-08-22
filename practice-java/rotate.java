class rotate
{
    public static void solution(int nums[] ,int k)
    {
        int n = nums.length;
        k=k % n;
        for(int i=n-k; i<n; i++)
        {
            System.out.print(nums[i]+" ");
        }
        for(int j=0;j<n-k;j++)
        {
            System.out.print(nums[j]+" ");
        }
    }
    public static void main(String args[])
    {
        int nums[]={5,4,3,2,1,6,7,8};
        int key = 3;
        solution(nums,key);

    }
}   