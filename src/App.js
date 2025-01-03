import Navbar from './components/navbar';
import './App.css';
import Footer from './components/footer';
import { Carousel } from './components/Carousel';
function App() {
  // const imageData = [ { src: "1.png", alt: "Image 1" }, { src: "2.png", alt: "Image 2" }, { src: "3.png", alt: "Image 3" }, ];
  return (
    <>
    <Navbar></Navbar>
    {/* <Carousel data={imageData}></Carousel> */}
    <Footer></Footer>
    </>
  );
}

export default App;
