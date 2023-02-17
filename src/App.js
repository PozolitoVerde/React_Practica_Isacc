import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import img from "./imgs/foto.jpeg";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carrusel from "./carrusel";
import GoogleMap from './mapsAPI'
import pdf from './files/cv.pdf';

import { faCode, faFileLines, faGraduationCap, faHome, faImage, faLocationDot, faPen, faSchool, faUser } from '@fortawesome/free-solid-svg-icons'



function Home() {
  return (
    <div className="home-wrapper">
      {/* <h1 className="home">Home</h1> */}
      <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title>Metodo render</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          Técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función. Un componente con una render prop toma una función que devuelve un elemento de React y lo llama en lugar de implementar su propia lógica de representación.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Metodo Strick Mode</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          El modo estricto simplifica el modo en que el nombre de una variable es asignado a un variable particular en el código. Muchas optimizaciones del compilador se basan en la habilidad para decir el lugar específico en que una variable está almacenada, lo cual es crítico para una optimización completa del código JavaScript.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Metodo Return</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
        <Card.Text>
          La sentencia return se emplea para salir de la secuencia de ejecución de las sentencias de un método y, opcionalmente, devolver un valor. Tras la salida del método se vuelve a la secuencia de ejecución del programa al lugar de llamada de dicho método.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  );
}
function Nombre() {
  return(
  <div className="nombre-wrapper">
    <h1 className="nombre">Renteria Meza Angel Eduardo</h1>
  </div>
  )
}
function UTD() {
  return(
  <div className="utd-wrapper">
    <h1 className="utd">UTD</h1>
  </div>
  )
}
function Carrera() {
  return(
  <div className="carrera-wrapper">
    <h1 className="carrera">Desarrollo de Software Multiplataforma</h1>
  </div>
  )
}
function Logo() {
  return(
    <div className="wrapper-center">
      <a href="https://utd.edu.mx"><img alt="Logo UTD" className="utd-logo" src='https://www.seekpng.com/png/detail/263-2635426_deportes-utd-universidad-tecnologica-de-durango-logo.png'></img></a>
    </div>
  )
}
function Foto() {
  return(
  <div className="wrapper-center">
    <h2 style={{alignSelf: 'end', marginBottom: '4rem'}}>Hola Mundo por Siempre!!!!!</h2>
    <img alt="Perfil" className="fotopro" src={img} style={{alignSelf: 'start'}}></img>
  </div>
  )

}
function Alumnos() {
  return(

    <div className="wrapper-center">
      <iframe title="curriculum" src={pdf} height='70%' width='100%'></iframe>
    </div>

  )
}

function App() {

  const links = [['Home', faHome], ['Nombre', faPen], ['UTD', faSchool], ['Carrera', faCode], ['Logo', faGraduationCap], ['Foto', faUser], ['Alumnos', faFileLines], ['Mapa', faLocationDot], ['Galeria', faImage]]

  const [nav, setNav] = useState(false)

  const navToggle = () =>{
    setNav(!nav)
  }
  return (
    <div className="app">
        <nav className={`${nav ? 'nav-open' : 'nav-collapsed'}`}>  
        
        <ul>
          {
            links.map(link =>(
              <Button variant="light"><li key={link[0]}><Link to={link[0] === 'Home' ? '/' : link[0].toLowerCase()}><span className="nav-link-style">{link[0]}</span></Link></li></Button>
            ))
          }
        </ul>
       </nav> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nombre" element={<Nombre />} />
        <Route path="/UTD" element={<UTD />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/carrera" element={<Carrera />} />
        <Route path="/foto" element={<Foto />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/galeria" element={<Carrusel />} />
        <Route path="/mapa" element={<GoogleMap />} />
      </Routes>
    </div>
  );
}

export default App;
