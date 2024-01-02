import { useState } from "react";
import { useAuth } from "../provider/serviceProvider";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  const [isAdding, setIsAdding] = useState(false);

  // Use useAuth and useCart hooks to access the authentication token and cart
  const { token } = useAuth();
  const { cart, setCart } = useAuth();

  const addCart = (event, product) => {
    event.preventDefault();

    // Check if the user is authenticated before adding to the cart
    // if (!token) {
    //   // You might want to handle the case where the user is not authenticated
    //   // For now, you can console.log a message
    //   console.log("User is not authenticated. Please log in.");
    //   return;
    // }

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

  const [showMore, setShowMore] = useState(false);
  const maxLength = 50;

  // Truncate the description if it's longer than maxLength
  const truncatedDescription = product.description.length > maxLength
    ? product.description.slice(0, maxLength) + '...'
    : product.description;

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
    <div className="card">
      <img
        className="card-img-top"
        src={product.image}
        alt="Product"
        style={{height:"250px"}}
      />

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">
          {showMore ? product.description : truncatedDescription}
        </p>
        {/* {product.description.length > maxLength && (
          <button onClick={toggleShowMore}>
            {showMore ? 'Read less' : 'Read more'}
          </button>
        )} */}

        <div className="row">
          <div className="col-6 text-start">
            <button href="#" className="btn btn-outline-primary btn-sm">
              {product.price}
            </button>
          </div>

          <div className="col-6 text-end">
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
    </Link>
  );
}

export default Product;
