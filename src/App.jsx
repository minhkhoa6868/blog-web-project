import { useState, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import NavigationResponsive from "./components/Navigation/NavigationResponsive";

const Signup = lazy(() => import("./page/Signup"));
const Login = lazy(() => import("./page/Login"));
const Home = lazy(() => import("./page/Home"));
const Search = lazy(() => import("./page/Search"));
const Friend = lazy(() => import("./page/Friend"));
const Notification = lazy(() => import("./page/Notification"));
const Account = lazy(() => import("./page/Account"));
const NewBlog = lazy(() => import("./page/NewBlog"));
const EditProfile = lazy(() => import("./page/EditProfile"));
const OtherAccount = lazy(() => import("./page/OtherAccount"));

function App() {
  const [isActive, setIsActive] = useState(
    window.location.pathname == "/" ? "home" : localStorage.getItem("isActive")
  );
  const [isFollow, setIsFollow] = useState(false);

  const handleFollow = () => {
    setIsFollow((prevState) => !prevState);
  };

  function handleActive(buttonActive) {
    setIsActive(buttonActive);
    localStorage.setItem("isActive", buttonActive);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route 
          path="/signup" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Signup />
            </Suspense>
          }
        />
        <Route 
          path="/login" 
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
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
              <NavigationResponsive isSelected={isActive} onSelect={handleActive} />
            </>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home isActive={isActive} onSelect={handleActive} />
              </Suspense>
            }
          />
          <Route
            path="/search"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Search />
              </Suspense>
            }
          />
          <Route
            path="/notification"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Notification />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Account isActive={isActive} onSelect={handleActive} />
              </Suspense>
            }
          />
          <Route
            path="/friend"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Friend />
              </Suspense>
            }
          />
          <Route
            path="/newBlog"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NewBlog />
              </Suspense>
            }
          />
          <Route
            path="/editProfile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <EditProfile />
              </Suspense>
            }
          />
          <Route
            path="/otheraccount"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <OtherAccount
                  status={isFollow ? "Following" : "Follow"}
                  handleFollow={handleFollow}
                />
              </Suspense>
            }
          />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
