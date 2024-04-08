import { useState } from "react"; 

import Navigation from "./components/Navigation"
import Notification from "./components/Notification"

function App() {
  const [isActive, setIsActive] = useState('home');

  function handleActive(buttonActive){
    setIsActive(buttonActive);
  }

  return (
    <>
      <Navigation isSelected={isActive} onSelect={handleActive} />
      {isActive === 'notification' && <Notification />}
    </>
  )
}

export default App
