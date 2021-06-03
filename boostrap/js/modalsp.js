function tomodal(s){
    var idten =s;
    var idgia = s + "_gia";
    var ten = document.getElementById(idten).value;
    var gia = document.getElementById(idgia).value;
    document.getElementById("tenspmodal").value = ten;
    document.getElementById("giaspmodal").value = gia;
    document.getElementById("hinhspmodal").innerHTML = "<img src='../IMG/"+idten+".png' class='col-xs-12' id='hinhspmodal'>";
}