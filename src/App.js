

import './App.css';
import { CapitalCities } from './Componentes/CapitalCities';
import { FlagQuestions } from './Componentes/Flags';
import { PeriodicQuestions } from './Componentes/PeriodicTable';
function App() {
  
  return (
    <section>
      <FlagQuestions/>
      <PeriodicQuestions/>
      <CapitalCities/>
    </section>
  );
}

export default App;
