import { useState } from 'react';
import './App.css';
import CardsContainer from './components/Containers/CardsContainer/CardsContainer';
import HeaderContainer from './components/Containers/HeaderContainer/HeaderContainer';

function App() {
  const [toogleNavOption, setToogleNavOption] = useState(1)
  
  return (
    <div className="App">
          <HeaderContainer navOption={ setToogleNavOption } currentOption={ toogleNavOption }/>
          <CardsContainer navOption={ toogleNavOption } />
    </div>
  );
}

export default App;
