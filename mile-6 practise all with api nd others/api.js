const loadMeal =() =>{
    url=`https://www.themealdb.com/api/json/v1/1/search.php?s=`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals));
}
const displayMeals=(meals)=>{
    const mealsContainer=document.getElementById('card-container')
    meals.forEach(meal =>{
      console.log(meal);
     const mealsDiv=document.createElement('div');

    mealsDiv.classList.add('col');
   
    mealsDiv.innerHTML=`
    <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Details
  </button>
      </div>
  </div>
  

    `;
mealsContainer.appendChild(mealsDiv);
    })
};
// const loadDetails=()=>{
// const detailContainer=document.getElementById("exampleModal")
// detailContainer.innerHTML=`
// <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h1 class="modal-title fs-5" id="exampleModalLabel">${meal.strMeal}</h1>
//           <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//         </div>
//         <div class="modal-body">
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
//         </div>
//       </div>
//     </div>
// `
// }
loadMeal();