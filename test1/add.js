const proId = document.querySelector("#add-id");
const proTitle = document.querySelector("#add-title");
const proPrice = document.querySelector("#add-price");
const proCategory = document.querySelector("#add-category");
const proImage = document.querySelector("#add-image");
const proDescription = document.querySelector("#add-description");
const formAdd = document.querySelector("#add-form");

formAdd.addEventListener("submit", (e) => {
  const valueId = proId.value;
  const valueTitle = proTitle.value;
  const valuePrice = proPrice.value;
  const valueCategory = proCategory.value;
  const valueImage = proImage.value;
  const valueDescription = proDescription.value;
  e.preventDefault();
  if (
    valueId === "" ||
    valueTitle === "" ||
    valuePrice === "" ||
    valueCategory === "" ||
    valueImage === "" ||
    valueDescription === ""
  ) {
    alert("Nhập đủ các thông tin");
    return;
  }

  let newPro = {
    id: valueId,
    title: valueTitle,
    price: valuePrice,
    category: valueCategory,
    image: valueImage,
    description: valueDescription,
  };
  fetch("http://localhost:3000/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPro),
  });
  alert("thêm thanh");
  window.location = "http://127.0.0.1:5500/html/index.html";
});
