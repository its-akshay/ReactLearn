import About from './Components/About';
import { Body } from './Components/Body';
import Header from './Components/Header';
import Weather from './Components/Weather'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Weather />
      <Header />
      <Body />
    </>
  );
};

// Define your router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/weather",
    element: <Weather />
  }
]);

// Export RouterProvider for rendering in main.jsx
export default function MainRouter() {
  return <RouterProvider router={appRouter} />;
}
