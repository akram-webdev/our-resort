import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Auth from "./Components/auth/Auth";
import Available from "./Components/booking/Available";
import Booking from "./Components/booking/Booking";
import Checkout from "./Components/booking/Checkout";
import Confirm from "./Components/booking/Confirm";
import Existing from "./Components/booking/Existing";
import Navbar from "./Components/Navbar/Navbar";
import NavMobile from "./Components/Navbar/NavMoblile";
import About from "./Components/pages/About";
import Dining from "./Components/pages/Dining";
import Footer from "./Components/pages/Footer";
import Home from "./Components/pages/Home";
import NoPage from "./Components/pages/NoPage";
import Room from "./Components/pages/rooms/Rooms";
import Tour from "./Components/pages/Tour";
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
        <Route path="/rooms" element={<Room/>} />
        <Route
          path="/rooms/:id"
          exact
          render={(props) => <Room {...props} />}
        />
        <Route path="/dining" element={<Dining/>} />
        <Route path="/about"  element={<About/>} />
        <Route path="/tours"  element={<Tour/>} />
        <Route path="/booking"  element={<Booking/>}/>
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