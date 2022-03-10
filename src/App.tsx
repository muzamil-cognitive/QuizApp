import './App.css';
import Form from './Components/Form';
import {
  Routes,
  Route,
} from "react-router-dom";
import Questions from './Components/Questions';
import Results from './Components/Results';


const App=()=> {
  return (
    <div role='contentinfo' className='app'>
      <Routes>
<Route path='/' element={<Form/>}/>
<Route path='/question/:name' element={<Questions/>}/>
<Route path='/result' element={<Results/>}/>
      </Routes>

    </div>
  );
}

export default App;
