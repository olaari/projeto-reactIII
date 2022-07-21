import Header from "../../components/Header/Header"
import image from "../../assets/contato.svg"
import "./contato.css"
import github from "../../assets/github.png"
import linkedin from '../../assets/in.png'
import facebook from '../../assets/facebook.png'
import { BsArrowReturnRight } from 'react-icons/bs'

function Contatos() {
    return (
        <>
            <Header
                image={image}
                description="ilustração mulher fazendo checklist"
            >
                Contatos
            </Header>
            <div className="container-contatos">
                <div className="card-contato">
                    <h3>GitHub</h3>
                    <img src={github} alt="ícone github" />
                    <a href="https://github.com/olaari" target="_blank">
                        <BsArrowReturnRight color="#fff" />
                    </a>
                </div>
                <div className="card-contato">
                    <h3>Linkedin</h3>
                    <img src={linkedin} alt="ícone linkedin" />
                    <a href="https://www.linkedin.com/in/larissa-da-silva-de-oliveira-63b430179/" target="_blank">
                        <BsArrowReturnRight color="#fff" />
                    </a>
                </div>
                <div className="card-contato">
                    <h3>Facebook</h3>
                    <img src={facebook} alt="ícone facebook" />
                    <a href="https://www.facebook.com/larissa.oliveira.37454/" target="_blank">
                        <BsArrowReturnRight color="#fff" />
                    </a>
                </div>

            </div>
        </>
    )
}
export default Contatos