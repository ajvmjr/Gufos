import React, { Component } from 'react';
import '../App.css'

class Usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuarios: [],
            nome: '',
            email: '',
            tipoUsuario: ''
        }
    }

    buscarUsuarios(){
        fetch('http://localhost:5000/api/usuarios')
        .then(resposta => resposta.json())
        .then(data => this.setState({listaUsuarios: data }))
        .catch((error) => console.log(error))
    }

    componentDidMount(){
        this.buscarUsuarios();
    }

    render() {
        return (
            <div>
                <main class="conteudoPrincipal">
                    <section class="conteudoPrincipal-cadastro">
                        <h1 class="conteudoPrincipal-cadastro-titulo">Usuários</h1>
                        <div class="container" id="conteudoPrincipal-lista">
                            <table id="tabela-lista">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Permissão</th>
                                        <th>UF</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.listaUsuarios.map(function(usuario){
                                            return(
                                                <tr key={usuario.usuarioId}>
                                                    <td>{usuario.usuarioId}</td>
                                                    <td>{usuario.nome}</td>
                                                    <td>{usuario.email}</td>
                                                    <td>{usuario.tipoUsuario.titulo}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                            <div class="paginacao">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a class="active" href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
                        </div>

                        <div class="container" id="conteudoPrincipal-cadastro">
                            <h2 class="conteudoPrincipal-cadastro-titulo">Cadastrar Usuário</h2>
                            <div class="container">
                                <input type="text" placeholder="nome do usuário" />
                                <input type="text" placeholder="e-mail" />
                                <select>
                                    <option value="0" disabled>Permissão</option>
                                    <option value="ADMINISTRADOR">ADMINISTRADOR</option>
                                    <option value="COMUM">COMUM</option>
                                </select>
                                <input type="text" placeholder="data de nascimento" />
                                <input type="text" placeholder="logradouro" />
                                <input type="text" placeholder="cidade" />
                                <input type="text" placeholder="estado" />
                            </div>
                            <button class="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro">
                                Cadastrar
                            </button>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Usuario;