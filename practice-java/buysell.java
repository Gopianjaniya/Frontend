class buysell
{
    
    public static int solution(int []prices)
    {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        int secPrice = Integer.MAX_VALUE;

       for(int price : prices)
       {
            minPrice =   Math.min(minPrice,price);
            secPrice = minPrice;
            secPrice = Math.min(secPrice,minPrice);
            int profit = price - minPrice;

             maxProfit = Math.max(maxProfit,profit);
       }
       System.out.println(secPrice);
       return maxProfit;
    } 
    public static void main(String args[])
    {
        int p []= {7,1,5,3,6,7}; 
        int result = solution(p);
        // stem.out.println(result);
    }
}