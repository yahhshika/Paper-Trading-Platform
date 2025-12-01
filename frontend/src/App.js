// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Navbar from "./landingPage/Navbar";
// import HomePage from "./landingPage/home/HomePage";
// import PricingPage from "./landingPage/pricing/PricingPage";
// import ProductPage from "./landingPage/products/ProductPage";
// import SignUp from "./landingPage/signup/Signup";
// import SupportPage from "./landingPage/support/SupportPage";
// import AboutPage from "./landingPage/about/AboutPage";
// import Footer from "./landingPage/Footer";
// import PageNotFound from "./landingPage/PageNotFound";
// import Courses from "./landingPage/courses/Courses";
// import Faq from "./landingPage/Faq/faq";



// function App() {
//     return ( <>
//     <BrowserRouter>
//     <Navbar/>

//     <Routes>
//         <Route exact path="/" element={<HomePage/>}/>
//         <Route exact path="/about" element={<AboutPage/>}/>
//         <Route exact path="/pricing" element={<PricingPage/>}/>
//         <Route exact path="/product" element={<ProductPage/>}/>
//         <Route exact path="/signup" element={<SignUp/>}/>
//         <Route exact path="/support" element={<SupportPage/>}/>

//         <Route exact path="/Courses" element={<Courses/>}/>
//          <Route exact path="/FAQ" element={<Faq/>}/>


//         <Route exact path="*" element={<PageNotFound/>}/>

//     </Routes>
//     <Footer/>

//     </BrowserRouter>
//     </> );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landingPage/Navbar";
import HomePage from "./landingPage/home/HomePage";
import PricingPage from "./landingPage/pricing/PricingPage";
import ProductPage from "./landingPage/products/ProductPage";
import SignUp from "./landingPage/signup/Signup";
import SupportPage from "./landingPage/support/SupportPage";
import AboutPage from "./landingPage/about/AboutPage";
import Footer from "./landingPage/Footer";
import PageNotFound from "./landingPage/PageNotFound";
import Courses from "./landingPage/courses/Courses";
import Faq from "./landingPage/Faq/faq";

// 👉 Import ThemeProvider
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/pricing" element={<PricingPage />} />
          <Route exact path="/product" element={<ProductPage />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/support" element={<SupportPage />} />
          <Route exact path="/Courses" element={<Courses />} />
          <Route exact path="/FAQ" element={<Faq />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

