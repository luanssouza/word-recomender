import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './experimentsteps.css' 

export class ExperimentSteps extends Component {
    constructor(props) {
        super(props);

        this.state = {accept_cons: false };
    }

    handleChangeAcceptCons = () => {
        this.setState({ accept_cons: !this.state.accept_cons });  
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.history.push('/userForm');
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <h1 className="title">Termo de Consentimento Livre e Esclarecido</h1>
                <hr></hr>
                <h2 className="sub-title">Etapas do experimento e Pré-Requisitos</h2>
                <p className="text-desc">
                    Você sabe o por quê de um determinado produto ter sido recomendado para você em um site de compras online? Ou então, o por quê de um certo filme ter 
                    sido sugerido a você no Netflix? Nem sempre ficamos sabendo a razão de uma recomendação nos ter sido feita – nem sempre a recomendação que nos feita 
                    é completamente transparente.
                </p>    
                <p className="text-desc">
                    Neste estudo, ao explicarmos ao usuário o motivo de um determinado item lhe ter sido sugerido, buscamos aumentar a transparência de um sistema de recomendação.
                    A transparência de um sistema permite ao usuário a tomada de decisões melhores e mais rápidas.
                </p>
                <p className="text-desc">
                    O procedimento de coleta de dados acontecerá da seguinte forma: será inicialmente requerido para que sejam completados alguns dados e, em seguida, 
                    você irá pesquisar e avaliar filmes de sua preferência. Posteriormente, será gerada uma recomendação com várias explicações para a mesma. 
                    Por meio de um questionário, você nos dirá qual a justificativa de sua preferência, encerrando o experimento.
                </p>
                <p className="text-desc">
                    Como pré-requesito para participação é necessário um conhecimento básico de inglês já que os dados utilizados para geração das explicações estão nesta linguagem e
                    uma tradução desses textos podem fazer com que os significados das palavras mudem ou não façam sentido.
                </p>
                <hr></hr>
                <h2 className="sub-title">Termo de Consentimento</h2>
                <p className="text-desc">
                    O objetivo desse trabalho é criar um novo algoritmo de explicação, que considera a proximidade de significado entre palavras para gerar uma sugestão e
                    uma justificativa.
                </p>
                <p className="text-desc">
                    Pode existir um desconforto e risco na participação da coleta dados, já que os filmes podem gerar pensamentos e sensações negativas. 
                    <b> Nesse sentido, é importante destacar que a qualquer momento o participante poderá interromper o preenchimento dos formulários ao fechar a janela do seu navegador</b>.
                </p>
                <p className="text-desc">
                    Você não será identificado(a) em nenhuma publicação que possa resultar deste estudo. 
                    A participação no estudo não acarretará custos para você e não será disponível nenhuma compensação financeira adicional.
                </p>
                <hr></hr>
                <h2 className="sub-title">Contatos</h2>
                <p className="text-desc">
                    Você pode contactar e pedir qualquer informação aos responsáveis por este estudo, identificados abaixo:
                </p>
                <ul>
                  <li>André Levi Zanon - andrezanon@usp.br</li>  
                  <li>Luan Souza - luanssouza@usp.br</li>  
                  <li>Diany Pressato - diany_press@usp.br</li>  
                  <li>Prof. Dr. Marcelo Manzato - mmanzato@icmc.usp.br</li>  
                </ul>
                <Form.Group controlId="Accept">
                    <Form.Check type="checkbox" label="Eu declaro que li e fui informada(o) dos pré-requisitos, objetivos e riscos da pesquisa acima de maneira clara e que 
                        concordo em participar deste estudo" 
                        value={this.state.accept_cons} onChange={this.handleChangeAcceptCons} />
                </Form.Group>
                <Button className="float-lg-right" as="input" type="submit" value="Próximo" disabled={!this.state.accept_cons} />
            </Form>
        )
    }
}

export default ExperimentSteps
