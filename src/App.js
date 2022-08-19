import "./App.css";
import Card from "./componentes/Card";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header"; 
import Descripcion from "./componentes/Descripcion/Descripcion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header title='Galería de Imágenes con React'/>

        <Card direccion="https://cdn.pixabay.com/photo/2022/07/11/11/01/fishes-7314666_960_720.jpg" titulo='pez' descripcion='pez amarillo'/>

        <Card direccion="https://cdn.pixabay.com/photo/2022/01/23/16/06/dog-6961236_960_720.jpg" titulo='perro' descripcion='perro blanco'/>

        <Card direccion="https://cdn.pixabay.com/photo/2022/08/05/19/21/squirrel-7367445_960_720.jpg" titulo='ardilla' descripcion='ardilla tomando agua'/>
        <span> para el texto aleatorio use lorem ipsu</span>
        <Footer descripcion='Todos los derechos reservados'/>
      </header>
    </div>
  );
}

export default App;
