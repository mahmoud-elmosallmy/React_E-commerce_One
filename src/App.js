import React from "react";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./Pages/Main/Home";
import About from "./Pages/Main/About";
import Products from "./Pages/Main/Products";
import Contact from "./Pages/Main/Contact";
// import SingleProduct from "./Pages/Main/SingleProduct";
import Cart from "./Pages/Main/Cart";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Err404 from "./ErrorPage";
// import ScrollUp from "./Components/ScrollUp";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(29, 29, 29, .8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: '#F6F8FA',
      footer_bg: '#0a1435',
      btn: "rgb(98 84 243)",
      border: "rgb(98, 84, 243 , 0.5)",
      hr: '#ffffff',
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgb(0, 0, 0 , 0.02) 0px 1px 3px 0px, rgb(27, 31, 35 , 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgb(0, 0, 0 , 0.16) 0px 1px 4px",
    },
    media: {
      mobile: '768px',
      medium: '991px',
      top: '998px',
    },
  }
  return(
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/singleproduct/:id" element={<SingleProduct />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
        {/* <ScrollUp /> */}
        {/* <Footer /> */}
      </Router>
    </ThemeProvider>
  );
};

export default App;
