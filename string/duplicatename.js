const names=['abul','babul','abul','rabul','abul','sabul','abul','babul'];
function removeDuplicate(names){
    const unique=[];
    for(let i=0;i<names.length;i++){
        const name=names[i];
    if(unique.includes(name)===false){
        unique.push(name);
    }
    }
    return unique;
}
const nam=removeDuplicate(names);
console.log(nam);