problem no:1 this is the mindGame problem.we have to multiply,addition,subtraction,and divsion on one Number.
function mindGame(number) {
let multiply=number*3;
let addition=multiply+10;
let division=addition/2;
let subtraction=division-5;
return subtraction;
    
}
let mindGameNum = mindGame();
prblem no :2 it is a evenOdd() we have to findout output, depends on its character.
function evenOdd(string) { 
    for( let i=0; i<=string.length; i++){
        let number=string.length;
        if( number %2!==0){
            console.log('odd');
        }
        else{
            console.log('even');
        }
    }
}

const evenOddString=evenOdd('Batch7');




problem no:3 is greater then.we have to print out the difference.
function isGSeven(number){
    let difference=number-7;
    if(difference<7){
        console.log(difference); 
    }
    else{// // 
        console.log(number*2)
    }
    return difference;
}
let differenceNum=isGSeven();
problem no:4 finding bad Data.we are push data which are negetive .then return the length to find the data.
function findingBadData(array){
    let badData=[];
   
    for(let i=0;i<array.length;i++){
        
        if (array[i]<0){
            badData.push(array[i]);
        }  
    }
    return badData.length;
}

const number=findingBadData();


prblm no:5 finout total diamonds 
function gemsToDiamond(firstGems,secondGems,thirdGems){
     const firstFriendPower=21;
     const secondFriendPower=32;
     const thirdFriendPower=43;
     const firstDiamond=firstFriendPower*firstGems;
     const secondDiamond=secondFriendPower*secondGems;
     const thirdDiamond=thirdFriendPower*thirdGems;
     const totalDiamond=firstDiamond+secondDiamond+thirdDiamond;   
     if(totalDiamond*2){
     console.log(totalDiamond-2000);
     }
   return totalDiamond; 
}
const diamonds=gemsToDiamond();
