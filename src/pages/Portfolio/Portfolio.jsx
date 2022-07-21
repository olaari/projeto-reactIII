import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from "../../components/Header/Header"
import image from "../../assets/project.svg"
import Projetos from "./dados"
import './portfolio.css'
import axios from 'axios'

function Portfolio() {
    const [repos, setRepos] = useState([])
    const URL = 'https://api.github.com/users/olaari/repos'

    useEffect(() => {
        axios
            .get(URL)
            .then((response) => setRepos(response.data))
    }, [])

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
            <h2 className='titulo'> Outros Projetos no meu Github</h2>
            <div className='card-container'>
                {
                    repos.map(repo => {
                        return (
                            <div className='card' key={repo.id}>
                                <h3>{repo.name}</h3>
                                <a href={repo.html_url} className="enter-repo" target="_blank" >Saiba mais</a>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default Portfolio