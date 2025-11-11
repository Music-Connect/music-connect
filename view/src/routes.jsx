import { Route } from "react-router";
import Home from "./pages/home";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<login/>}/>
        </Routes>
    )

}

export default AppRouter;