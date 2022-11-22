import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import Auth from "./components/auth/Auth";
import Home from "../src/Components/pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import NavMobile from "./Components/Navbar/NavMoblile";
import Footer from "./components/pages/Footer";
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
        {/* <Route path="/rooms" exact component={Rooms} />
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
        <Route path="*" exact component={NoPage} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;