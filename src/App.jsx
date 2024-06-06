import { useState, useEffect } from "react";
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
import NewBlog from "./page/NewBlog";

function App() {
  const [isActive, setIsActive] = useState(window.location.pathname == '/' ? 'home' : localStorage.getItem('isActive'));

  console.log(window.location.pathname);
  console.log(isActive);

  function handleActive(buttonActive) {
    setIsActive(buttonActive);
    localStorage.setItem("isActive", buttonActive);
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
        <Route index element={<Home onSelect={handleActive} />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/account" element={<Account onSelect={handleActive} />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/newBlog" element={<NewBlog />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
