const form = document.getElementById("form");
const titleElement = document.getElementById("title");
const imageElement = document.getElementById("image");
const descriptionElement = document.getElementById("description");
const categoryElement = document.getElementById("category");
const priceElement = document.getElementById("price");
const API_URL = "http://localhost:3000/products";

let productId = null;

window.addEventListener("DOMContentLoaded", init);

function init() {
  getProductDetailById();
  form.addEventListener("submit", handleSubmit);
}

async function getProductDetailById() {

  productId = window.location.search.split("=")[1];


  const apiUrl = `${API_URL}/${productId}`;


  try {
    const { data: productDetail } = await axios.get(apiUrl);

    titleElement.value = productDetail.title;
    imageElement.value = productDetail.image;
    descriptionElement.value = productDetail.description;
    categoryElement.value = productDetail.category;
    priceElement.value = productDetail.price;
  } catch (e) {
    console.log(e);
  }
}

async function handleSubmit(event) {

  event.preventDefault();


  const title = titleElement.value;
  const image = imageElement.value;
  const description = descriptionElement.value;
  const category = categoryElement.value;
  const price = priceElement.value;


  if (!title || !image || !category) {
    alert("Nhap title, image, category vao");
    return;
  }

  const editProduct = {
    title,
    image,
    description,
    category,
    price: price ? Number(price) : 0,
  };
try {const apiUrl = `${API_URL}/${productId}`;await axios.patch(apiUrl, editProduct);window.location.replace("./list.html?editsuccess=success");} catch (error) {console.log(error);}

}
