import { createBrowserRouter ,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"; 
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";


const router = createBrowserRouter([
  { path: '/', element: <RootLayout /> , children: [
    {path: '/', element: <HomePage />} , 
    {path: '/products', element: <Products />} , 
  ] , 
  errorElement: <ErrorPage />
},
   

]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
