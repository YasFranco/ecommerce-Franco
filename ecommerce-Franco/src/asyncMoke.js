const products = [
    { id:1, name:'Difusores frutales', price: 1350, category: 'aromas', img: 'https://i.pinimg.com/236x/86/0d/9e/860d9e7e6ef9209f466d37a906af1d29.jpg', stock: 6, description: 'descripcion de difusores frutales'}, 
    {id: 2, name:'velas aromaticas', price: 950, category: 'aromas', img: 'https://i.pinimg.com/236x/71/4b/fe/714bfe7acf9f6eb980d80a583d2a72ea.jpg', stock: 2, description: 'descripcion de velas aromaticas'},
    {id: 3, name: 'difusor anana', price: 2080, category: 'aromas', img: 'https://i.pinimg.com/236x/da/e0/5a/dae05a0590de8f89c7ddc28f69f912fa.jpg', stock: 5, description: 'descripcion de difusor anana'},
    {id: 4, name: 'difusor jazmin ', price: 1230, category: 'aromas', img: 'https://i.pinimg.com/236x/79/ee/2f/79ee2fdf0e8f0b59a351e9dc11bdb47c.jpg', stock: 5, description: 'descripcion de difusor jazmin'},
    {id: 5, name: 'vela aromatica', price: 670, category: 'aromas', img: 'https://i.pinimg.com/236x/bb/cf/97/bbcf972d1483f64adfeb767c31ad26ba.jpg', stock: 5, description: 'descripcion de vela aromatica'},
    {id: 6, name: 'difusor orquidea', price: 2000, category: 'aromas', img: 'https://i.pinimg.com/236x/64/02/ca/6402cacb60fd74ff4bad957f65e87754.jpg', stock: 5, description: 'descripcion de difusor orquidea'},
    {id: 7, name: 'mini difusores', price: 1800, category: 'aromas', img: 'https://i.pinimg.com/236x/fa/59/f4/fa59f42d87fe9318794ba49c9fdf5744.jpg', stock: 5, description: 'descripcion de mini difusores'},
    {id: 8, name: 'vaso naranja', price: 600, category: 'decoracion', img: 'https://i.pinimg.com/236x/0d/63/74/0d637401d8fb8a30730b30edd89e6bcd.jpg', stock: 5, description: 'descripcion de vaso naranja'},
    {id: 9, name: 'tetera naranja', price: 800, category: 'decoracion', img: 'https://i.pinimg.com/236x/57/ed/3f/57ed3f974ea6f9a50cd4e8f2895201c2.jpg', stock: 5, description: 'descripcion de tetera naranja'},
    {id: 10, name: 'floreros globos', price: 3500, category: 'decoracion', img: 'https://i.pinimg.com/236x/b2/0f/f4/b20ff4abdff0b16d8cfccaa200cfd721.jpg', stock: 5, description: 'descripcion de floreros globos'},
    {id: 11, name: 'vaso salmon', price: 505, category: 'decoracion', img: 'https://i.pinimg.com/236x/37/92/14/379214aaa8e41297d362d090bc6770fc.jpg', stock: 5, description: 'descripcion de vaso salmon'},
    {id: 12, name: 'combo deco', price: 1600, category: 'decoracion', img: 'https://i.pinimg.com/236x/a5/25/dc/a525dc7c274321674ce967dcf4f6295a.jpg', stock: 5, description: 'descripcion de combo deco'},
    {id: 13, name: 'combo copas', price: 5000, category: 'decoracion', img: 'https://i.pinimg.com/236x/bf/85/f7/bf85f7e8142030355785d1eca2fbf39e.jpg', stock: 5, description: 'descripcion de combo copas'},
    {id: 14, name: 'lampara doble', price: 4000, category: 'iluminacion', img: 'https://i.pinimg.com/236x/9c/74/1f/9c741f7e6a0ceba1253813129be2c487.jpg', stock: 5, description: 'descripcion de lampara doble'},
    {id: 15, name: 'porta vela triple', price: 2600, category: 'iluminacion', img: 'https://i.pinimg.com/236x/15/94/b6/1594b6d2530dd60b9b43d83cee0472a4.jpg', stock: 5, description: 'descripcion de porta vela triple'},
    {id: 16, name: 'lampara acuario', price: 4500, category: 'iluminacion', img: 'https://i.pinimg.com/236x/d6/76/fe/d676fe73fc0a0146fde1c44eec9bab1b.jpg', stock: 5, description: 'descripcion de lampara acuario'},
    {id: 17, name: 'lampara globo', price: 4800, category: 'iluminacion', img: 'https://i.pinimg.com/236x/87/75/a5/8775a583dc8c30e0a78f5e8b82542b5b.jpg', stock: 5, description: 'descripcion de lampara globo'},
    {id: 18, name: 'lampara cuadrada', price: 5100, category: 'iluminacion', img: 'https://i.pinimg.com/236x/a4/06/52/a406522c8b37462705e7eede1b7fe522.jpg', stock: 5, description: 'descripcion de lampara cuadrada'},
    {id: 19, name: 'combo lamparas', price: 8000, category: 'iluminacion', img: 'https://i.pinimg.com/236x/f3/0b/e9/f30be985154ec2c78de5c939bb1c3ec4.jpg', stock: 5, description: 'descripcion de combo lamparas'},
    {id: 20, name: 'lampara reloj arena', price: 6500, category: 'iluminacion', img: 'https://i.pinimg.com/236x/67/76/f8/6776f8b885f09738cb08df75ff9b5870.jpg', stock: 5, description: 'descripcion de lampara reloj arena'},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}