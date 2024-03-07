const  addName = document.querySelector('.add-name'); 
const  addImage = document.querySelector('.add-image'); 
const  addPrice = document.querySelector('.add-price'); 
const  formAdd = document.querySelector('#form-add');

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();

    const valueName = addName.value;
    const valueImage = addImage.value;
    const valuePrice = addPrice.value;
    
    const errors = [];
    if(valueName === ''){
        errors.push("Nhập tên");
    }

    if(valueImage === ''){
        errors.push("Nhập ảnh");
    }
    console.log(valuePrice);
    if(valuePrice === 0 || valuePrice === ''){
        errors.push("Nhập Giá");
    }
    if(valuePrice < 0){
        errors.push("Nhập giá lớn hơn 0");
    }

    if(errors.length > 0){
        const  divError = document.querySelector('#bug');
        let errorUI = '';

        errors.forEach(error => {
            errorUI += `<div class="form-control mb-2 add-price" style="color: red;">${error}</div>`;
        });

        divError.innerHTML= errorUI;
        return
    }

    let newPro = {
        name  : valueName,
        image : valueImage,
        price : valuePrice
    }
    alert('thêm thành công');
    fetch("http://localhost:3000/products",{
        method: "POST",
        headers: { 
            "Content-type" : "application/json"
        },
        body: JSON.stringify(newPro)
    });
    window.location = "./index.html"
});

