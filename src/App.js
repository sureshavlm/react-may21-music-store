import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Product from './components/products/Product';

const App = () => {
  return(
    <div className = "container">
      <Header />
      <Product />
    </div>
  )
}

export default App;
