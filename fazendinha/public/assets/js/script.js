// Variáveis
let ferramentaSelecionada = '';
let contLeite = 0;
let contOvo = 0;
let contLa = 0;

// Adiciona o event listener para selecionar o campo
const campos = document.querySelectorAll('.campo');
campos.forEach(campo => campo.addEventListener('click', selecionarCampo));

// Adiciona o event listener para selecionar a ferramenta
const ferramentas = document.querySelectorAll('.ferramenta');
ferramentas.forEach(ferramenta => ferramenta.addEventListener('click', selecionarFerramenta));

// Função para selecionar o campo
function selecionarCampo(event) {
  const valorCampo = event.target.getAttribute('data-value');
  const campoSelecionado = document.querySelector(`[data-value="${valorCampo}"]`);
  usarFerramenta(campoSelecionado);
}

// Função para selecionar a ferramenta
function selecionarFerramenta(event) {
  const img = event.target;
  const ferramenta = img.getAttribute('data-value');
  ferramentaSelecionada = ferramenta;
  
  // cria um novo elemento img
  const novaImg = document.createElement("img");

  // define a imagem selecionada como sua origem
  novaImg.src = img.src;
  novaImg.style.width = "50px";
  novaImg.style.height = "auto";
  novaImg.style.position = "absolute";

  // adiciona o elemento à área de exibição
  const areaDeExibicao = document.querySelector(".area-de-exibicao");
  areaDeExibicao.innerHTML = ""; // limpa a área de exibição
  areaDeExibicao.appendChild(novaImg);

  // define o estilo CSS do elemento img
  novaImg.style.display = "inline-block";

  // define o estilo CSS da área de exibição para centralizar a imagem
  areaDeExibicao.style.textAlign = "center";

  // adiciona um ouvinte de evento para seguir o mouse
  document.addEventListener("mousemove", moverImagem);

  usarFerramenta();
}

// Função para utilização das ferramentas
function usarFerramenta(campoSelecionado) { 
  
  if(ferramentaSelecionada == 'seta') {

  } else if (ferramentaSelecionada == 'pá') {
    campoSelecionado.src = "public/assets/img/terra.png";
  } else if (ferramentaSelecionada == 'regador') {
      if(campoSelecionado.src.includes('terra-semente.png')) {
        campoSelecionado.src = "public/assets/img/terra-regada.png";
        setTimeout(function(){
          campoSelecionado.src = "public/assets/img/terra-semente.png";
        }, 3000); 
        setTimeout(function(){
          campoSelecionado.src = "public/assets/img/grama3.png";
        }, 6000); 
        setTimeout(function(){
        // criar um novo elemento de imagem para a macieira
        var macieira = document.createElement('img');
        macieira.src = "public/assets/img/macieira.png";
        // definir o posicionamento absoluto
        macieira.style.position = "absolute";
        // ajustar a posição em relação ao campo selecionado
        macieira.style.top = (campoSelecionado.offsetTop - 50) + "px"; // ajuste a posição conforme necessário
        macieira.style.left = (campoSelecionado.offsetLeft + 20) + "px"; // ajuste a posição conforme necessário
        // ajustar o tamanho da imagem
        macieira.style.width = "80px"; // ajuste o tamanho conforme necessário
        macieira.style.height = "80px"; // ajuste o tamanho conforme necessário
        // colocar a imagem da macieira na frente do background
        macieira.style.zIndex = "1";
        // adicionar a imagem da macieira ao campo selecionado
        campoSelecionado.parentNode.appendChild(macieira); 

        // Nessa parte será feita a colheita do que foi plantado.
        // if(ferramentaSelecionada == 'colheita') {
        //   alert('teste');
        // }
          
        }, 9000);
      } else {
        return;
      }      
  } else if (ferramentaSelecionada == 'saco-de-sementes') {
    if(campoSelecionado.src.includes('terra.png')) {
      campoSelecionado.src = "public/assets/img/terra-semente.png";
    } else {
      return;
    }
  } else if (ferramentaSelecionada == 'defensivo-natural') {
  } else if (ferramentaSelecionada == 'colheita') {

    var ovo = document.getElementById("ovo");
    var la = document.getElementById("la");
    var leite = document.getElementById("balde-vazio");
   
    if (leite) {
      // Adicionar uma função de evento de clique ao elemento do leite.
      leite.addEventListener("click", function() {
        if (ferramentaSelecionada !== 'colheita') {
          return;
        }
        contLeite++;
        document.getElementById("contLeite").textContent = "Leite: " + contLeite;

        document.getElementById("balde-vazio").src = "public/assets/img/balde-vazio.png";
        setTimeout(function(){
          document.getElementById("balde-vazio").src = "public/assets/img/balde-cheio.png";
        }, 5000); 
      });        
    }

    if (ovo) {
      // Adicionar uma função de evento de clique ao elemento do ovo.
      ovo.addEventListener("click", function() {
        if (ferramentaSelecionada !== 'colheita') {
          return;
        }
    
        contOvo++;
        document.getElementById("contOvo").textContent = "Ovos: " + contOvo;
    
        ovo.classList.add("hidden");
        setTimeout(function(){
          ovo.classList.remove("hidden");
        }, 5000);
      });
    }
    

    if (la) {
      // Adicionar uma função de evento de clique ao elemento da lã de ovelha.
      la.addEventListener("click", function() {
        if (ferramentaSelecionada !== 'colheita') {
          return;
        }

        contLa++;
        document.getElementById("contLa").textContent = "Lã: " + contLa;
        la.classList.add("hidden");
        setTimeout(function(){
          la.classList.remove("hidden");
        }, 5000);
      });
    }
      
  } 
 
}

// Função para movimentar a imagem junto ao mouse
function moverImagem(event) {
  const novaImg = document.querySelector('.area-de-exibicao img');
  novaImg.style.left = (event.pageX - 5) + "px"; // 5 = metade da largura da imagem
  novaImg.style.top = (event.pageY - 70) + "px"; // 70 = 20 pixels acima do ponteiro
}

// Função para inserir o leite de vaca no balde.
setTimeout(function(){
    document.getElementById("balde-vazio").src = "public/assets/img/balde-cheio.png";
  }, 5000); 

// Função para inserir os ovos de galinha no ninho.
setTimeout(function(){
    var ovo = document.getElementById("ovo");
    ovo.classList.remove("hidden");
  }, 5000);

// Função para inserir a lã de ovelha no cesto.
setTimeout(function(){
    var la = document.getElementById("la");
    la.classList.remove("hidden");
  }, 5000);