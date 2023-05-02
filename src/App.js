import { useState } from 'react';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <Navbar cartvalue={cartValue} setCartvalue={setCartValue} />
      <Main setCart={setCartValue} />
    </>
  );
};

export default App;
