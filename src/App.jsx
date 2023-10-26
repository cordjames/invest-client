import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import DashBoard from "./pages/Auth/DashBoard";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import "./assets/theme.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<LandingPage />} />
        {/* USER DASHBOARD PAGE */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/auth/sign-in" element={<SignIn />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
