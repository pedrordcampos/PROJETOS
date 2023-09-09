let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let jogoAutomatico = true;

pegaJson();
function pegaJson() {
    return fetch('conexao.php')
      .then((response) => response.json())
      .then(criarPalavraSecreta);
}

function criarPalavraSecreta(data) {
    const indexPalavra = parseInt(Math.random() * data.length);
    palavraSecretaSorteada = data[indexPalavra].palavras;
    palavraSecretaCategoria = data[indexPalavra].categorias;
    console.log(palavraSecretaSorteada);
    montarPalavraNaTela();
}

function montarPalavraNaTela() {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = 'Dica: ' +palavraSecretaCategoria.italics();

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined) {
            
            if (palavraSecretaSorteada[i] == ' ') {
                listaDinamica[i] = ' ';
                palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letrasEspaco">' +listaDinamica[i]+ '</di>'
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + 
                    '<div class="letras">' +listaDinamica[i]+ '</di>'
            }

        } else {

            if (palavraSecretaSorteada[i] == ' ') {
                listaDinamica[i] = ' ';
                palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letrasEspaco">' +listaDinamica[i]+ '</di>'
            } else {
                palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letras">' +listaDinamica[i]+ '</di>'
            }

        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById('tecla-' +letra).disabled = true;
    if(tentativas > 0) {
        mudarStyleLetra('tecla-' + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao){

    if (condicao == false) {
        document.getElementById(tecla).style.background = '#c71585';
        document.getElementById(tecla).style.color = '#ffffff';
    } else {
        document.getElementById(tecla).style.background = '#008000';
        document.getElementById(tecla).style.color = '#ffffff';
    }
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
        tentativas--;
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal('Oops...', 'Não foi dessa vez! </br> <em> A palavra secreta era: </em> </br>' + palavraSecretaSorteada.bold());
            botaoReiniciar();
        }  

    } else {
        mudarStyleLetra('tecla-' + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
           if(palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
           }
            
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal('PARABÉNS!!!', '  Você venceu!');
        tentativas = 0;
        botaoReiniciar();
        
    }

}

async function botaoReiniciar() {

    while (jogarNovamente == true) {
        document.getElementById('jogarNovamente').style.display = 'block';
        await atraso(500);
    }
}

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo));
}

function carregaImagemForca() {
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca01.png')";
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca02.png')";
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca03.png')";
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca04.png')";
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca05.png')";
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca06.png')";
            break;
        default:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById('exampleModalLabel');
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = mensagem;
    $('#myModal').modal({
        show: true
    });  
}   

let btnReiniciar = document.querySelector('#recarregar');
btnReiniciar.addEventListener("click", function() {
    jogarNovamente = false;
    location.reload();
});

function listaAutomatica () {
    if (jogoAutomatico == true) {
        document.getElementById('jogarAutomatico').innerHTML = '<i class="bx bx-play-circle"></i>'
        document.getElementById('abreModalAddPalavra').style.display = 'block';
        jogoAutomatico = false;
    } else {
        document.getElementById('jogarAutomatico').innerHTML = '<i class="bx bx-pause-circle"></i>'
        document.getElementById('abreModalAddPalavra').style.display = 'none';
        jogoAutomatico = true;
    }
}


const modal = document.getElementById('modal-alerta');
const btnAbreModal = document.getElementById('abreModalAddPalavra');
btnAbreModal.onclick = () => {
    modal.style.display = 'block';
}

const btnFechaModal = document.getElementById('fechaModal');
btnFechaModal.onclick = () => {
    modal.style.display = 'none';
    document.getElementById('addPalavra').value = '';
    document.getElementById('addCategoria').value = '';
}

window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
};

  function adicionarPalavra() {
    let addPalavra = document.getElementById('addPalavra').value;
    let addCategoria = document.getElementById('addCategoria').value;

    if (isNullOrWhiteSpace(addPalavra) || isNullOrWhiteSpace(addCategoria)) {
        abreModal('Atenção!', 'Você precisa adicionar uma palavra ou categoria válidos!');
        return;
    }

    [addPalavra, addCategoria] = tratarPalavras(addPalavra, addCategoria);

    // Criar uma solicitação HTTP POST
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        
        }
    };
    xhttp.open("POST", "public/assets/insert.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Enviar a solicitação com as variáveis
    xhttp.send("addPalavra=" + addPalavra + "&addCategoria=" + addCategoria);

    document.getElementById('addPalavra').value = '';
    document.getElementById('addCategoria').value = '';
    document.getElementById('msg-modal').style.display = 'block';

    
    document.getElementById('addPalavra').addEventListener('click', function() {
        let msgModal = document.getElementById('msg-modal');
        msgModal.style.display = 'none';
    });

    document.getElementById('addCategoria').addEventListener('click', function() {
        let msgModal = document.getElementById('msg-modal');
        msgModal.style.display = 'none';
    });

  }
  
  function tratarPalavras(addPalavra, addCategoria) {
    addPalavra = addPalavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    addCategoria = addCategoria.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    return [addPalavra, addCategoria]; 
  }

  function isNullOrWhiteSpace(input) {
    return !input || !input.trim();
  }

  const btnInfo = document.getElementById('btn-info');
  btnInfo.addEventListener("click", function() {
    abreModal('Informações: ', 'Desenvolvido por: <strong><em>Agnaldo Guimarães</em></strong>. <br> <a href="https://www.youtube.com/AgnaldoGuimaraes">https://www.youtube.com/AgnaldoGuimaraes</a> <br> Adaptado por <strong><em>Pedro Ricardo de Campos</em></strong>');

  })
  

