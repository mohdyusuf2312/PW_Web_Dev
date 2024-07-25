let HOF = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return n + m + p;
        }
        return twoFun;
    }
    return oneFun;
}

console.log(HOF(3)(4)(5)); // it will return 12

function HOF1(n){
    const oneFun = m =>{
        const twoFun = p =>{
            return n + m + p;
        }
        return twoFun;
    }
    return oneFun;
}

console.log(HOF1(3)(4)(5)); // it will also return 12