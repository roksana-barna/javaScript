const student={
    name:'kodomji',
    money:6000,
    id:8,
    address:{
        street:'hamidpur',
        flr:'three',
    },
    hamid:[
        89,90,80
    ],
    exam:function(){
        return this.hamid[2];

    }
}
const output= student.exam();
console.log(output);
