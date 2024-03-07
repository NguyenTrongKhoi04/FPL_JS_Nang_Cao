$app = document.querySelector("#app");
// console.log($app);

const show = () => {
  fetch("http://localhost:3000/test")
    .then((response) => response.json())
    .then((data) => {
      app.innerHTML = data
        .map((dataOne, index) => {
          return `<tr>
                
                <td>${index + 1}</td>
                <td>${dataOne.id}</td>
                <td>${dataOne.title}</td>
                <td>${dataOne.price}</td>
                <td>${dataOne.category}</td>
                <td><img src="${dataOne.image}" alt="" width="40px"></td>
                <td>${dataOne.description}</td>
                <td>
                <button class="btn-delete" data-id="${dataOne.id}">Xóa</button>
                <a href="update.html?id=${
                  dataOne.id
                }"><button class="btn-update" data-id=${
            dataOne.id
          }>Cập nhật</button></a>
                </td>
                </tr>
                `;
        })
        .join("");
    })
    // TODO delete
    .then(() => {
      const allBtnDelete = document.querySelectorAll(".btn-delete");
      console.log(allBtnDelete);  
      for (const btn of allBtnDelete) {
            btn.addEventListener('click', ()=>{
                if(confirm('bạn có chắc chắn muốn xóa?')){
                    let id = btn.dataset.id;
                fetch("http://localhost:3000/test/"+id,{
                method: "DELETE",});
                alert('xóa thành công');
                }
            } );    
      }
    });
};
show();

// netstat -ano | findstr :3000
// taskkill /F /PID 7700
// npx json-server db.json
