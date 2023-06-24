#include <stdio.h>
#include<math.h>
int removeElement(int nums[], int numsSize, int val) {
    int k = 0; 

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++; 
        }
    }

    return k;
}

int main() {
    int nums[] = {3, 4, 5, 1};
    int size = sizeof(nums) / sizeof(nums[0]);
    int k=0;
    for(int i=0;i<size;i++){
        k=10*k+nums[i];
    }
    
    k=k+1;
    for(int i=0;i<size;i++){
        nums[size-i-1]=k%10;
        k=k/10;
    }
    
   //Final Array
    for(int i=0;i<size;i++){
        printf("%d\t",nums[i]);
    }
    

    return 0;
}
