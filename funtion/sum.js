function getSumArray(numbers){
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        const index=i;
        const element=numbers[index]
        sum = sum + element;
    console.log( index,element,sum);
    }
    return sum;

}
 const myNumbers=[32,40,30,40];
    getSumArray(myNumbers);