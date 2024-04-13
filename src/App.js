import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import JobPortal from "./pages/JobPortal";
import MobileNav from "./components/MobileNav";
import LoginP from "./pages/login";
import Demo from "./pages/login-page";
import UserProfile from "./pages/user-profile/UserProfile";
import PostCard from "./components/newComponents/PostCard";
import NewPost from "./components/newComponents/NewPost";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./Hooks/useEmailAndPassword";
function App() {
  return (
    <AuthProvider>
      
    {/* // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<Home />}
    //     />
    //     <Route
    //       path="/practice"
    //       element={<Practice />}
    //     />
    //     <Route
    //       path="/job-portal"
    //       element={<JobPortal />}
    //     />
    //     <Route
    //       path="/login"
    //       element={<Demo />}
    //     />
    //     <Route
    //       path="/profile/:userid"
    //       element={<UserProfile />}
    //     />
    //   </Routes>
    //   <Footer />
    //   <MobileNav />
    // </Router>
    // <PostCard details={{profilePic: "https://www.w3schools.com/howto/img_avatar.png", name: "John Doe", time: "2 hours ago", post: "This is a post", likes: 10, comments: 5}} />
    // <NewPost /> */}
    <Login />
    </AuthProvider>
  );
}

export default App;
