import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Verify from "./components/Verify";
function App() {
  return (
    <>
      <div className="PageContainer">
        <div className="Navbar">
          <Navbar />
        </div>
        <div className="Content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Networking" element={<CategoryPage />} />
              <Route path="/Programming" element={<CategoryPage />} />
              <Route path="/Cyber_Security" element={<CategoryPage />} />
              <Route
                path="/Artifitial_Intelligence"
                element={<CategoryPage />}
              />
              <Route path="/Computer_Science" element={<CategoryPage />} />
              <Route path="/Login" element={<Login  />} />
              <Route path="/Register" element={<Register  />} />
              <Route path="/Verify" element={<Verify />} />
            </Routes>
          </BrowserRouter>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </>
  ); 
}
export default App;
