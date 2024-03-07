const listAll = document.querySelector("#listAll");

const show = () => {
  fetch("http://localhost:3000/products")
    .then((dataAll) => dataAll.json())
    .then((dataOne) => {
      listAll.innerHTML = dataOne
        .map((pro) => {
          return `
        <tr>
        <td>${pro.name}</td>
        <td><img src="${pro.image}" width="80px" alt=""></td>
        <td>${pro.price}</td>
        <td>
            <button data-id="${pro.id}" class="btn-delete btn-login btn btn-danger">xóa</button>
            <button class="btn-login btn btn-primary"><a style="color:white;text-decoration: none;" href="update.html?id=${pro.id}">sửa</a></button>
        </td>
        </tr>
        `;
        })
        .join("");
    })
    
    .then(
        ()=>{
            const allBtnDelete = document.querySelectorAll('.btn-delete');
            allBtnDelete.forEach((item)=>{
                item.addEventListener('click',()=>{
                    const id = item.dataset.id;
                    console.log(id);
                    if(confirm('bạn có chắc chắn muốn xóa?')){
                        fetch("http://localhost:3000/products/"+id,{
                            method:"DELETE"
                        });
                        alert('xóa thành công');
                    }
                })
            })
        }
      )
      ;
    ;
};

show();
