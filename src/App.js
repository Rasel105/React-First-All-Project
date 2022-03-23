import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar';
import Products from './components/AllProducts/Products';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [count, setCount] = useState(0)
  const setCartCount = () => {
    setCount(count + 1)
  }
  useState(() => {
    AOS.init();
  })
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Products setCartCount={setCartCount}></Products>
    </div>
  );
}

export default App;
