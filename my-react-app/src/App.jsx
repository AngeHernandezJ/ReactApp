import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Main from './Components/Main.jsx';
import Astros from './Components/Astros.jsx';
import About from './Components/About.jsx';
import gigi from '../src/assets/IMG_20200310_183212.jpg';
import './App.css'

function App() {

    const linksData = [
        { name: 'Home', href: '/'},
        { name: 'About', href: '/about'},
        { name: 'Astros', href: '/astros'},
    ]
    const description = "Desarrolladora Java Full-stack, experiencia trabajando con HTML5, CSS3, JavaScript, Bootstrap, React, Node. Licenciada en Tecnología con experiencia en el manejo de diversas plataformas TI y lenguajes de programación como Java, C, MatLab, Inteligencia artificial: redes neuronales artificiales, Paquetería Office, JDK, Python.";

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
                <Route 
                    element={<About myName="Angelica Hernández" correo="angelica" ocupacion={"Desarroladora"} desc={description} foto={gigi}/>}
                    path='/about'
                />
            </Routes>
            
        </>
    )
    
}

export default App
