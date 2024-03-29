import './App.css';
import About from './components/About';
import FAQs from './components/FAQs';
import HealthAgeCalculator from './components/HealthAgeCalculator';

function App() {
  return (
    <div className="App">
      <HealthAgeCalculator/>
      <FAQs/>
      <About/>
    </div>
  );
}

export default App;
