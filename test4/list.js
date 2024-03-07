const listAll = document.querySelector("#listAll");

const show = () => {
  fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((dataAll) => {
      listAll.innerHTML = dataAll
        .map((onePro) => {
          return `
            <tr>
            <td>${onePro.name}</td>
            <td><img src="${onePro.image}" alt="" width="80px"></td>
            <td>${onePro.price}</td>
            <td>
                <button data-id="${onePro.id}" class="btn-delete btn btn-login btn-danger">xóa</button>
                <buton class="btn btn-login btn-primary"><a style="color : white;text-decoration: none;" href="update.html?id=${onePro.id}">Sửa</a></buton>
            </td>
            </tr>
            `;
        })
        .join("");
    })

    .then(() => {
      const btnDeleteAll = document.querySelectorAll(".btn-delete");
      // console.log(btnDeleteAll);

      btnDeleteAll.forEach((btnDel) => {
        btnDel.addEventListener("click", (e) => {
          let id = btnDel.dataset.id;
          console.log(id);
          if (confirm("bạn chắc chắn muốn xóa")) {
            fetch("http://localhost:3000/products/" + id, { method: "DELETE" });
            alert("xóa thành công");
          }
        });
      });
    });
};

show();
