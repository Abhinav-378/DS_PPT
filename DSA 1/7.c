#include<stdio.h>

int main(){
    int temp;
    int arr[5] = {0, 4, 0, 6, 1};
    int count = 0; // Counter for non-zero elements

    // Move non-zero elements to the front
    for(int i = 0; i < 5; i++){
        if(arr[i] != 0){
            arr[count] = arr[i];
            count++;
        }
    }

    // Fill the remaining elements with zeros
    for(int i = count; i < 5; i++){
        arr[i] = 0;
    }

    printf("Modified Array: ");
    for(int i = 0; i < 5; i++){
        printf("%d ", arr[i]);
    }

    return 0;
}
