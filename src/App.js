import './App.css';
import Header from './components/Header/Header';
import { ShoppingProvider } from './context/ShoppingContext';
import ShoppingCart from './views/ShoppingCart/ShoppingCart';

function App() {
  return (
    <div className="App">
      <ShoppingProvider>
        <Header />
        <ShoppingCart />
      </ShoppingProvider>
    </div>
  );
}

export default App;
