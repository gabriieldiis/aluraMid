    function tocaSom(idElementoAudio){
        // na criação do documento eu esqueci o .play minha observação para o codigo é nao esquecer nas proximas vezes

        document.querySelector(idElementoAudio).play();
    }

    // cont = valor constante ou seja nunca muda, como nesse exemplo é um 'teclado' ele será constante 

    const listaDeTeclas = document.querySelectorAll('.tecla');

    let contador = 0 

    // vamo usar o while agora  while significa enquanto
    
    while (contador < 9 ) {
        const instrumento  = listaDeTeclas[contador].classList[1];

        console.log(instrumento);

        listaDeTeclas[contador].onclick = function () {
            tocaSom()
        }
        console.log(contador);
    }
