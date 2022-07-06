import './App.css';
import Navbar from './Nav';
import Hero from './Hero';
import Card from './Card';
import data from './data';

function App() {
  let cards = data.map(card=> {
    return (
    <Card 
      key= {card.id}
      img= {card.coverImg}
      rating= {card.stats.rating}
      reviews= {card.stats.reviewCount}
      country= {card.location}
      title= {card.title}
      price= {card.price}
      openSpots = {card.openSpots}
    />
    )
  })
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  );
}

export default App;
