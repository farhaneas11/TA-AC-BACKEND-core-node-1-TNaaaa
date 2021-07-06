console.log('Welcome to Node.js');

function loop(a){
    let sum = 0;
    for(let i=0;i<=a;i++){
        sum = sum + i;        
    }
    return sum;
}
console.log(loop(10));