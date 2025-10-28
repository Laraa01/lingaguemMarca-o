function ponto1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number (placar.innerHTML);
    //pt1 = pt1 + 1;
    pt1 ++;
    //pt1 +=1;
    placar.innerHTML = pt1;
}

function ponto2(){
    var placar2 = document.querySelector("#pt2")
    var pt2 = Number (placar2.innerHTML);
    pt2 ++;
    placar2.innerHTML = pt2;
}

function zerar(){
    var placar1 = document.querySelector("#pt1")
    var placar2 = document.querySelector("#pt2")
    placar2.innerHTML = 0;
    placar1.innerHTML = 0;
}

function ponto3(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number (placar.innerHTML);
    if (pt1 > 0){
    pt1 --;
    placar.innerHTML = pt1;
    }
}

        function ponto4(){
            var placar = document.querySelector ('#pt2');
            var pt2 = Number(placar.innerHTML);
if (pt2 > 0){
            pt2--;
            placar.innerHTML = pt2;}
        }

        function pontobasquete1(ponto){
            var placar = document.querySelector('#pt3')
            var pontoNaTela = Number(placar.innerHTML);
            pontoNaTela = pontoNaTela + ponto;
            placar.innerHTML = pontoNaTela;
        }

        function pontobasquete2(ponto2){
            var placar2 = document.querySelector('#pt4')
            var pontoNaTela2 = Number(placar2.innerHTML);
            pontoNaTela2 = pontoNaTela2 + ponto2;
            placar2.innerHTML = pontoNaTela2;
        }

        function Zerar(){
    var placar1 = document.querySelector("#pt3")
    var placar2 = document.querySelector("#pt4")
    placar2.innerHTML = 0;
    placar1.innerHTML = 0;}