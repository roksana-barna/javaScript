const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
const displayCountries =(countries) =>{
    const countriesContainer=document.getElementById('all-countries')
    for( const country  of countries){
        console.log(country);
        const countryDiv=document.createElement('div')
        countryDiv.classList.add('country');
        countryDiv.innerHTML=`
        <h3>name:${country.name.common}</h3>
        <p>capital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">details</button>`;
        countriesContainer.appendChild(countryDiv);
    }
//    countries.forEach(country=>{
//     console.log(country);
//    })  

}
const loadCountryDetail=(code) => {
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDetails(data[0]));
}
const showDetails=(country)=>{
    console.log(country);
 const detailContainer=document.getElementById('country-detail')
 detailContainer.innerHTML=`
 <h3>name:${country.name.common}</h3>
 <img src="${country.flags.png}">
 `
}
loadCountries();