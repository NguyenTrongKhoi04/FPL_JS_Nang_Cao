const addName = document.querySelector(".add-name");
const addImage = document.querySelector(".add-image");
const addPrice = document.querySelector(".add-price");
const formAdd = document.querySelector("#form-add");

const searchParams = new URLSearchParams(document.location.search);
const idParam = searchParams.get("id");
console.log(idParam);

fetch("http://localhost:3000/products/" + idParam)
  .then((data) => data.json())
  .then((dataOne) => {
    console.log(dataOne);
    addName.value = dataOne.name;
    addImage.value = dataOne.image;
    addPrice.value = dataOne.price;
  });

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();

  const valueName = addName.value;
  const valueImage = addImage.value;
  const valuePrice = Number(addPrice.value);

  const errors = [];
  if (valueName === "") {
    errors.push("Nhập tên");
  }

  if (valueImage === "") {
    errors.push("Nhập ảnh");
  }

  if (valuePrice === 0 || valuePrice === "") {
    errors.push("Nhập Giá");
  }
  if (valuePrice < 0) {
    errors.push("Nhập giá lớn hơn 0");
  }

  if (errors.length > 0) {
    const divError = document.querySelector("#bug");
    let errorUI = "";

    errors.forEach((error) => {
      errorUI += `<div class="form-control mb-2 add-price" style="color: red;">${error}</div>`;
    });

    divError.innerHTML = errorUI;
    return;
  }

  let newPro = {
    name: valueName,
    image: valueImage,
    price: valuePrice,
  };
  alert("sửa thành công");
  fetch("http://localhost:3000/products/" + idParam, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newPro),
  }).then(() => {
    window.location = "./index.html";
  });
});
