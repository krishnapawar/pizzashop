import Product from "../components/Product";
import NavBar from "../layout/navBar";
import productList from "../product.json";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/serviceProvider";

export const ProductDetial = ()=>{
    const findById=(data,id)=>{
        return data.find(i=>i.id === id);
    }
    const [product,setProduct]=useState({});
    let params = useParams();
    let history=useNavigate();
    const [isAdding, setIsAdding] = useState(false);
    
    useEffect(()=>{
        let pro = findById(productList.foodList, parseInt(params._id));
        setProduct(pro);
        setIsAdding(true)
        setTimeout(()=>{
            setIsAdding(false)
        },1000)
    },[params._id]);

    const { cart, setCart } = useAuth();

  const addCart = (event, product) => {
    event.preventDefault();

    // Clone the cart to avoid modifying the state directly
    let _cart = { ...cart };

    // Initialize the items object if it doesn't exist
    if (!_cart.items) {
      _cart.items = {};
    }

    // Update the quantity of the product in the cart
    if (_cart.items[product.id]) {
      _cart.items[product.id] += 1;
    } else {
      _cart.items[product.id] = 1;
    }

    // Update the totalItems count
    _cart.totalItems = (_cart.totalItems || 0) + 1;

    // Update the cart state
    setCart(_cart);

    // Display the "added" message and reset after 2.5 seconds
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };
    
    return(
        <>
            <NavBar/>

            <h1>Product Details</h1>
            <button className="btn btn-warning my-2" onClick={()=> history(-1)}>back</button>
            <div>
                <div className="card">
                    <img
                        className="card-img-top"
                        src={product.image}
                        alt="Product"
                        style={{ minWidth: '40%', height: "400px" }}
                    />

                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>

                        <div className="row">

                        <div className="col-12">
                            <button href="#" className="btn btn-outline-primary btn-sm mx-4">
                            {product.price}
                            </button>
                            <button
                            disabled={isAdding}
                            className={`${
                                isAdding
                                ? "btn btn-warning btn-sm"
                                : "btn btn-primary btn-sm"
                            }`}
                            onClick={(e) => {
                                addCart(e, product);
                            }}
                            >
                            Add{isAdding ? "ed" : ""}
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    );
}