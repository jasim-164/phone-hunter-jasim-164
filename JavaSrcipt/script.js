const searchPhone =()=>{
  const inputField=document.getElementById("input-text");
  const inputText=inputField.value;
  console.log(inputText);

  //const searchButton = document.getElementById("button-addon2")
  const url =`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
  console.log(url);
  fetch(url)
        .then(response => response.json())
        .then(phone => displaySearchResult(phone.data))//phone.data[3].phone_name
}

const displaySearchResult = phones=>{this
  //constconsole.log(phones);
  const searchResult=document.getElementById("search-result");
  //console.log(phones.length);
  if(phones.length > 0){
   // h1.display.style='none';//not found remove
  phones.forEach(phone=>{
    console.log(phone);
    const div=document.createElement("div");
    div.classList.add('col');
    div.innerHTML=` <div class="card h-100">
    <img src="${phone.image}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.phone_name}</h5>
      <h3 class="brand">${phone.brand}</h3>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div> `
  searchResult.appendChild(div);
  })}
  else{
    const notFound=document.getElementById("notFound");
    var h1=document.createElement("h1");
    h1.classList.add('text-center','text-warning');
    h1.innerText=`No Result Found`;
    notFound.appendChild(h1);
  }

}

//const InputText=document.getElementById("input-text");
//const searchButton = document.getElementById("button-addon2")






