import Navbar from "./components/Navbar"
import { createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { RouterProvider } from "react-router-dom"
function App() {

  const router = createBrowserRouter([
    {path : "/", element : <><Navbar/><Home/></>},
    {path : "/home" , element : <><Navbar/><Home/></>},
    {path : "/about" , element : <><Navbar/><About/></>},
    {path : "/projects" , element : <><Navbar/><Projects/></>},
    {path : "/contact" , element : <><Navbar/><Contact/></>}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
