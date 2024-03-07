const proId = document.querySelector("#add-id");
const proTitle = document.querySelector("#add-title");
const proPrice = document.querySelector("#add-price");
const proCategory = document.querySelector("#add-category");
const proImage = document.querySelector("#add-image");
const proDescription = document.querySelector("#add-description");
const formAdd = document.querySelector("#update-form");

const searchParams = new URLSearchParams(document.location.search);
const  idParam = searchParams.get("id");

fetch("http://localhost:3000/test/"+idParam)
    .then((respone)=> respone.json())
    .then(dataOne => {
            proId.value = dataOne.id;
            proTitle.value = dataOne.title;
            proPrice.value = dataOne.price;
            proCategory.value = dataOne.category;
            proImage.value = dataOne.image;
            proDescription.value = dataOne.description;
    })
    // .then(() => {window.location = "./index.html"});

formAdd.addEventListener("submit", (e) => {
  const valueId =  proId.value;
  const valueTitle = proTitle.value;
  const valuePrice = proPrice.value;
  const valueCategory = proCategory.value;
  const valueImage = proImage.value;
  const valueDescription = proDescription.value;
  e.preventDefault();
  
  if (valueId === "" || valueTitle === "" || valuePrice === "" || valueCategory === "" || valueImage ==="" || valueDescription ===""){
        alert('Nhập đủ các thông tin');
        return;    
  }

  let newPro = {
        id: valueId,
        title: valueTitle,
        price: valuePrice,
        category: valueCategory,
        image: valueImage,
        description: valueDescription
  };

  
  alert("sửa thành công");

  fetch("http://localhost:3000/test/"+idParam,{
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPro)
  }).then(() => {window.location = "./index.html"});

});

