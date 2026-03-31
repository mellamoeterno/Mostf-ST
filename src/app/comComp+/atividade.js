// 1. Product Class
class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity
    }

    infoProduct() {
        console.log(
        `Item: ${this.name}
        Value: R$ ${this.price.toFixed(2)}
        Stock: ${this.quantity}`
        )
    }
}


// 2. Shopping Cart Class
class Carrinho {
    constructor() {
        this.itens = []
    }

    adicionarItem(Product) {
        this.itens.push(Product)
        console.log(`${Product.name} adicionado ao carrinho`)
    }

    removerUltimoItem() {
        if (this.itens.length > 0) {
            const removido = this.itens.pop()
            console.log(`${removido.name} foi removido`)
        } else {
            console.log("Carrinho vazio")
        }
    }

    contarItens() {
        return this.itens.length
    }

    listarItens() {
        console.log("Itens no carrinho:")
        this.itens.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - R$ ${item.price}`)
        })
    }

    calcularTotal() {
        let total = 0
        this.itens.forEach(item => {
            total += item.price
        })
        return total
    }
}


// 3. Market Class
class Mercado {
    constructor() {
        this.Products = []
    }

    adicionarProduct(Product) {
        this.Products.push(Product)
    }

    mostrarDisponiveis() {
        console.log("Products disponíveis:")
        this.Products.forEach(Product => {
            Product.infoProduct()
        })
    }
}


// 4. TESTING THE SYSTEM

const mercado = new Mercado()

const p1 = new Product("Chocolate", 5.50, 20)
const p2 = new Product("Arroz", 10.00, 15)
const p3 = new Product("Leite", 4.25, 10)

mercado.adicionarProduct(p1)
mercado.adicionarProduct(p2)
mercado.adicionarProduct(p3)

// Show available products
mercado.mostrarDisponiveis()

const carrinho = new Carrinho()

// Add items
carrinho.adicionarItem(p1)
carrinho.adicionarItem(p2)

// List items
carrinho.listarItens()

// Count items
console.log("quantity de itens:", carrinho.contarItens())

// Total
console.log("Total: R$", carrinho.calcularTotal().toFixed(2))

// Remove last item
carrinho.removerUltimoItem()

// List again
carrinho.listarItens()