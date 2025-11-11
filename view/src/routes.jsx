import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "./pages/home";
import Login from "./pages/login";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRouter;
