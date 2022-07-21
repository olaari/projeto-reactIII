import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre'
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentario/Comentarios'
import Menu from "../components/Menu/Menu"
import Footer from '../components/Footer/Footer'
import Diario from '../pages/Diario/Diario'
import Contatos from '../pages/Contato/Contatos'

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="comentarios" element={<Comentarios />} />
                <Route path="diario" element={<Diario />} />
                <Route path="contatos" element={<Contatos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default ApplicationRoutes