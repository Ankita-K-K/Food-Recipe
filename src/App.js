import { Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import GlobalState from './context/SearchContext';

function App() {
  return (
    
      <div className="App">
        <GlobalState>
          <NavBar />
          <Outlet />
        </GlobalState>
      </div>
  );

}

export default App;
