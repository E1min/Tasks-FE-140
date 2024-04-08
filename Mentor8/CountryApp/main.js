let url="https://restcountries.com/v3.1/all";
let gridelem=document.querySelector(".grid")

fetch(url).then(res=>{
  return  res.json()
})
.then(data=>{

    data.forEach(element => {
      gridelem.innerHTML+=`
    
    <div class="card">
    <div class="image"><img src="${element.flags.png}" alt="${element.flags.alt}"></div>
    <div class="info">
        <h4>${element.name.official}</h4>
     <div class="pop"><p>Population:</p><h5>${element.population}</h5></div>
     <div class="reg"><p>Region:</p><h5>${element.region}</h5></div>
     <div class="cap"><p>Capital:</p><h5>${element.capital}</h5></div>
 </div> 
 </div>
    
    `
});
})