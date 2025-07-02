import { Outlet } from "react-router"
import Navbar from "./components/layout/Navbar"


function App() {
  return (
    <>
    <Navbar></Navbar>
    <h1>This is The new thing</h1>
    <Outlet/>
    </>
  )
}

export default App