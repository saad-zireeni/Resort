import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Foot from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/About-us/About";
import Contactus from "./pages/Contact-us/Contact";
import Resorts from "./pages/Customer/Resorts";
import Details from "./pages/Details/Details";
import PaymentPage from "./pages/payment/Payment";
import Signup from "./pages/Login&Signup/Signup";
import Login from "./pages/Login&Signup/Login";
import Resort from "./pages/Provider/Resort";
import Add from "./pages/Provider/Add";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/resorts" element={<Resorts />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/payment/:id" element={<PaymentPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/provider" element={<Resort />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
