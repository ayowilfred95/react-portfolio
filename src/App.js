
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import ProductList from './components/productList/ProductList';
import Intro from './intro/Intro';

function App() {
  
  return (
    <div className="App">
    <Intro />
    < About />
    <ProductList />
    <Contact />
    </div>
  );
}

export default App;
