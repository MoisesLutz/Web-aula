function calcularMedia() {
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let inNome = document.getElementById("inNome");
    let outMedia = document.getElementById("outMedia");
    let outSituacao = document.getElementById("outSituacao");

    const nome = inNome.value;
    const nota1 = Number(inNota1.value);
    const nota2 = Number(inNota2.value);
    let situacao = 0;

    let media = (nota1 + nota2) / 2;

    outMedia.textContent = "Media das Notas :" + media;

    if (media < 6) {
        situacao = "D";
    } 
    else if (media >= 6 && media < 8) {
        situacao = "C";
    }
        situacao = "B";
    }
    else {
        situacao = "A";
    }

    outSituacao.textContent = nome + " Conceito: " + situacao;

}

document.getElementById("btResultado").addEventListener("click", calcularMedia);