#include<stdio.h>
#include<stdlib.h>
int * check(int * arr, int size){
    int * oparr=(int *)malloc(size* sizeof(int));
    for(int i=0;i<size;i++){
        for(int j=i;j<size;j++){
            if(i!=j){
                if(arr[i]==arr[j]){
                    if(arr[i]!=(arr[i-1]+1) && arr[i]!=arr[i+1]-1){
                        
                        oparr[0]=arr[i];
                        arr[i]=arr[i+1]-1;
                       
                        oparr[1]=arr[i];
                        
                    }
                    else{
                       
                        oparr[0]=arr[j];
                        arr[j]=arr[j+1]-1;
                        
                        oparr[1]=arr[j];
                        
                    }
                }
            }
        }
    }
    return oparr;
}
int main(){
    int n=6;
    
    int s[]={1,2,3,3,5,6};
   
    int * oparr=check(s,n);
    printf("%d %d",oparr[0],oparr[1]);
    return 0;
}