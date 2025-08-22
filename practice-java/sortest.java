 class sortest
 {
    int [] math(int [] num)
    {
        int n=num.length;
        
        for (int i = 0; i < n - 1; i++)
         {
                        for (int j = 0; j < n - i - 1; j++) 
                        {
                            if (num[j] > num[j + 1]) 
                            { // Swap if the current element is greater
                                int temp = num[j];
                                num[j] = num[j + 1];
                                num[j + 1] = temp;
                            }
                        }
                    }
                    return num;
    }
    public static void main(String[] args) 
    {
       int num [] = {5,4,7,2,3,1};
       sortest s =new sortest();
      int[] result = s.math(num); 
            
      System.out.print("Sortet array : ");
      for (int i : result) 
      {
               System.out.print(" "+i);
      }
    }
 }
// class Sortest {
//     // Sorting method using Bubble Sort
//     int[] math(int[] num) {
//         int n = num.length;
//         for (int i = 0; i < n - 1; i++) {
//             for (int j = 0; j < n - i - 1; j++) {
//                 if (num[j] > num[j + 1]) { // Swap if the current element is greater
//                     int temp = num[j];
//                     num[j] = num[j + 1];
//                     num[j + 1] = temp;
//                 }
//             }
//         }
//         return num; // Return the sorted array
//     }

//     public static void main(String[] args) {
//         int num[] = {5, 4, 7, 2, 3, 1};
//         Sortest s = new Sortest();
//         int[] result = s.math(num); // Call sorting function

//         System.out.print("Sorted Array: ");
//         for (int i : result) {
//             System.out.print(i + " ");
//         }
//     }
// }
