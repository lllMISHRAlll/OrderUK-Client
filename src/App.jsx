import React, { useContext, useEffect } from "react";
import style from "./styles/App.module.css";
import { UserInfoContext } from "./context/UserInfo.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { CartInfoProvider } from "./context/CartInfo.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Address from "./pages/Address.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import Profile from "./pages/Profile";
import ProductAdd from "./pages/ProductAdd.jsx";
import axios from "axios";
import withAuth from "./hoc/withAuth.jsx";
import SignUp from "./component/SignUp.jsx";
import LogIn from "./component/LogIn.jsx";
import { getBaseURI } from "./utils/config.js";

function App() {
  const token = localStorage.getItem("token");
  const { userInfo, setUserInfo } = useContext(UserInfoContext);

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (!token) return;

      try {
        const { data } = await axios.get(`${getBaseURI()}/api/user/userinfo`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserInfo(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, [token]);

  const ProtectedProductPage = withAuth(ProductPage);
  const ProtectedCheckoutPage = withAuth(CheckOut);
  const RestrictedLogin = withAuth(LogIn, false); // Redirects logged-in users to Home
  const RestrictedSignup = withAuth(SignUp, false); // Redirects logged-in users to Home

  return (
    <div className={style.main}>
      <CartInfoProvider>
        <Router basename="/">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/signUp" element={<RestrictedSignup />} />
            <Route path="/login" element={<RestrictedLogin />} />

            <Route path="/productPage/*" element={<ProtectedProductPage />} />

            <Route path="/CheckOut/" element={<ProtectedCheckoutPage />} />
            <Route path="/address" element={<Address />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/ordersuccess" element={<OrderSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/productadd" element={<ProductAdd />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </CartInfoProvider>
    </div>
  );
}

export default App;
