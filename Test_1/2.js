function check(s){
    let cnt=0
    for(let i=0;i<s.length;i++){
        cnt=0
        for(let j=0;j<s.length;j++){
            if(i!=j){
                if(s[i]==s[j]){
                    cnt++
                }
            }
        }
        if(cnt==0){
            return i
        }
    }
    return -1
}



const s="aabb"
console.log(check(s))
