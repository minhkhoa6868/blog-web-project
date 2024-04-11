import { useState } from "react"; 

import Navigation from "./components/Navigation/Navigation"
import Notification from "./page/Notification"
import Home from "./page/Home";
import Account from "./page/Account";

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
      {isActive === 'account' && <Account onSelect={handleActive} />}
    </>
  )
}

export default App
