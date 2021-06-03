function disablebtn(){
    document.getElementById("btndangky").disable=true;
    
}
function kiemtratendangnhap(){
    var regten =/^[A-Za-z]+[A-Za-z0-9]*$/;
    var ten = document.getElementById("tendangnhap").value;
    if(!regten.test(ten)){
        document.getElementById("errtendangnhap").innerHTML = "Tên đăng nhập phải bắt đầu bằng chữ!(VD: Anh2312)";
        return false;
    }
    else
        document.getElementById("errtendangnhap").innerHTML ="";
    return true;
}
function kiemtranhaplaimk(){
    var a = document.getElementById("mk").value;
    var nlmk = document.getElementById("nhaplaimk").value;
    if(a!=nlmk){
        document.getElementById("errnhaplaimk").innerHTML = "Chưa khớp!";
        return false;
    }
    else
        document.getElementById("errnhaplaimk").innerHTML = "";
    return true;
}
function kiemtrahoten(){
    // var reghoten =/^(([A-Z]+[a-z]*+[aáàảạ]*)+(\s)+)+$/;
    var reghoten =/^((([A-Z]|[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸ])+([a-z]|[àáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ])*)+(\s)+)+$/;
    var hoten = document.getElementById("hoten").value + " ";
    if(!reghoten.test(hoten)){
        document.getElementById("errhoten").innerHTML ="Tên không hợp lệ!";
        return false;
    }
    else
        document.getElementById("errhoten").innerHTML ="";
     return true;
}
function kiemtradiachi(){
    var regex=/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸàáâãèéêìíòóôõùúăđĩũơưăạảấầẩẫậắằẳẵặẹẻẽềềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ0-9\s/-]+$/;
    var dc = document.getElementById("diachi").value;
    if(!regex.test(dc)){
        document.getElementById("errdiachi").innerHTML= "Địa chỉ không hợp lệ!"
    return false;
    }
    else
        document.getElementById("errdiachi").innerHTML= "";
    return true;
}
function kiemtrasdt(){
    // var regex=/^(((03){1}[2-9]{1}[0-9]{7})||((07){1}[06789]{1}[0-9]{7})||((08){1}[1-5]{1}[0-9]{7})||((056){1}[0-9]{7})||((058){1}[0-9]{7})||((059){1}[0-9]{7})||((09){1}[012346789]{1}[0-9]{7}))$/;
    var regex =/(^(03)[2-9]\d{7})|(^(07)[06-9]\d{7})|(^(08)[1-5]\d{7})|(^(056)\d{7})|(^(058)\d{7})|(^(059)\d{7})|(^(09)[0-46-9]\d{7})/;
    var sdt = document.getElementById("sdt").value;
    if(!regex.test(sdt)){
        document.getElementById("errsdt").innerHTML= "Số điện thoại không hợp lệ!"
    return false;
    }
    else
        document.getElementById("errsdt").innerHTML= "";
    return true;
}
function kiemtraemail(){
    var regex =/^[A-Za-z.]+[0-9a-zA-Z.]+\@[a-zA-Z]{4,7}\.[a-zA-Z]{3}$/;
    var em = document.getElementById("email").value;
    if(!regex.test(em)){
        document.getElementById("erremail").innerHTML= "Email không hợp lệ!"
    return false;
    }
    else
        document.getElementById("erremail").innerHTML= "";
    return true;
}
function enablebtn(){
    if(kiemtratendangnhap()&&kiemtranhaplaimk()&&kiemtrahoten()&&kiemtradiachi()&&kiemtrasdt()&&kiemtraemail()){
        document.getElementById("btndangky").disabled = false;
    }
}
function dangky(){
    alert("Đăng ký thành công");
    location.replace("dangnhap.html");
}
