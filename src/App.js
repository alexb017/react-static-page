import Navbar from './Navbar';
import Header from './Header';
import Feature from './Feature';
import Work from './Work';
import Unique from './Unique';
import Overview from './Overview';
import Track from './Track';
import Place from './Place';
import Definition from './Definition';
import Review from './Review';
import Advantages from './Advantage';
import Price from './Price';
import Questions from './Questions';
import Outro from './Outro';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <main className="main">
      <Navbar />
      <div className="main-content">
        <Header />
        <Feature />
        <Work />
        <Unique />
        <Overview />
        <Track />
        <Place />
        <Definition />
        <Review />
        <Advantages />
        <Price />
        <Questions />
        <Outro />
        <Footer />
      </div>
    </main>
  )
}

export default App;
