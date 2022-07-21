import { BsArrowReturnRight } from 'react-icons/bs'
import Header from "../../components/Header/Header"
import image from "../../assets/project.svg"
import Projetos from "./dados"
import './portfolio.css'

function Portfolio() {
    return (
        <>
            <Header
                image={image}
                description="ilustração mulher com site"
            >
                Meus Projetos
            </Header>

            <div className="cartao-container">
                {
                    Projetos.map(projeto => {
                        return (
                            <div className="cartao" key={projeto.id}>
                                <h1>{projeto.name}</h1>
                                <img src={projeto.image} />
                                <p>{projeto.description}</p>
                                <a href={projeto.linkprojeto} target="_blank" className="enter-repo">
                                    <BsArrowReturnRight size={16} color="#111" />
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Portfolio