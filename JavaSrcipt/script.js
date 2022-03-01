const searchPhone =()=>{
  const inputField=document.getElementById("input-text");
  const inputText=inputField.value;
  console.log(inputText);

  //const searchButton = document.getElementById("button-addon2")
  const url =`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
  console.log(url);
  fetch(url)
        .then(response => response.json())
        .then(phone => console.log(phone.data[3].phone_name))
}

//const InputText=document.getElementById("input-text");
//const searchButton = document.getElementById("button-addon2")






