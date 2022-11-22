import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Available from "./components/booking/Available";
import Booking from "./components/booking/Booking";
import Checkout from "./components/booking/Checkout";
import Confirm from "./components/booking/Confirm";
import Existing from "./components/booking/Existing";
import Navbar from "./components/navbar/Navbar";
import NavMobile from "./components/navbar/NavMoblile";
import About from "./components/pages/About";
import Dining from "./components/pages/Dining";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import NoPage from "./components/pages/NoPage";
import Room from "./components/pages/rooms/Room";
import Rooms from "./components/pages/rooms/Rooms";
import Tour from "./components/pages/Tour";
import "./styles/App.scss";
const App = () => {
  const location = useLocation();
  /* const history = useHistory(); */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <NavMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={Rooms} />
        <Route
          path="/rooms/:id"
          exact
          render={(props) => <Room {...props} />}
        />
        <Route path="/dining" exact component={Dining} />
        <Route path="/about" exact component={About} />
        <Route path="/tours" exact component={Tour} />
        <Route path="/booking" exact component={Booking} />
        <Route path="/booking/availability" exact component={Available} />
        <Route path="/booking/checkout" exact component={Checkout} />
        <Route path="/booking/confirm" exact component={Confirm} />
        <Route path="/booking/existing" exact component={Existing} />
        <Route path="/admin" exact component={Auth} />
        <Route path="*" exact component={NoPage} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;