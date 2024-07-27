import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ImageSlider from './Components/ImageSlider';
import VideoCard from './Components/VideoCard';
// import HomeTab from './Components/HomeTab';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <VideoCard /> */}
      {/* <HomeTab /> */}
    </div>
  );
}

export default App;
