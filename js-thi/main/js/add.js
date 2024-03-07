const form = document.getElementById('form');
const titleElement = document.getElementById('title');
const priceElement = document.getElementById('price');
const categoryElement = document.getElementById('category');
const imageElement = document.getElementById('image');
const descriptionElement = document.getElementById('description');
const API_URL = "http://localhost:3000/products";

window.addEventListener("DOMContentLoaded", init);
function init(){
    form.addEventListener("submit", handleSubmit);
}

async function handleSubmit(event){
    event.preventDefault();

    const title = titleElement.value;
    const price = priceElement.value;
    const category = categoryElement.value;
    const image = imageElement.value;
    const description = descriptionElement.value;

    //validate
    if(!title || !price ||!image || !description){
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }else if(category == 0){
        alert("Vui lòng chọn danh mục!");
        return;
    }

    //call api 
    const newProduct ={
        title,
        price,
        category,
        image,
        description
    };

    await fetch(API_URL,{
        method: 'POST',
        body: JSON.stringify(newProduct),
    })
    window.location.replace("./list.html");
}