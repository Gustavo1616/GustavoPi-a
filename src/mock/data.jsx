export const productosDb= [
    {
        name:'Casco',
        stock:6,
        price:15000,
        description:'breve descripcion del producto',
        img:'../public/products/casco.png',
        category:'ofertas'
    },
    {
        name:'Chaleco',
        stock:10,
        price:50000,
        description:'breve descripcion del producto',
        img:'../public/products/chaleco.png',
        category:'mas vendidos'
    },
    {
        name:'Cinturon',
        stock:20,
        price:8000,
        description:'breve descripcion del producto',
        img:'../public/products/cinturon.png',
        category:'mas vendidos'
    },
    {
        name:'Guantes',
        stock:50,
        price:5000,
        description:'breve descripcion del producto',
        img:'../public/products/guantes.png',
        category:'mas vendidos'
    },
    {
        name:'Pantalon',
        stock:50,
        price:25000,
        description:'breve descripcion del producto',
        img:'../public/products/pantalon.png',
        category:'mas vendidos'
    }
]

export const getProductos = () =>{
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente mas tarde')
            }else{
                resolve(productosDb)
            }
        },2000)
    })
}

export const getOneProducto = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let producto = productosDb.find((item)=> item.id === id)
                resolve(producto)
            }else{
                reject('No hay data')
            }
        },2000)
    })
}