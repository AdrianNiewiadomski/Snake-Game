var graWToku = false;
var kierunek = 'p';
var polozenie = [];
polozenie[0] = 44;
polozenie[1] = 43;
polozenie[2] = 42;
var polozenieOwocu = 0;
var timer = 0;
var punkty = 0;

function init(){
    var kod = "";
    var nr = 0;
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            nr = 10*i + j +1;
            kod += '<div id="'+nr+'" class="pole">'+nr+'</div>'
        }
        kod +='<div class="clear"></div>';
    }
    document.getElementById('plansza').innerHTML = kod;
}

function dodajOwoc(){
    polozenieOwocu = Math.floor(Math.random()*100)+1;
    document.getElementById(polozenieOwocu).classList.add("owoc");
}

function sprawdzPozycje(){
    var koniecGry = false;
    if(polozenie[0]%10 == 0 && kierunek=='p'){
        koniecGry = true;
    } else if(polozenie[0]%10 == 1 && kierunek=='l'){
        koniecGry = true;
    } else if(polozenie[0]<=10 && kierunek=='g'){
        koniecGry = true;
    } else if(polozenie[0]>90 && kierunek=='d'){
        koniecGry = true;
    }

    if(koniecGry){
        clearTimeout(timer);
        alert("Koniec gry!");

        for (var i=0; i<polozenie.length; i++){
            document.getElementById(polozenie[i]).classList.remove("waz");
        }

        document.getElementById(polozenieOwocu).classList.remove("owoc");
        polozenieOwocu = 0;
        graWToku = false;
        kierunek = 'p';
        polozenie = [];
        polozenie[0] = 44;
        polozenie[1] = 43;
        polozenie[2] = 42;
        for (var i=0; i<polozenie.length; i++){
            document.getElementById(polozenie[i]).classList.add("waz");
        }
        document.getElementById('start').innerHTML = 'Start';

    } else if (polozenie[0] == polozenieOwocu) {

        document.getElementById(polozenieOwocu).classList.remove("owoc");
        punkty++;
        document.getElementById('wynik').innerHTML = 'Wynik: '+ punkty;
        dodajOwoc();

    }
    return koniecGry;
}

function idz(){
    document.getElementById(polozenie[polozenie.length-1]).classList.remove("waz");
    if(!sprawdzPozycje()){
        // console.log('dzialam');

        for (var i=polozenie.length-1; i>0; i--){
            polozenie[i]=polozenie[i-1];
        }
        // polozenie++;
        if(kierunek=='p'){
            polozenie[0]++;
        } else if (kierunek=='l') {
            polozenie[0]--;
        } else if (kierunek=='g') {
            polozenie[0] -= 10;
        } else if (kierunek=='d') {
            polozenie[0] += 10;
        }

        document.getElementById(polozenie[0]).classList.add("waz");
        // setTimeout("idz()",1000);
        timer = setTimeout("idz()",1000);
    }
}

function start(){
    // console.log('dzialam');
    graWToku = !graWToku;
    if(graWToku){

        if(polozenieOwocu == 0){
            dodajOwoc();
        }

        document.getElementById('start').innerHTML = 'Pauza';
        // document.getElementById(polozenie[0]).classList.add("waz");
        for (var i=0; i<polozenie.length; i++){
            document.getElementById(polozenie[i]).classList.add("waz");
        }
        // setTimeout("idz()",1000);
        timer = setTimeout("idz()",1000);
    } else {
        clearTimeout(timer);
        document.getElementById('start').innerHTML = 'Start';

    }
}

function zmienKierunek(event) {
    // alert("zmienKierunek - dzialam");
    //console.log(event);
    var key = event.which || event.keyCode;
    if(key==38){
        kierunek = 'g';
    } else if (key==39) {
        kierunek = 'p';
    } else if (key==40) {
        kierunek = 'd';
    } else if (key==37) {
        kierunek = 'l';
    }
    console.log(kierunek);
}
