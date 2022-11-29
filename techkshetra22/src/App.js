import './App.css';
import Landing from './components/Landing';
import Header from './components/Navbar';

function App() {
  return (
    <div className='bg-black text-slate-100'>
      <Header/>
      <Landing/>
    </div>
  );
}

export default App;
