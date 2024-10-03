import About from './Components/About';
import { Body } from './Components/Body';
import Header from './Components/Header';
import Weather from './Components/Weather'
import Error from './Components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';

const App = () => {
  return (
    <>

      <Header />
      <Outlet />
      <Body />
    </>
  );
};

// Define your router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
    ],
  },
  {
    path: "restaurant/:id",
    element: <RestaurantMenu />
  },
  {
    path: "/weather",
    element: <Weather />
  },

]);

// Export RouterProvider for rendering in main.jsx
export default function MainRouter() {
  return <RouterProvider router={appRouter} />;
}
