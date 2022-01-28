
document.body.innerHTML = `
<div class="heading">
<h2>List of Breweries</h2>

</div>
<div id="fetchdata">  
</div>
`;
//select the element to display the results
const displayResult = document.getElementById("fetchdata");

//get data from pokemon api link by using template literal

const getData = async () => {
  try {
    let pokemondata = [];
    let result;
    for(id=1;id<=20;id++){
      const response = await fetch(`https://api.openbrewerydb.org/breweries`);
      result = await response.json(); 
          
      displayResult.innerHTML +=`
    <div class="container">
    <br>
      name:${result[id].name}<br><br>
      brewery type::${result[id].brewery_type}<br><br>
      city:${result[id].city}<br><br>
      state:${result[id].state}<br><br>
      country:${result[id].country}<br><br>
      phone:${result[id].phone}<br><br>
      website url:${result[id].websiteurl}<br><br>
      </div>`
      
    }
}catch (error) {
    console.log(error);
  }

};




getData();