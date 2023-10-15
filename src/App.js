import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header'
import Subheader from './components/Subheader/Subheader';
import Accordion from './components/Accordion/Accordion';
import StepFour from './components/StepFour/StepFour';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Subheader></Subheader>
      <Accordion></Accordion>
      <StepFour></StepFour>
    </div>
  );
}

export default App;
