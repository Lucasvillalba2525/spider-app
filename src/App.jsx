import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Detalle from './components/Detalle';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Pokemons />} />
        <Route path='/Detalle/:id' element={<Detalle />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
