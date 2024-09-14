import { lazy, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import EditProfileContextProvider from "./store/edit-profile-context";
import Navigation from "./components/Navigation/Navigation";
import NavigationResponsive from "./components/Navigation/NavigationResponsive";
import LoginRoot from "./page/LoginRoot";
import AccountRoot from "./page/AccountRoot";

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
  useEffect(() => {
    console.log(window.location.pathname);
  }, []);

  const router = createBrowserRouter([
    {
      path: "signup",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Signup />
        </Suspense>
      ),
    },
    {
      path: "login",
      element: <LoginRoot />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "identify",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ForgotPassword />
            </Suspense>
          ),
        },
        {
          path: "verify",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Verify />
            </Suspense>
          ),
        },
        {
          path: "resetpassword",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ResetPassword />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/",
      element: (
        <>
          <ScrollRestoration
            getKey={(location, matches) => {
              const paths = ["/friend", "/otheraccount"];
              return paths.includes(location.pathname)
                ? location.key
                : location.pathname;
            }}
          />
          <Navigation />
          <NavigationResponsive />
        </>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "search",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "notification",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Notification />
            </Suspense>
          ),
        },
        {
          path: "account",
          element: <AccountRoot />,
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <Account />
                </Suspense>
              ),
            },
            {
              path: "editProfile",
              element: (
                <Suspense fallback={<div>Loading...</div>}>
                  <EditProfileContextProvider>
                    <EditProfile />
                  </EditProfileContextProvider>
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "friend",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Friend />
            </Suspense>
          ),
        },
        {
          path: "newBlog",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <NewBlog />
            </Suspense>
          ),
        },
        {
          path: "otheraccount",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <OtherAccount />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
