import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { DestinationsContainer } from './Components/DestinationContainer';
import { CrewContainer } from './Components/CrewContainer';

function App() {
  return (
    <div className="App">
      <div className="home-background">
        <Header />
        <Hero />
      </div>
      <DestinationsContainer />
      <CrewContainer />
    </div>
  );
}

export default App;
