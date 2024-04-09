import { useState } from "react"; 

import Navigation from "./components/Navigation"
import Notification from "./components/Notification"
import Home from "./components/Home";

function App() {
  const [isActive, setIsActive] = useState('home');

  function handleActive(buttonActive){
    setIsActive(buttonActive);
  }

  return (
    <>
      <Navigation isSelected={isActive} onSelect={handleActive} />
      {isActive === 'home' && <Home onSelect={handleActive} />}
      {isActive === 'notification' && <Notification />}
      {isActive === 'account' && <Notification />}
    </>
  )
}

export default App
