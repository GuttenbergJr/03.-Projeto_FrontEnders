var inUsuario = document.getElementById('inUsuario');
var insiraMsg = document.getElementById('insiraMsg');
var outResposta = document.getElementById('outResposta');
var resposta = document.createElement('h3');


function validaEmail(e) {
    e.preventDefault();

    var mensagem = insiraMsg.value;

    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    resposta.textContent = ""

    if (!reg.test(inUsuario.value)) {

        console.log("Errado")
        outResposta.append(resposta);
        resposta.textContent += "Email incorreto. " + "\n";
        resposta.style.color = "red";
        resposta.style.fontSize = "15px";
    }
    else {
        if (reg.test(inUsuario.value)) {
            console.log("correto");
            outResposta.append(resposta);

            resposta.textContent = "Mensagem enviada";
            resposta.style.fontSize = "20px";
            resposta.style.color = "green";

        }


    }
}



var btEntrar = document.getElementById('btEnviar');
btEntrar.addEventListener("click", validaEmail);
