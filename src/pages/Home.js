import NavBar from "../layout/navBar";
import Product from "../components/Product";
import product from "../product.json";

function Home() {
  const { foodList } =product;

    return (
      <div>
        <NavBar />
        <div className="hero py-16">
            <div className="container row mt-4">
                <div className="col-6 text-start">
                    <h6 className="text-lg"><em>Are you hungry?</em></h6>
                    <h1 className="text-3xl md:text-6xl font-bold">Don't wait !</h1>
                    <button className="btn btn-warning">Order Now</button>
                </div>
                <div className=" col-6 text-end">
                    <img className="w-4/5" src="/images/pizza.png" alt="pizza" width={"250px"}/>
                </div>
            </div>
        </div>

        <div className="row">
          {foodList.map((pro)=>{
            return(
              <div className="col-sm-3 mt-2 mb-2">
                <Product key={pro.id} product={pro}></Product>
              </div>
            )
          })}
        </div>
      </div>
    );
 }
 
 export default Home;