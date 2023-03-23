const shoppingCosst=[
    { name:'shirt',price:3000, quantiy:4},
    { name:'srt',price:6000, quantiy:5},
    { name:'srot',price:8000, quantiy:9},
    { name:'st',price:9000, quantiy:7},
];
function shoppingCost(products){
   let sum=0;
for(let i=0;i<=products.length; i++){
    const product=products[i];
    const productC=product.price * product.quantiy;
    sum=sum+productC;

}
return sum;
}
const expense=shoppingCost(shoppingCosst);
console.log(expense);