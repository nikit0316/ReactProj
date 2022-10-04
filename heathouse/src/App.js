import './App.css';
import Header from './components/Header'
import Home from './pages/Home';

const App = () => {
  return (
    <div className='flex h-screen w-screen'>
      <Header />
      <Home />
    </div>
  );
}

export default App;