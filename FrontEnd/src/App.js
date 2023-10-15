import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/home";
import About from "./routes/about";
import Project from "./routes/project";
import Contact from "./routes/contact";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";
import Hero  from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Profile from "./routes/Profile";
import Laptoppageoneadmin from "./routes/Laptoppageoneadmin";
import Mobilepageone from "./routes/Mobilepageone";
import Mobilepagetwo from "./routes/Mobilepagetwo";
import Googlepixel4a from "./routes/Googlepixel4a";
import ProductDescription from "./components/ProductDescription";
import WithColorChanger from "./components/WithColorChanger";
import OtpPage from "./routes/OtpPage";
import Customizeproduct from "./routes/Customizeproduct";
import { ColorProvider } from './routes/ColorContext';
import { UserProvider } from "./routes/UserContext";
import SettingsPage from "./routes/SettingsPage";
import { FontProvider } from './routes/FontContext';
import EditProfile from "./routes/EditProfile";
import Vegetablesone from "./routes/Vegetablesone";
import LadiesFinger from "./routes/Ladiesfinger";
export default function App() {
  return (
    <div className="App">
      <UserProvider>
      <ColorProvider>
      <FontProvider>
      <Routes>
        
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/projects" element={ <Project/>}/>
        <Route path="/contact" element={ <Contact />}/>
        <Route path="/signup"  element={<Signup/>} />
        <Route path="/signin"  element={<Signin/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
        <Route path="/profile" element={<Profile/>} />
       <Route path="/electronics/laptops" element={<Laptoppageoneadmin/>} />
       <Route path="/electronics/mobiles" element={<Mobilepageone/>} />
       <Route path="/Googlepixel4a" element={<Googlepixel4a/>} />
       <Route path="/productdescription" element={<ProductDescription/>} />
       <Route path="/electronics/mobiles2" element={<Mobilepagetwo/>} />
       <Route path="/otp" element={<OtpPage/>} />
       <Route path="/productcustomize" element={<Customizeproduct/>} />
       <Route path="/settings" element={<SettingsPage/>} />
       <Route path="/groceries/vegetables" element={<Vegetablesone/>} />
       <Route path="/ladiesfinger" element={<LadiesFinger/>} />
       

       
      </Routes>
      </FontProvider>
      </ColorProvider>
      </UserProvider>
    </div>
  );
}
