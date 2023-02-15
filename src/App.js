import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import './App.css';

function App() {
  const router = createBrowserRouter([{
    path: '/',
    element: <Homepage />
  }, {
    path: '/signin',
    element: <Signin />
  }])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
