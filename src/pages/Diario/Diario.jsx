import Header from "../../components/Header/Header"
import image from "../../assets/diario.svg"
import './diario.css'

function Diario() {
    return (
        <>
            <Header
                image={image}
                description="ilustração mulher fazendo checklist"
            >
                Diário Reprograma
            </Header>
            <div className="container">
            <div className='card-diario'>
                <h2>Git</h2>
                <img src="https://media.giphy.com/media/myRQnhrdKEryxF6xSK/giphy.gif" />
                <p> Git é um sistema de controle de versões distribuído. Ele monitora alterações feitas no código e permite programadores ver o histórico assim como voltar para uma versão anterior. Ele também facilita a colaboração entre desenvolvedores, facilitando a resolução de conflitos.</p>
            </div>
            <div className='card-diario'>
                <h2>HTML</h2>
                <img src="https://media.giphy.com/media/IN4dsF2iwSJ3N9jDZb/giphy.gif" />
                <p>O HTML (HiperText Markup Language) traduzido do inglês Marcação de Hipertexto. É uma linguagem de marcação que permite o desenvolvimento de uma estrutura básica de uma página da web. É como se fosse um esqueleto do site que permite a organização das páginas. Dentro dele, é possível adicionar textos, imagens, links, videos, entre outras coisas. </p>
            </div>
            <div className='card-diario'>
                <h2>CSS</h2>
                <img src="https://media.giphy.com/media/0fRjvlfSu2koMzg1XP/giphy.gif" />
                <p>Cascading Style Sheets, mais conhecido como CSS, é uma linguagem de estilo utilizada para estilizar páginas web escritas em HTML. Ele permite alterar coisas como o posicionamento, a cor, o tamanho, a borda e outros atributos de elementos como textos e imagens. </p>
            </div>
            <div className='card-diario'>
                <h2>JAVASCRIPT</h2>
                <img src="https://media.giphy.com/media/KXlTUvqz5fNbq/giphy.gif" />
                <p>O JavaScript (não confundir com Java!) é uma linguagem de programação que torna páginas web interativas. Junto com o HTML e o CSS, ele forma um dos pilares da internet como a conhecemos. Ele possibilita, por exemplo, expandir um menu clicando em um botão. </p>
            </div>
            </div>
        </>
    )
}

export default Diario