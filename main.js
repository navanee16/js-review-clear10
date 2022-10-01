var num = 200;
var setnum = [];
var index = 0;
for(let i = 1; i<=num; i++){
    // console.log(i);
    // if (i%7==0){
        if(myfunction(i)){
        setnum[index]=i;
        index++; 
        }
    }
// }
console.log(setnum);

function myfunction(number){
    var dine = number.toString();
    var x =[...dine]
    // console.log(x);
    var xi =[...dine].sort();
    var num=xi.join();
    // console.log(num);
    var num1 =x.join();
    // console.log(num1);

    if(num==num1){
        return true
    }else{
        return false
    }
}
