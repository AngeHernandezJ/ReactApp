import './About.css';

function About ({myName,correo,desc,foto}) {
    return (
        <div className="card">
            <div className="cp">
            <h1>Hola</h1>
            <p>Nombre: {myName}</p>
            <p>Correo: {correo}</p>
            <p>Descripción: {desc}</p>
            </div>
            <div className="cs">
            <p><img src={foto}/></p>
            </div>
        </div>
    );   
}

export default About;
