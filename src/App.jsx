import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  ScrollRestoration,
} from "react-router-dom";
import PageContextProvider from "./store/page-context";
import BlogContextProvider from "./store/blog-context";
import Navigation from "./components/Navigation/Navigation";
import NavigationResponsive from "./components/Navigation/NavigationResponsive";

const Signup = lazy(() => import("./page/Signup"));
const Login = lazy(() => import("./page/Login"));
const ForgotPassword = lazy(() => import("./page/ForgotPassword"));
const Verify = lazy(() => import("./page/Verify"));
const ResetPassword = lazy(() => import("./page/ResetPassword"));
const Home = lazy(() => import("./page/Home"));
const Search = lazy(() => import("./page/Search"));
const Friend = lazy(() => import("./page/Friend"));
const Notification = lazy(() => import("./page/Notification"));
const Account = lazy(() => import("./page/Account"));
const NewBlog = lazy(() => import("./page/NewBlog"));
const EditProfile = lazy(() => import("./page/EditProfile"));
const OtherAccount = lazy(() => import("./page/OtherAccount"));

function App() {
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
          path="/identify"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/verify"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Verify />
            </Suspense>
          }
        />
        <Route
          path="/resetpassword"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ResetPassword />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <>
              <ScrollRestoration
                getKey={(location, matches) => {
                  const paths = ["/otheraccount"];
                  return paths.includes(location.pathname)
                    ? location.key
                    : location.pathname;
                }}
              />
              <Navigation />
              <NavigationResponsive />
            </>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BlogContextProvider>
                  <Home />
                </BlogContextProvider>
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
                <BlogContextProvider>
                  <Notification />
                </BlogContextProvider>
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BlogContextProvider>
                  <Account />
                </BlogContextProvider>
              </Suspense>
            }
          />
          <Route
            path="/friend"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <BlogContextProvider>
                  <Friend />
                </BlogContextProvider>
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
                <BlogContextProvider>
                  <OtherAccount />
                </BlogContextProvider>
              </Suspense>
            }
          />
        </Route>
      </>
    )
  );

  return (
    <PageContextProvider>
      <RouterProvider router={router} />
    </PageContextProvider>
  );
}

export default App;
