window.addEventListener("DOMContentLoaded", init);
const API_URL = "http://localhost:3000/products";

function init() {
  const param = new URLSearchParams(window.location.search);
  const success = param.get("addsuccess");
  if (success == "success") {
    alert("Thêm thành công");
  }
  const success2 = param.get("editsuccess");
  if (success2 == "success") {
    alert("Cập nhật thành công!");
  }
  clearURL();
  renderProductList();
}
function clearURL() {
  const newURL = window.location.href.split('?')[0];
  window.history.replaceState({}, document.title, newURL);
}
async function handleDeleteProduct(id) {
  if (window.confirm("Ban co mua xoa san pham nay ko????")) {
    const apiUrl = `${API_URL}/${id}`;
    await fetch(apiUrl, {
      method: "DELETE",
    });
  }
}
async function renderProductList() {
    const res = await fetch (API_URL);
    const productList = await res.json();
    const productListElm = document.getElementById('product-list');
    const tbody = document.createElement('tbody');
    tbody.innerHTML = `<theadclass="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
>
  <tr>
    <th scope="col" class="px-6 py-3">Product name</th>
    <th scope="col" class="px-6 py-3">Category</th>
    <th scope="col" class="px-6 py-3">Price</th>
    <th scope="col" class="px-6 py-3">Action</th>
  </tr>
</theadclass=>
<tbody>

${productList.map(  
  (product) => `   
  <tr   
  class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"   
  >   
  <thb   
  scope="row"   class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"   
  >
${product.title.substring(0, 20)}...
</thb><td class="px-6 py-4">${product.category}</td>
        <td class="px-6 py-4">$${product.price}</td>
        <td class="px-6 py-4 flex gap-2">
        <a
            href="./edit.html?productId=${product.id}"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >Edit</a
        >
<button
            // su kien onclick: handleDeleteProduct(id)
            onClick=handleDeleteProduct("${product.id}")
            class="font-medium text-red-600 dark:text-red-500 hover:underline"
            >Remove</
            button>
        </td>
    </tr>
    `
  )
  .join("")}

</tbody>
  `;
  // .join("") xoa bo dau ,
  productListElm.appendChild(tbody);
}