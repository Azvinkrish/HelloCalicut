import Register from "./Components/UsersAuth/Register/Register";
import Login from "./Components/UsersAuth/Login/Login";
import { GoogleOAuthProvider} from '@react-oauth/google'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/AdminPage/Dashboard";
import Aboutpage from "./Pages/HomePage/Aboutpage";
import BlogPage from "./Pages/HomePage/BlogPage";
import BlogsFeed from "./Pages/HomePage/BlogsFeed";
import AuthorsList from "./Pages/HomePage/AuthorsList";

function App() {
  return (
    <>
    <Router>
    <GoogleOAuthProvider clientId="548801348296-ind6jqebuol2ljjkj2pkskme5bectdbq.apps.googleusercontent.com">
      <Navbar />
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/read" element={<BlogsFeed />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admindashboard" element={<Dashboard />} />
      <Route path='/*' element={<h1>Error</h1>} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/authors" element={<AuthorsList />} />
      </Routes>
      </GoogleOAuthProvider>
      </Router>
    </>
  );
}

export default App;
