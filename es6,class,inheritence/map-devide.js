const numbers=[4,6,8,3];
const half=numbers.map(n=>n/2)
console.log(half);
// new
const friends=['tom tom','homty','dumty'];
const firstLetters=friends.map(f=>f[4])
console.log(firstLetters);
// length
const friends=['tom tom','homty','dumty'];
const friendsLength=friends.map(f=>f.length)
console.log(friendsLength);
// object
const products=[{
    id:4,name:'kiki'},
    { id:'ui',num:'kikikik'},
];
const prodc=products.map(p=>p.name)
console.log(prodc);

