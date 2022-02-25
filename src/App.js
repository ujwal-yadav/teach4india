import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar'
import { Carousel } from './Components/Carousel';
import { Writtencontent } from './Components/Writtencontent';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Writtencontent/>
      <Footer/>
    </div>
  );
}

export default App;