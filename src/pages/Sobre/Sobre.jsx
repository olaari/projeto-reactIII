import "./sobre.css"
import foto from "../../assets/fotolari.jpg"
import image from "../../assets/fundobio.svg"
import Header from "../../components/Header/Header"

function Sobre() {
    return (
        <>
            <Header
                image= {image}
                description="ilustração de uma mulher se apresentando"
            >
                Sobre
            </Header>

            <div className="bio">
                <img className="foto-bio" src={foto} />
                <div>
                    <h2>Oi! Eu sou a Larissa</h2>
                    <p>Pra quem não me conhece, tenho 24 anos e sou formada em nutrição pela USP. Meu signo é Capricórnio, gosto muito de ler, testar receitinhas, sair com os amigos e com a família e praticar Jump. Recentemente, comecei a programar front-end pela reprograma.</p>
                </div>
            </div>
        </>
    )
}
export default Sobre