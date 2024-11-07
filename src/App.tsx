import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"; // Importa el CartProvider
import About from "./pages/about";
import AdminPanel from "./pages/AdminPanel"; // Importa el panel de admin
import Cart from "./pages/Cart"; // Página del carrito
import Home from "./pages/index";
import Login from "./pages/Login"; // Importa la página de login
import Products from "./pages/products";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} /> {/* Ruta del carrito */}
            <Route path="/login" element={<Login />} />{" "}
            {/* Ruta de inicio de sesión */}
            <Route path="/admin-panel" element={<AdminPanel />} />{" "}
            {/* Ruta del panel de administración */}
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
