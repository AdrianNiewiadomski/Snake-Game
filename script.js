function init(){
    var kod = "";
    var nr = 0;
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            nr = 10*i + j +1;
            kod += '<div class="pole">'+nr+'</div>'
        }
        kod +='<div class="clear"></div>';
    }
    document.getElementById('plansza').innerHTML = kod;
}
