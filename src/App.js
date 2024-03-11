import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { DestinationsContainer } from './Components/DestinationContainer';
import { CrewContainer } from './Components/CrewContainer';
import { TechnologyContainer } from './Components/TechnologyContainer';

function App() {
  return (
    <div className="App">
      <div className="home-background">
        <Header />
        <Hero />
      </div>
      <DestinationsContainer />
      <CrewContainer />
      <TechnologyContainer />
    </div>
  );
}

export default App;
