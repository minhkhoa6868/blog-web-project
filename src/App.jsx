import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Notification from "./page/Notification";
import Home from "./page/Home";
import Account from "./page/Account";
import Friend from "./page/Friend";

function App() {
  const [isActive, setIsActive] = useState("home");

  function handleActive(buttonActive) {
    setIsActive(buttonActive);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <>
            <ScrollRestoration
              getKey={(location, matches) => {
                return location.pathname;
              }}
            />
            <Navigation isSelected={isActive} onSelect={handleActive} />
          </>
        }
      >
        <Route
          index
          element={isActive === "home" && <Home onSelect={handleActive} />}
        />
        <Route
          path="/notification"
          element={isActive === "notification" && <Notification />}
        />
        <Route
          path="/account"
          element={
            isActive === "account" && <Account onSelect={handleActive} />
          }
        />
        <Route path="/friend" element={isActive === "friend" && <Friend />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
