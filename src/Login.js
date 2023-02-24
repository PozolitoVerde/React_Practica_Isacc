import React from 'react';
import GoogleLogin from 'react-google-login';

function Login() {

    const logeado_exito = (res) => 
      {
         console.log("LOGUEADO CON ÉXITO:",res.profileObj);
      }
    const fallo_login = (res) => 
      {
          console.log("FALLO EN EL ACCESO:",res.profileObj);
      }
  
   return(
    <center>         
            <GoogleLogin
            clientId="288909532575-gt4cqcelfjih7ivn76l4gj1rj52c370g.apps.googleusercontent.com"
            buttonText="INGRESAR"
            onSuccess={logeado_exito}
            onFailure={fallo_login}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />         
      </center>    
   )   
}      
export default Login;