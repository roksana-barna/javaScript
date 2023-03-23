function woodCal(cquanty,tqnty,bquynty){
    const c =3;
    const t =3;
    const b =3;
    const i=c*cquanty;
    const j=t*tqnty;
    const k=b*bquynty;
    const total=i+j+k;
    return total;


}
const wooded=woodCal(3,3,5);
console.log(wooded);