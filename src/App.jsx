import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./home/Footer";

function App() {
  return (
    <>
      <NavItems />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
