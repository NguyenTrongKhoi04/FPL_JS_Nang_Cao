const addName = document.querySelector('.add-name');
const addImage = document.querySelector('.add-image');
const addPrice = document.querySelector('.add-price');
const formAdd = document.querySelector('#form-add');


const url = new URLSearchParams(window.location.search);
const id = url.get('id');
// console.log(id);

fetch("http://localhost:3000/products/"+id)
    .then(res => res.json())
    .then(data => {
        addName.value = data.name;
        addImage.value = data.image;
        addPrice.value = data.price;
    });

formAdd.addEventListener('submit', (e)=>{
    e.preventDefault();

    const  nameValue = addName.value;   
    const imageValue = addImage.value;
    const  priceValue = Number(addPrice.value);
    let errors = [];
    
    if(nameValue === ''){
        errors.push('Không được để trống tên');
    }

    if(imageValue === ''){
        errors.push('Không được để trống ảnh');
    }

    if(priceValue == 0 || priceValue == ''){
        errors.push('Không được để trống giá');
    }

    if(priceValue < 0 ){
        errors.push('Không được nhập giá nhỏ hơn 0');
    }

    if(errors.length > 0){
        const  divError = document.querySelector('.bug');
        let errorUI = '';
        errors.forEach((err) => {
            errorUI += `<div class="form-control mb-2" style="color: red;">${err}</div>`;
        })
        divError.innerHTML = errorUI;
        return
    }
    
    const newPro = {
        name: nameValue,
        image: imageValue,
        price: priceValue
    }
    alert('sửa thành công');

    fetch("http://localhost:3000/products/"+id,{
        method:'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newPro)
    }).then(()=>{window.location = 'list.html'});
})