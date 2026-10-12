import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_header from "./website/components/Home_header";
import Home from "./website/pages/Home";
import Footer from "./website/components/Footer";
import About from "./website/pages/About";
import Header from "./website/components/Header";
import Contacts from "./website/pages/Contacts";
import Course from "./website/pages/Course";
import Team from "./website/pages/Team";
import Testimonial from "./website/pages/Testimonial";
import Pnf from "./website/pages/Pnf";
import Aheade from "./admin/components/Aheade";
import Admin_login from "./admin/pages/Admin_login";
import Afooter from "./admin/components/Afooter";
import Dashboard from "./admin/pages/Dashboard";
import Add_categories from "./admin/pages/Add_categories";
import Manage_categories from "./admin/pages/Manage_categories";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home_header/><Home/><Footer/></>}></Route>
          <Route path="/about" element={<><Header title="About"/><About/><Footer/></>}></Route>
          <Route path="/contact" element={<><Header title="Contact"/><Contacts/><Footer/></>}></Route>
          <Route path="/courses" element={<><Header title="Course"/><Course/><Footer/></>}></Route>
          <Route path="/team" element={<><Header title="Team"/><Team/><Footer/></>}></Route>
          <Route path="/testimonial" element={<><Header title="Testimonial"/><Testimonial/><Footer/></>}></Route>
          <Route path="*" element={<><Header title="Page Not Found"/><Pnf/><Footer/></>}></Route>


          <Route path="/admin-login" element={<><Admin_login/></>}></Route>
          <Route path="/dashboard" element={<><Aheade title="Dashboard"/><Dashboard/><Afooter/></>}></Route>
          <Route path="/add_categories" element={<><Aheade title="Add Categories"/><Add_categories/><Afooter/></>}></Route>
          <Route path="/manage_categories" element={<><Aheade title="Manage Categories"/><Manage_categories/><Afooter/></>}></Route>

        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
