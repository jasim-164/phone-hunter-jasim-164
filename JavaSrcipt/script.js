const searchPhone =()=>{
  const inputField=document.getElementById("input-text");
  const inputText=inputField.value;
  console.log(inputText);
  inputField.value='';


  //const searchButton = document.getElementById("button-addon2")
  const url =`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
  console.log(url);
  fetch(url)
        .then(response => response.json())
        .then(phone => displaySearchResult(phone.data))//phone.data[3].phone_name
}
let notFound=document.getElementById("notFound"); 
const displaySearchResult = phones=>{
  //constconsole.log(phones);
  const searchResult=document.getElementById("search-result");
  searchResult.textContent='';
  //console.log(phones.length);
  if(phones.length > 0){
  notFound.textContent='';//not found remove
  phones.forEach(phone=>{
    console.log(phone);
    const div=document.createElement("div");
    div.classList.add('col');
    div.innerHTML=` <div class="card h-100">
    <img src="${phone.image}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <h3 class="brand">${phone.brand}</h3>
      <button onclick="loadPhoneId('${phone.slug}')" type="button" class="btn btn-info details-button">Details</button>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div> `
  searchResult.appendChild(div);
  document.querySelector('.details-button').addEventListener("click",function(e){
    e.target
  })
  })}
  else{
    notFound.textContent='';
    var h1=document.createElement("h1");
    h1.classList.add('text-center','text-warning');
    h1.innerText=`No Result Found`;
    notFound.appendChild(h1);
  }

}

const loadPhoneId = phoneId=>{
  console.log(phoneId);
  const url=`https://openapi.programming-hero.com/api/phone/${phoneId}`;
  console.log(url);
  fetch(url)
   .then(result=>result.json())
   .then(info=>displayPhonedetails(info.data));
}

const displayPhonedetails= phone =>{
  console.log(phone);
  const phoneDetails=document.getElementById('phone-details');
  phoneDetails.textContent=''; //clear previous details data
  const div= document.createElement("div");
  div.classList.add('card');
  console.log('release', phone.releaseDate.length);
  div.innerHTML=`
  <img src="${phone.image}" class="card-img-top img-fluid card-img-size" alt="...">
  <div class="card-body bg-info">
    <h5 class="card-title">${phone.name}</h5>
    <h5 class="card-title">${phone.releaseDate}</h5>
    <h5 class="card-text">Mainfeatures: storage:${phone.mainFeatures.storage}, displaySize:${phone.mainFeatures.displaySize}, chipSet:${phone.mainFeatures.chipSet}, memory:${phone.mainFeatures.memory}</h5>
    <h5 class="card-title">Sensor:${phone.mainFeatures.sensors}</h5>
    <h5 class="">Others: Brand:${phone.brand}, Id:${phone.slug}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div> `
  phoneDetails.appendChild(div);
}

//const InputText=document.getElementById("input-text");
//const searchButton = document.getElementById("button-addon2")






