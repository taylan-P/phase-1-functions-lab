// Code your solution in this file!
//const hq = 42;
//let x = distanceFromHqInBlocks();
function distanceFromHqInBlocks(y){
 return Math.abs(y-42);
}

function distanceFromHqInFeet(n){
    return distanceFromHqInBlocks(n) * 264;
    
   
 
    
}
function distanceTravelledInFeet(s,d){
let k = Math.abs(s - d) * 264;

return k;
}

function calculatesFarePrice(s,d){
let k = distanceTravelledInFeet(s,d)
if (k <= 400) {
    return 0


 } else if (k >= 401 && k <=2000) {


    return (k - 400)*.02; 

    } else if (k >= 2001 && k <=2500) {
        return 25

    } else (k >= 2500) 
        return "cannot travel that far"
    

}



//console.log(difference)
// const distanceFromHqInBlocks = x;
// const feetInBlocks = 264;
// const multiply = distanceFromHqInBlocks * feetInBlocks;
// return multiply;