const tk = document.querySelector('.tk');
const mk = document.querySelector('.mk');
const formLogin = document.querySelector('#form-login');

const check = (data,tk,mk)=>{
    return data.some(dt => {
        return dt.username == tk && dt.password == mk;
    })
}

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    if(tk.value === ''){
        alert('Nhập tài khoản');
        tk.focus();
        return
    }
    
    if(mk.value === ''){
        alert('Nhập mật khẩu');
        mk.focus();
        return
    }

    fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(dataOne => {
            console.log(tk.value);
            console.log(mk.value);
            if(check(dataOne,tk.value,mk.value)){
                alert('đăng nhập thành công');
                window.location.href = 'list.html'
            }else{
                alert('tài khoản hoặc mật khẩu sai');
            }
        })
})