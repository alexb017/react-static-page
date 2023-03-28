import Navbar from './Navbar';
import Header from './Header';
import Feature from './Feature';
import Work from './Work';
import Unique from './Unique';
import Overview from './Overview';
import Track from './Track';
import './App.css';

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="main-content">
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
        <Overview />
        <hr />
        <hr />
        <Track />
        <hr />
      </div>
    </main>
  )
}

export default App;
