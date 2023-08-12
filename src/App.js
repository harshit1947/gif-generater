
import './App.css';
import Tag from './components/Tag';
import Random from './components/Random'

function App() {
  return (
    <div className='app-container'>
       <h2 className='heading'>RANDOM GIF</h2>
       <Random/>
       <Tag/>
    </div>
  );
}

export default App;
