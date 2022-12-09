import Item from "../item/item";
const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <>
            {productList.map(product => <item producto={product}/>)}
        </>
    );
}

export default ItemList;
