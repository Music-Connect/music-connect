import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";
import ProfileSelector from "./pages/profileSelector";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profileSelector" element={<ProfileSelector />} />
    </Routes>
  );
}

export default AppRouter;
