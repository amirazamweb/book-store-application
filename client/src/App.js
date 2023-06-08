import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminRoute from "./protectedRoutes/AdminRoute";
import AdminProfile from "./pages/admin/AdminProfile";
import CreateProduct from "./pages/admin/CreateProduct";
import UserRoute from "./protectedRoutes/UserRoute";
import UserProfile from "./pages/user/UserProfile";
import Orders from "./pages/user/Orders";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/admin" element={<AdminRoute />}>
        <Route path="profile" element={<AdminProfile />} />
        <Route path="create-product" element={<CreateProduct />} />
      </Route>
      <Route path="/dashboard/user" element={<UserRoute />}>
        <Route path="profile" element={<UserProfile />} />
        <Route path="orders" element={<Orders />} />
      </Route>
      <Route path="/product/:slug" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
