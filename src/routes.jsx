import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajuda from "./pages/Ajuda";
import Sentinela from "./pages/Sentinela";
import Iasd from "./pages/Iasd";
import Farol from "./pages/Farol";
import Sal from "./pages/Sal";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ajuda" element={<Ajuda />}></Route>
                <Route path="/sentinela" element={<Sentinela />}></Route>
                <Route path="/iasd" element={<Iasd />}></Route>
                <Route path="/farol" element={<Farol />}></Route>
                <Route path="/sal" element={<Sal />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes
