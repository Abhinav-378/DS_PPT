#include<stdio.h>

int check(int * arr,int size){
        for(int i=0;i<size;i++){
            for(int j=i;j<size;j++){
                if(i!=j){
                    if(arr[i]==arr[j]){
                        return 1;
                    }
                }
            }

        }
        return 0;
    }

int main(){
    
    int arr[]={1,3,5,7,4};
    int size= sizeof(arr)/sizeof(arr[0]);
    if(check(arr,size)){
        printf("true");
    }
    else{
        printf("false");
    }
    return 0;
}