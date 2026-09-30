let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector('#bia')
let palpiteBia = (Math.random() * 100) .toFixed();

function receberPalpite(input){
    if(palpites.length < 10){
      for(let i = 0; i < palpites.length; i++){
        if(input.value == palpites[i]){
            alert("Este palpite já foi utilizado");
            input.value = "";
            return;
        }
     }
     if(Number(input.value) > palpiteBia){
        alert("Bia está pensando em um numero menor")
     }else if(input.value < palpiteBia){
        alert("Bia está pensando em um numero maior")
     } else{
        bia.src = "./assets/biafeliz.png";
        textoResposta.innerHTML = 'Parabéns você acertou o numero era : <span class="text-amber-500">${palpiteBia}<span>';
        btn.innerHTML = "Jogar Novamente";
        btn.classList.remove('hidden');
     }
      palpites.push(input.value);
      input.value = "";
      textoPalpites.innerHTML = palpites.join("-");
     } else {
        textoResposta.innerHTML = "Suas chances acabaram";
        btn.classList.remove('hidden');
        bia.src = "./assets/biatriste.png";
        palpites = [];
        textoPalpites.innerHTML = "";
        input.value = "";
    }
}