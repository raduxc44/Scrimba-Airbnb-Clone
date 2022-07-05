import './App.css';
import Navbar from './Nav';
// import Hero from './Hero';
import Card from './Card';
import data from './data';

function App() {
  let cards = data.map(card=> {
    return (
    <Card 
      img= {card.coverImg}
      rating= {card.stats.rating}
      reviews= {card.stats.reviewCount}
      country= {card.location}
      title= {card.title}
      price= {card.price}
    />
    )
  })
  return (
    <div className='App'>
      <Navbar />
      {/* <Hero /> */}
      {cards}
    </div>
  );
}

export default App;
