#include<stdio.h>
int cnt=0;
int binary_srch(int * arr,int n,int srch){
    int min=0;
    int max=(n-1);
    int mid=(min+max)/2;

    while(min<=max){
        
    
        if (srch==arr[mid]){
            return mid;
            
        }
        else if(srch<arr[mid]){
            max=mid-1;
            
        }
        else if (srch>arr[mid]){
            min=mid+1;
            
        }
    }
    

    return -1;
}

int main(){
    int arr[5]={1,2,3,4,5};
    int size=5;
    int search=9;
    printf("\nElement Found at Index: %d",binary_srch(arr,size,search));
    
    return 0;
}