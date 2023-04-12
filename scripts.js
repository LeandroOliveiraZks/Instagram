let imagem = document.getElementById("tr-imagem")



    function mudaImagem() {

        if (imagem.style.opacity == 0) {
            imagem.style.opacity = 1
        }
        else {
        imagem.style.opacity = 0
        }
    }

    setInterval(function () {
        mudaImagem()
    }, 4000);