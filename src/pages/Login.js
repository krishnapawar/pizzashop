import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/serviceProvider";
import NavBar from '../layout/navBar';

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (token) => {
    if(token){
      setToken(token);
      navigate("/profile", { replace: true });
    }else{
      navigate("/", { replace: true });
    }
  };

  const loginPayload = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  }

  axios.post("https://reqres.in/api/login", loginPayload)
  .then(response => {
    //get token from response
    const token  =  response.data.token;

    //set JWT token to local
    localStorage.setItem("token", token);

    //set token to axios common header

    //redirect user to home page
    // window.location.href = '/'
    setTimeout(() => {
      handleLogin(token);
    }, 3 * 1000);
    //return login
    return <><NavBar />Login Page</>;
  })
  .catch(err => console.log(err));

  // setTimeout(() => {
  //   handleLogin();
  // }, 3 * 1000);

  // return <>Login Page</>;
};

export default Login;