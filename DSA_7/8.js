
function check(arr){
    let m= ((arr[1][1]-arr[0][1])/(arr[1][0]-arr[0][0]))
    for(let i=0;i<(arr.length-1);i++){
        
        if (m!=((arr[i+1][1]-arr[i][1])/(arr[i+1][0]-arr[i][0]))){
            return false
        }
    }
    return true
}


arr=[[1,2],[3,4],[5,8],[7,8]]
console.log(check(arr))
