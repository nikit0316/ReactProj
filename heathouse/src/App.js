import './App.css';
import Header from './components/Header'
import Info from './components/Info';

const App = () => {
  return (
    <div className='flex flex-col h-screen mx-40'>
      <Header />
      <Info />
    </div>
  );
}

export default App;