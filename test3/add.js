const addName = document.querySelector(".add-name");
const addImage = document.querySelector(".add-image");
const addPrice = document.querySelector(".add-price");
const formAdd = document.querySelector("#form-add");

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = addName.value ;
  const imageValue = addImage.value;
  const priceValue = Number(addPrice.value);
  const errors = [];

  if(nameValue == ''){
    errors.push("Nhập tên");
  }

  if(imageValue == ''){
    errors.push("Nhập ảnh");
  }
  
  if(priceValue == '' || priceValue == 0){
    errors.push("Nhập giá");
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

  alert('Thêm thành công');

  fetch("http://localhost:3000/products",{
    method: "POST",
    headers: {
        "Content-type" : "application/json"
    },
    body : JSON.stringify(newPro)
  }).then(()=>{window.location = 'list.html'})

});

