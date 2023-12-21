import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ajuda from "./pages/Ajuda";
import Sentinela from "./pages/Sentinela";
// import Iasd from "./pages/Iasd";
import Farol from "./pages/Farol";
import Sal from "./pages/Sal";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
// import Page404 from "./pages/Page404";
import Estou from "./pages/Estou";
import Teste from "./pages/Teste";


function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/ajuda" element={<Ajuda />}></Route>
                <Route path="/sentinela" element={<Sentinela />}></Route>
                <Route path="/iasd" element={<Home />}></Route>
                <Route path="/farol" element={<Farol />}></Route>
                <Route path="/sal" element={<Sal />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/estou" element={<Estou />}></Route>
                <Route path="*" element={<Home />}></Route>
                
                <Route path="/teste" element={<Teste />}></Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes
