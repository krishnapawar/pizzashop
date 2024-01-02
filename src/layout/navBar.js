import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { isLogedIn } from "../helpers";
import { useAuth } from "../provider/serviceProvider";

export default function NavBar() {
  const cartStyle = {
    background: '#F59E0D',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px'
  }
  const { cart } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {isLogedIn() ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form>
            <ul className="navbar-nav ms-3">
            <li className="ml-6">
              <Link to="/cart" style={{ textDecoration: 'none' }}>
                <div style={cartStyle}>
                  <span>{cart.totalItems ? cart.totalItems : 0}</span>
                  <img className="ml-2" src="/images/cart1.png" alt="cart-icon" style={{ width: '24px' }} />
                </div>
              </Link>
            </li>
            </ul>
            
          </div>
        </div>
      </nav>
      {/* <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {isLogedIn() ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </div> */}
    </>
  );
}
