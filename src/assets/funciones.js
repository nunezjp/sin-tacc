const consultarBBD = async () =>{
   const Response= await fetch('./json/productos.json')
    const productos = await Response.json()
    return productos
}
export {consultarBBD}