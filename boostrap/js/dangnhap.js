function kiemtrataikhoan(){
    var ten = document.getElementById("txtten").value;
    var ma = document.getElementById("txtmk").value;
    var regten = /^user$/;
    var regpass =/^123$/;
    if((regten.test(ten) == false) ){
        alert("Tài khoản hoặc mật khẩu sai!");
    }
    else if((regpass.test(ma) == false)){
        alert("Tài khoản hoặc mật khẩu sai!");
    }
    else{
        alert("Đăng nhập thành công");
        location.replace("index.html");
    }
}