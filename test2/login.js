const tk = document.querySelector(".tk");
const mk = document.querySelector(".mk");
const formLogin = document.querySelector("#form-login");

const check = (data,tk,mk)=>{
    return data.some(dt => {
        return dt.username == tk && dt.password == mk});
}

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  let tkValue = tk.value;
  let mkValue = mk.value;

  if (tkValue == "") {
    alert("Nhập tài khoản");
    tk.focus();
    return;
  }

  if (mkValue == "") {
    alert("Nhập mật khẩu");
    mk.focus();
    return;
  }

  fetch("http://localhost:3000/users")
    .then(data => data.json())
    .then((dataOne) => {
        console.log(tk.value);
        console.log(check(dataOne));
      if(check(dataOne,tkValue,mkValue)){
        alert('Bạn đăng nhập thành công');
        window.location.href="index.html";
      }else{
        alert('mật khẩu hoặc tài khoản ko chính xác');
      }
    });
});
