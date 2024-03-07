const listAll = document.getElementById("list-table");

console.log(listAll);

const show = () => {
    // TODO Add
  fetch("http://localhost:3000/products")
    .then((data) => data.json())
    .then((dataAll) => {
        listAll.innerHTML = dataAll.map(
                valueOne => {
                    return `
                    <tr>
                        <td>${valueOne.name}</td>
                        <td><img src="${valueOne.image}" width="80px" alt=""></td>
                        <td>${valueOne.price}</td>
                        <td>
                           <button class="btn-delete" data-id="${valueOne.id}">Xóa</button>
                           <button><a href="update.html?id=${valueOne.id}">Sửa</a></button>    
                        </td>
                    </tr>`;
                }
            ).join('');
        }
    )

    // TODO Delete
    .then(()=>{
        const allBtnDelete = document.querySelectorAll('.btn-delete');
        allBtnDelete.forEach((item)=>{
            item.addEventListener( 'click', (e)=>{
                if(confirm('Bạn có chắc chắn muốn xóa không ?')){
                    let id = item.dataset.id;
                    console.log(id);
                    fetch("http://localhost:3000/products/"+id,{method: "DELETE"});
                    alert('xóa thành công');
                }
            })
        })
    })
};

show();
