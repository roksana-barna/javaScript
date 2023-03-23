const loadUser=()=>{
    fetch('https://randomuser.me/api/?gender=female ')
    .then(res=>res.json())
    .then(data=>displayUSer(data))

}
const displayUSer= user=>{
    const genderTag=document.getElementById('location')
    genderTag.innerHTML=user.results[0].location.city;
    // const name=user.results[0].location.picture.larg
    const image=document.getElementById('img');
    image.innerHTML=`
   <img src="${user.results[0].location.picture.medium}"/>`;

    
    console.log(user.results[0].medium);
}
loadUser();