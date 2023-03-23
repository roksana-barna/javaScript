// 1.show the output fro 1-50
// 2.if the number is divisable by 3 instred of the number,show 'foo'
// 3.if the number is divisable by 5 instred of the number,show 'bar'
// 4.if the number is divisable by 3 and  5 instred of the number,show 'foobar'

// for(let i = 1 ; i<=50; i++){
//     if(i%3 ===0){
//         console.log('foo');
//     }
//     else if(i%5===0){
//         console.log('bar');
//     }
//     else if( i % 3 === 0 && i % 5 ===0){
//         console.log('foobar')

//     }
//     else{
//         console.log(i);
//         }
   
// }
for(let i = 1 ; i<=50; i++){
    if( i % 3 === 0 && i % 5 ===0){    
        console.log('foobar')
    }
         else if(i%3 ===0){
            console.log('foo');
        }
        else if(i%5===0){
            console.log('bar');
        }
        else{
            console.log(i);
            }
       
    }
    