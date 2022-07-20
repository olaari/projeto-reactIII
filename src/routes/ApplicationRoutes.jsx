import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentario/Comentarios'
import Menu from "../components/Menu/Menu"

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="comentarios" element={<Comentarios />} />
            </Routes>
        </BrowserRouter>
    )
}
export default ApplicationRoutes