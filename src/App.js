import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedRoute ><Home /></ProtectedRoute>} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<ProtectedRoute ><About /></ProtectedRoute>} />
      <Route path="cart" element={<ProtectedRoute ><Cart /></ProtectedRoute>} />
      <Route path="checkout" element={<ProtectedRoute ><Checkout /></ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
