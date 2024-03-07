const tk = document.querySelector('.tk');
const mk = document.querySelector('.mk');
const formLogin = document.querySelector('#login-form');

const check = (data,tk,mk)=>{
    return data.some(dt => {
        return  dt.username == tk && dt.password == mk;
    })
}

formLogin.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(tk.value == ''){
        alert("Nhập tài khoản");
        tk.focus();
        return
    }

    if(mk.value == ''){
        alert("Nhập mật khẩu");
        mk.focus();
        return
    }

    fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if(check(data,tk.value,mk.value)){
            alert('đăng nhập thành công');
            window.location.href = 'list.html';
        }else{
            alert('sai tài khoản hoặc mật khẩu');
        }
    });
});