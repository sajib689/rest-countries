import './App.css';
import Countries from './Components/Countries/Countries';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

export default App;