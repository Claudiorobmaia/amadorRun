function pesquisar() {
   // console.log(marcas);

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

// se campoPesquisa for uma string sem nada
if (campoPesquisa == "") {
    section.innerHTML = "<p> Digite o nome ou a marca do tênis</p>"
    return 
}
// Para deixar em minúsculo
campoPesquisa = campoPesquisa.toLowerCase();

// Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let nome = "";
let descricao = "";
let tags = "";

// para cada marca dentro da lista de dados
for (let marca of marcas) {
    nome = marca.nome.toLowerCase()
    descricao = marca.descricao.toLowerCase()
    tags = marca.tags.toLowerCase()
    // se nome includes campoPesquisa
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elementos
            resultados += `
            <div class="item-resultado">
                        <h2>
                        ${marca.nome}
                        </h2>
                        <img src=${marca.imagem} alt="Descrição da imagem" class="miniatura">
                        <p class="descricao-meta">${marca.descricao}</p>
                            <a href=${marca.link} target="_blank">Mais informações
                            </a>
                    </div>
            `;
        }

    }
if (!resultados) {
    resultados = "<p>Nada foi encontrado!</p>"
}
section.innerHTML = resultados
}


