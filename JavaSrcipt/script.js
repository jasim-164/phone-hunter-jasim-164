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
const phoneDetails=document.getElementById('phone-details');



const displaySearchResult = phones=>{
  //constconsole.log(phones);
  let count=1;
  const searchResult=document.getElementById("search-result");
  searchResult.textContent='';
  phoneDetails.textContent='';
  //console.log(phones.length);
  if(phones.length > 0){
  notFound.textContent='';//not found remove
  phones.forEach(phone=>{
    if(count<=20) //show only 20 result
    {
      count++;
    const div=document.createElement("div");
    div.classList.add('col');
    div.innerHTML=` <div class="card h-100">
    <img src="${phone.image}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <h3 class="brand">${phone.brand}</h3>
      <button onclick="loadPhoneId('${phone.slug}')" type="button" class="btn btn-info details-button">Details</button>
      
    </div>
  </div> `;
  searchResult.appendChild(div);}
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

//phone details
const displayPhonedetails= phone =>{
  //console.log(phone);
  let checkRelease;//check release date
 if(phone.releaseDate.length>0){
   checkRelease = phone.releaseDate
 }
 else
 {
   checkRelease="No Realese Date";
 }
  phoneDetails.textContent=''; //clear previous details data
  const div= document.createElement("div");
  div.classList.add('card');
  console.log('release', phone.releaseDate.length);
  div.innerHTML=`
  <img src="${phone.image}" class="card-img-top img-fluid card-img-size" alt="...">
  <div class="card-body bg-info">
    <h5 class="card-title">${phone.name}</h5>
    <h5 class="card-title">${checkRelease}</h5>
    <h5 class="card-text">Mainfeatures: storage:${phone.mainFeatures.storage}, displaySize:${phone.mainFeatures.displaySize}, chipSet:${phone.mainFeatures.chipSet}, memory:${phone.mainFeatures.memory}</h5>
    <h5 class="card-title">Sensor:${phone.mainFeatures.sensors}</h5>
    <h5 class="">Others: Brand:${phone.brand}, Id:${phone.slug}</h5>
    
  </div> `;
  phoneDetails.appendChild(div);
}








