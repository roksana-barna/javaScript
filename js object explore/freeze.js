const bottle ={ color:'yellow',price:6000,isCleaned:true,capacity:1};
 const keys=Object.keys(bottle);
 console.log(keys);
//  for delete
delete bottle.isCleaned;
console.log(bottle);