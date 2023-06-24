#include<stdio.h>
#include<stdlib.h>
int * targ(int arr[],int target){
    int* oparr = (int*)malloc(2 * sizeof(int));
    for(int i=0;i<5;i++){
        for(int j=i;j<5;j++){
            if(i!=j){
                if((arr[i]+ arr[j])==target){
                    oparr[0]=arr[i];
                    oparr[1]=arr[j];
                    return oparr;
                }
            }
            
        }
    }
    return NULL;
}

int main(){
    int arr[5]={1,3,5,2,6};
    int target;
    printf("Enter target: ");
    scanf("%d",&target);
    int * updatedArr=targ(arr,target);
    if(updatedArr!=NULL){
        for(int i=0;i<2;i++){
        printf("%d\t",updatedArr[i]);
    }
    }else{
        printf("No Sum found.");
    }
    
    return 0;
}