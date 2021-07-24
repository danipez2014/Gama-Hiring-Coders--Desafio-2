const items = [
  {
    id: 0,
    nome: 'FOGÕES',
    img: 'cook1.png',
    preco: 'R$800,00',
    quantidade: 0
  },
  {
    id: 1,
    nome: 'GELADEIRAS',
    img: 'geladeira7.jpg',
    preco: 'R$5000,00',
    quantidade: 0
  },

  {
    id: 2,
    nome: 'LAVA-LOUÇAS',
    img: 'lava1.jpg',
    preco: 'R$1000,00',
    quantidade: 0
  }
]

inicalizarLoja = () => {
  let containerProdutos = document.getElementById('produtos')
  items.map(val => {
    containerProdutos.innerHTML +=
      `
    <div class = "produto-single">
      <img src ="` +
      val.img +
      `"/>
      <p>` +
      val.nome +
      `</p>
      <p>` +
      val.preco +
      `</p>
      <a key ="` +
      val.id +
      `" href="#" > Adicionar ao carrinho!<a/>
    </div>

    `
  })
}
inicalizarLoja()
atualizarCarrinho = () => {
  let containerCarrinho = document.getElementById('carrinho')
  containerCarrinho.innerHTML = ' '
  items.map(val => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML +=
        `
        <div class ="checkout">
       <p style ="float:left;">Produto: ` +
        val.nome +
        ` 
        </p>
        <p style="float:right;">Quantidade:
          ` +
        val.quantidade +
        ` </p>
        
        <div style="clear:both"></div>
       
      </div>
       `
    }
  })
}

let links = document.getElementsByTagName('a')

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    items[key].quantidade++
    atualizarCarrinho()
    return false
  })
}
const carrinho = document.getElementById('items')
