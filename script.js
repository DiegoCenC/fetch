const mc = document.getElementById("mercado-container");
const btnM = document.getElementById("btn-mercado")
const pk = document.getElementById("poke-container");
const btnP = document.getElementById("btn-pokedex")



btnM.addEventListener("click",() =>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=malabares')
  .then(res => res.json())
  .then(res => {
    
    const items = res.results;
    let htmlContent = "";

    items.forEach(item => {
      const { title, price } = item;
      htmlContent += `<p><strong>${title}</strong> - $${price}</p>`;
    });

    mc.innerHTML = htmlContent;
  })
  .catch(err => console.error(err));
})




btnP.addEventListener("click", () => {
  fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(res => res.json())
    .then(res => {
      const name = res.name;
      const url = res.species.url;
      pk.innerHTML = `<p><strong>${name}</strong> - ${url}</p>`;
    })
    .catch(err => console.error(err));
});




