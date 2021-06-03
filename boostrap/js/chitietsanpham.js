function inc(){
    var s = document.getElementById("txt-val").value;
    s++;
    document.getElementById("txt-val").value = s;
}
function dec(){
    var s = document.getElementById("txt-val").value;
    if(s >1){
        s--;
        document.getElementById("txt-val").value = s;
    }
        
}
function tomodel(){
    var sl = document.getElementById("txt-val").value;
    var tt = 8000000*sl;
    var tht = tt - 500000;
    document.getElementById("tongtien").value = tt +"đ";
    document.getElementById("giam").value ="-"+ 500000+"đ";
    document.getElementById("thanhtien").value = tht +"đ";
}