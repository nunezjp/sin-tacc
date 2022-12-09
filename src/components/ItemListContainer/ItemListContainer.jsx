// Modifica array de objetos 
import { useState,useEffect } from "react";
import itemList from "../itemList/itemList"
import { consultarBBD } from '../../assets/funciones'

//Consultar BBD
const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBBD().then(productList => {
            const cadProductos = itemList({productList})
             setProductos(cadProductos) 
        })

    }, []);

// [] cuando sucedan cambios en toda el array
// [propiedad] cuando se mofifica un objeto interno del array
    return (

        <>
            <p>{greeting}</p>
        </>
    );
}

export default ItemListContainer;
