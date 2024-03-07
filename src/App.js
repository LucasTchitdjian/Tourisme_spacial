import './App.css';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import { DestinationsContainer } from './Components/DestinationContainer';
import { CrewCommander } from './Components/CrewCommander';
import { CrewMissionSpecialist } from './Components/CrewMissionSpecialist';
import { CrewPilot } from './Components/CrewPilot';
import { CrewFlightEngineer } from './Components/CrewFlightEngineer';
import { SpaceLaunchVehicle } from './Components/SpaceLaunchVehicle';
import { Spaceport } from './Components/Spaceport';
import { Spacecapsule } from './Components/Spacecapsule';

function App() {
  return (
    <div className="App">
      <div className="home-background">
        <Header />
        <Hero />
      </div>
      <DestinationsContainer/>
    </div>
  );
}

export default App;
