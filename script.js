// Métodos simples 
document.body.innerHTML += `<h1 id="titulo">Loja Virtual - Métodos simples </h1>`;
 
document.body.innerHTML += `
    <div class="produto">
        <h2>Nome do Produto: Camiseta</h2>
        <p>Descrição: Camiseta de algodão 100% confortável</p>
        <p>Preço: R$ 49,90</p>
        <img src="https://via.placeholder.com/150" alt="Camiseta">
    </div>
`;

// Métodos complexo  
const titulo = document.createElement('h1');
titulo.id = "titulo";
titulo.innerText = "Loja Virtual - Métodos complexo ";
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.classList.add('produto'); 

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = "Nome do Produto: Camiseta";
produto.appendChild(nomeProduto);

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = "Descrição: Camiseta de algodão 100% confortável";
produto.appendChild(descricaoProduto);

const precoProduto = document.createElement('p');
precoProduto.innerText = "Preço: R$ 49,90";
produto.appendChild(precoProduto);

const imagemProduto = document.createElement('img');
imagemProduto.src = "https://via.placeholder.com/150";
imagemProduto.alt = "Camiseta";
produto.appendChild(imagemProduto);

document.body.appendChild(produto);