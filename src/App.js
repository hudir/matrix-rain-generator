import { useContext } from 'react';

import './App.css';

import BackGround from './components/backGround/BackGround';
import Home from './components/home/Home';
import Store from './store/store';

function App() {
  const {sideMenus} = useContext(Store)
 
  return (
    <div className="App">
      <BackGround />

      {sideMenus && <Home />}


    </div>
  );
}

export default App;
