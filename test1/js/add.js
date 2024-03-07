const proId = document.querySelector("#add-id");
const proTitle = document.querySelector("#add-title");
const proPrice = document.querySelector("#add-price");
const proCategory = document.querySelector("#add-category");
const proImage = document.querySelector("#add-image");
const proDescription = document.querySelector("#add-description");
const formAdd = document.querySelector("#add-form");

formAdd.addEventListener("submit", (e) => {

  const valueId =  proId.value;
  const valueTitle = proTitle.value;
  const valuePrice = proPrice.value;
  const valueCategory = proCategory.value;
  const valueImage = proImage.value;
  const valueDescription = proDescription.value;
  e.preventDefault();
  
  const erros = [];
  if (valueId === ""){
    erros.push("Nhập ID");  
  }

  if (valueTitle === "" ){
    erros.push("Nhập Tiêu đề");  
  }
  
  if (valuePrice === ""){
    erros.push("Nhập Giá");  
  }

  if (valueCategory === ""){
    erros.push("Nhập Danh mục");  
  }

  if (valueImage ===""){
    erros.push("Nhập ảnh");  
  }

  if (valueDescription ===""){
    erros.push("Nhập mô tả");  
  }
  
  if(erros.length > 0){
    document.querySelector('#bug').innerHTML = ' ';
    errorUI = '';
    console.log(erros);
    erros.forEach(err => {
      errorUI += `<div style="color:red">${err}</div>`
    })
    errorUI += '<div>';
    document.querySelector('#bug').innerHTML = errorUI;
    return
  }

  let newPro = {
        id: valueId,
        title: valueTitle,
        price: valuePrice,
        category: valueCategory,
        image: valueImage,
        description: valueDescription
  };

  
  alert("thêm thành công");

  fetch("http://localhost:3000/test",{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPro)
  }).then(() => {window.location = "./index.html"});

});

