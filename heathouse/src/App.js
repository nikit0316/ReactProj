import './App.css';
import Header from './components/Header'
import Info from './components/Info';
import ProductsChoose from './components/ProductsChoose';
import Products from './components/Products';

const App = () => {
  return (
    <div className='flex flex-col h-screen mx-40'>
      <Header />
      <Info />
      <ProductsChoose />
    </div>
  );
}

export default App;