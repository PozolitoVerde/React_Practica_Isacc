import React from 'react';
import { GoogleLogout } from 'react-google-login';
function Logout() {
    
    const Logout=()=>{
        console.log("SESIÓN TERMINADA");         
        
      }  
    return (        
            <GoogleLogout
                clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
                buttonText={"CERRAR SESIÓN"}
                onLogoutSuccess={Logout}
            />    
    )  
}/* //FIN DE LA FUNCION */

export default Logout;