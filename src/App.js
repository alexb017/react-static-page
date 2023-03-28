import Navbar from './Navbar';
import Header from './Header';
import Feature from './Feature';
import Work from './Work';
import Unique from './Unique';
import './App.css';

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="container">
        <Header />
        <hr />
        <hr />
        <Feature />
        <hr />
        <Work />
        <hr />
        <hr />
        <Unique />
        <hr />
        <hr />
      </div>
    </main>
  )
}

export default App;
