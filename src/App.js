import './App.css';
import './styles.scss';

// Site Rows
import Scroller from './components/Scroller';
import Hero from "./components/HeroSection";
import GameCarousel from './components/GameCarousel';
import Filters from './components/Filters';
import TestimonialCarousel from './components/TestimonialCarousel';
import Footer from './components/Footer';



// NB make sure semantic HTML is used. 
// go through accessibility checklist


function App() {
  return (
    <div className="App">
      <Hero />
      <Scroller class="ScrollerWrapper HeroScroller" />
      <GameCarousel />
      <Filters />
      <Scroller class="ScrollerWrapper" />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
}

export default App;
