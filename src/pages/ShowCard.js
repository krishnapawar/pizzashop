import NavBar from "../layout/navBar";
import { useAuth } from "../provider/serviceProvider";
import product  from "../product.json";
import { useEffect,useState } from "react";
export const ShowCard =()=>{
    function findOneData(data,conditionCallback) {
        return  data.find(item => conditionCallback(item));
    }
    function findData(data,conditionCallback) {
        return  data.filter(item => conditionCallback(item));
    }
    
    const [products, setProducts] =useState([]);
    const [priceTongle, setPriceTongle] =useState(false);

    let total=0;

    const {cart, setCart} = useAuth();

    useEffect(()=>{
        if (priceTongle || Object.keys(cart).length === 0){
            console.log("cart.length",Object.keys(cart).length === 0);
            return;
        }
        // Assuming cart.items is an object with product IDs as keys
        const cartItemIds = Object.keys(cart.items);

        // Find the product in the foodList based on the keys of cart.items
        const prod = findData(product.foodList, item => cartItemIds.includes(String(item.id)));
        if(!prod.length){
            setProducts([]);
            setPriceTongle(false);
        }else{
            setProducts(prod);
            setPriceTongle(true);
        }
        
        console.log("prod",prod,product.foodList);  
    },[cart,priceTongle]);
    const getQty =(id)=>{
        return cart.items[id];
    }
    const getTotalPrice=(price,qnt)=>{
        let sum = price * qnt;
        total += sum;
        return sum;
    }
    const increment = (id)=>{
        const productQnt = cart.items[id];
        const _cart = {...cart};
        _cart.items[id] = productQnt + 1;
        _cart.totalItems += 1;
        setCart(_cart);
    }

    const decrement = (id)=>{
       const productQnt = cart.items[id];
        if(productQnt===1){
            return;
        }
        const _cart = {...cart};
        _cart.items[id] = productQnt - 1;
        _cart.totalItems -= 1;
        setCart(_cart);
    }
     const removeItem =(id)=>{
        const _cart = {...cart};
        _cart.totalItems -= _cart.items[id];
        delete _cart.items[id];
        setCart(_cart);
        setPriceTongle(false);
     }
    
    
    const handleOrderNow =()=>{
        alert("Your order has been placed");
        setCart({});
        setProducts([]);
    }
    console.log(cart);
    	return(
            <>
            <NavBar />
            <table className="table table-striped table-hover  mt-2">
            {
                !products.length ?
                <div className="container text-center my-5">
                    <img className="img" src="/images/empty-cart.png" alt="" width={'500px;'} />
                </div>
                
                :
                <tr>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
            }
            
                
                {
                    products.map((item,index)=>{
                        return (
                            <tr key={"title"+index}>
                                <td >{index + 1}</td>
                                <td><img src={item.image} alt="" width='100' height='100' /></td>
                                <td >{item.title}</td>
                                <td>${item.price}</td>
                                <td>{getQty(item.id)}</td>
                                <td>${getTotalPrice(item.price, getQty(item.id)).toFixed(2)}</td>
                                <td>
                                    <button onClick={() => decrement(item.id)} className="btn btn-primary">-</button>
                                    &nbsp;
                                    <button onClick={() => increment(item.id)} className="btn btn-primary ml-4 mr-4">+</button>
                                    &nbsp;
                                    <button onClick={() => removeItem(item.id)} className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        )})
                }
            </table>
            <hr/>
            {
            products.length ?
            <div className="row">
                <div className="col-6">
                    <div className="text-right mt-6">
                        <button onClick={handleOrderNow} className="btn btn-warning">Order Now</button>
                    </div>
                </div>

                <div className="col-6">
                    <div className="text-right">
                        <b>Total Items:</b> { cart.totalItems??'' }
                        &nbsp;&nbsp;
                        <b>Grand Total:</b> ₹ { total.toFixed(2)??'' }
                    </div>
                </div>
                <hr className="mt-2"/>
            </div>
            :""
            }
            </>
        );
}