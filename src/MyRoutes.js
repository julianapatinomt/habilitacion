import {Routes,Route} from "react-router";
import Catalogo from "./pages/Catalogo";
function MyRoutes(){
    return <Routes>
        <Route path="/" element={<Catalogo/>}></Route>
    </Routes>
}
export default MyRoutes;