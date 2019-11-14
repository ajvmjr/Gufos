import React, { Component } from 'react';
import Rodape from '../componentes/Rodape';
import Cabecalho from '../componentes/Cabecalho';
import '../App.css';

class Categoria extends Component {
    constructor(props){
        super(props);
        this.state = {
            listaCategorias: [],
            titulo: ''
        }
    }

    //Função que faz requisição para a API
    //Atribui os dados recebidos ao state de listaCategorias
    //Caso ocorra um erro, exibe no console do navegador
    buscarCategorias(){
        fetch('http://localhost:5000/api/categorias')
        .then(resposta => resposta.json())
        .then(data => this.setState({ listaCategorias: data }))
        .catch((erro) => console.log(erro))
    }

    //Assim que a página for carregada, chama a função buscarCategorias
    componentDidMount(){
        this.buscarCategorias();
    }

    render() {
        return (
            <div>
                {/* <Cabecalho /> */}
                <main className="conteudoPrincipal">
                    <section className="conteudoPrincipal-cadastro">
                        <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1>
                        <div className="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Título</th>
                                    </tr>
                                </thead>

                                <tbody id="tabela-lista-corpo">
                                    {
                                        this.state.listaCategorias.map(function(categoria){
                                            return (
                                               <tr key={categoria.categoriaId}>
                                                    <td>{categoria.categoriaId}</td>
                                                    <td>{categoria.titulo}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="container" id="conteudoPrincipal-cadastro">
                            <h2 className="conteudoPrincipal-cadastro-titulo">
                                Cadastrar Tipo de Evento
                        </h2>
                            <form>
                                <div className="container">
                                     <input
                                        type="text"
                                        id="id"
                                        placeholder="código"
                                    />
                                    <input
                                        type="text"
                                        id="nome-tipo-evento"
                                        placeholder="tipo do evento"
                                    />
                                    <button
                                        className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                                    >
                                        Cadastrar
                            </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Categoria;