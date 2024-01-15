import './App.css';
import Navbar from './Components/navbar';
import Intro from './Components/intro';
import Options from './Components/options';
import How from './Components/how';
import About from './Components/about';
import Why from './Components/why';
import Join from './Components/Join';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Options/>
      <How/>
      <About/>
      <Why/>
      <Join/>
      <Footer/>
  
    </div>
  );
}

export default App;
