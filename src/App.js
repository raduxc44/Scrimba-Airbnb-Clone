import './App.css';
import Navbar from './Nav';
import Hero from './Hero';
import Card from './Card';
import Katie from './images/katie-zaferes.png'

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <Hero /> */}
      <Card 
      img= {Katie}
      rating= {5}
      reviews= {6}
      country= {'USA'}
      title= {'Life lessons with Katie Zaferes'}
      price= {136}
      />
    </div>
  );
}

export default App;
