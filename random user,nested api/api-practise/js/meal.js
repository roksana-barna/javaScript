const loadMeal =(searchText) =>{
    url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeals(data.meals));
}
 const displayMeals = meals=>{
    const mealsContainer=document.getElementById('meals-container')
    mealsContainer.innerText='';
    meals.forEach(meal => {
        console.log(meal);
        const mealDiv=document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML=` <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick=" loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetailsModal">
        details
       </button>

        </div>
      </div>

        `
        mealsContainer.appendChild(mealDiv);
    })
 }
 const searchMeals = () =>{
    const searchText=document.getElementById('search-field').value;
    console.log(searchText);
    loadMeal(searchText);
 }
 const loadMealDetails=idMeal=>{
    const url=`www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal} `;
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealDetails(data.meals[0]));
    

 }
 const displayMealDetails=meal=>{
    document.getElementById('mealDetailsModalLabel').innerText=meal.strMeal;
    const mealDetails=document.getElementById('modal-details-body');
    mealDetails.innerHTML=`
    <img src="${meal.strMealThumb}">`
 }
loadMeal('fish');