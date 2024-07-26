import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ImageSlider from './Components/ImageSlider';
// import HomeTab from './Components/HomeTab';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <HomeTab /> */}
    </div>
  );
}

export default App;
