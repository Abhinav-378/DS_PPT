
function maxProduct(arr){
    let cnt=0
    let maxprod =1;
    while(cnt<3){
        
        let mindex=0;
        let max=arr[0]
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i]
                mindex=i
            }
        }
        maxprod= maxprod*max;
        arr[mindex]=0;
        cnt++
    }
    return maxprod
    
}
arr = [1,2,3,4,5,10]
console.log(maxProduct(arr))