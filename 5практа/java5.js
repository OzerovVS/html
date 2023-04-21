function update(){
    var f = document.getElementById("search11").value;
    var x = document.createElement('img');
    x.src = f;
    x.id = "pain";
    x.width = 400;
    x.height = 400;
    document.getElementById("hz").appendChild(x);
    
    
}
function seta(){
    var f = document.getElementById("search11").value;
    let a =  'url('+ f +')';
    document.body.style.backgroundImage = a;
    document.getElementById("search11").value = "";
}
function cleara(){
    document.getElementById('pain').remove();
}
function delate(){
    document.body.style.background = "";
}