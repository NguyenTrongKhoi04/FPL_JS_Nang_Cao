const addName = document.querySelector(".add-name");
const addImage = document.querySelector(".add-image");
const addPrice = document.querySelector(".add-price");
const formAdd = document.querySelector("#form-add");

const url = new URLSearchParams(document.location.search);
let id = url.get("id");
fetch("http://localhost:3000/products/"+id)
    .then(res => res.json())
    .then(dataOne => {
      addName.value = dataOne.name;
       addImage.value = dataOne.image;
      addPrice.value = dataOne.price;
    });

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = addName.value ;
  const imageValue = addImage.value;
  const priceValue = Number(addPrice.value);
  const errors = [];

  if(nameValue == ''){
    errors.push("tên không được để trống");
  }

  if(imageValue == ''){
    errors.push("ảnh không được để trống");
  }
  
  if(priceValue == '' || priceValue == 0){
    errors.push("Giá không được để trống");
  }

  if(priceValue < 0){
    errors.push("Nhập giá lớn hơn 0");
  }

  if(errors.length){
    const bug = document.querySelector('.bug');
    let errorUI ='';
    errors.forEach(value => {
        errorUI += `<div class="form-control mt-2" style="color: red;">${value}</div>`;
    }
    );
    bug.innerHTML = errorUI;
    return
  }

  const newPro = {
    name: nameValue,
    image: imageValue,
    price: priceValue
  };

  alert('sửa thành công');

  fetch("http://localhost:3000/products/"+id,{
    method: "PUT",
    headers: {
        "Content-type" : "application/json"
    },
    body : JSON.stringify(newPro)
  }).then(()=>{window.location = 'list.html'})

});

