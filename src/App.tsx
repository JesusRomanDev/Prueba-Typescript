import { useState } from 'react'
import './App.css'
import productos from './db/db'
import Footer from './Footer';

function App() {
  const [nuevoProducto, setNuevoProducto] = useState({nombre: '', precio: 0});
  const [producto, setProducto] = useState(productos);
  const [sumando, setSumando] = useState(0);

  const agregarProducto = () => {
    setProducto([...producto, {id: producto.length + 1, nombre: nuevoProducto.nombre, precio: nuevoProducto.precio}])
    setNuevoProducto({nombre: '', precio: 0});
  }

  //Previous State con Funciones Modificadoras
  const sumaBoton = () => {
    setSumando(prev => prev + 1);
    setSumando(prev => prev + 3);
  }

  return (
    <>
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {producto.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
    <p>¿Quisieras agregar otro producto?</p>
    <input value={nuevoProducto.nombre} onChange={e => setNuevoProducto({...nuevoProducto, nombre: e.target.value})} type="text" />
    <input value={nuevoProducto.precio} onChange={e => setNuevoProducto({...nuevoProducto, precio: Number(e.target.value)})} type="text" />
    <button onClick={ ()=> agregarProducto()}>Agregar</button>
    <p>{sumando}</p>
    <button onClick={sumaBoton}>Suma</button>
    <Footer producto={producto} number={10} />
    </>
  )
}

export default App
