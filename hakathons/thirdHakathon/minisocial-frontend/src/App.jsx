import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import CreatePost from "./pages/CreatePost";
import Users from "./pages/Users";
// import Post from "./pages/Post";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-post" element={<CreatePost />} />
        {/* 
        <Route path="/signup" element={<Signup />} />
       
        
       
        <Route path="/posts/:id" element={<Post />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
