const user={
    id:5000,
    city:'dhaka',
    post:{
        office:'hamidpur',
        kalihati:'kodomtoli',
        num:[
            {
                ami:'nai',
                ki:'kichu na'
            }
        ]
    }
};
const humm=user.post?.num[0].ki;
console.log(humm);