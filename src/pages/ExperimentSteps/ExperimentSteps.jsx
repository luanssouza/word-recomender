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
                    O procedimento de coleta de dados acontecerá da seguinte forma: 
                    será inicialmente requerido para que sejam completados seus dados pessoais, em seguida, você irá pesquisar e avaliar filmes de sua preferência e, 
                    posteriormente, será gerada uma recomendação com várias explicações para a mesma. Por meio de um questionário, você nos dirá qual a justificativa de 
                    sua preferência, encerrando o experimento.
                </p>
                <p className="text-desc">
                    Como pré-requesito para participação é necessário um conhecimento básico de inglês já que os dados utilizados para geração das explicações estão nesta linguagem e
                    uma tradução desses textos podem fazer com que os significados das palavras mudem ou não façam sentido.
                </p>
                <hr></hr>
                <h2 className="sub-title">Termo de Consentimento</h2>
                <p className="text-desc">
                    O motivo que nos leva a estudar o problema da falta de transparência em sistemas de recomendação é que, ao explicar o porquê de a sugestão ser mostrada, 
                    o usuário tem o poder de tomar melhores e mais rápidas decisões. A pesquisa se justifica na busca de obter explicações persuasivas a partir de similaridades 
                    semânticas. 
                    O objetivo desse trabalho é criar um novo algoritmo de explicação, que considera a proximidade de significado entre palavras para gerar uma sugestão e
                    justificativa.
                </p>
                <p className="text-desc">
                    Existe um desconforto e risco mínimo na participação da coleta dados, já que os filmes podem gerar pensamentos e sensações negativas. 
                    Nesse sentido, é importante destacar que a qualquer momento o participante poderá interromper o preenchimento dos formulários ao fechar a janela do seu navegador.
                </p>
                <p className="text-desc">
                    Você não será identificado(a) em nenhuma publicação que possa resultar deste estudo. 
                    A participação no estudo não acarretará custos para você e não será disponível nenhuma compensação financeira adicional.
                </p>
                <Form.Group controlId="Accept">
                    <Form.Check type="checkbox" label="Eu declaro que fui informada(o) dos pré-requisitos, objetivos e riscos da pesquisa acima de maneira clara e que 
                        concordo em participar deste estudo" 
                        value={this.state.accept_cons} onChange={this.handleChangeAcceptCons} />
                </Form.Group>
                <Button className="float-lg-right" as="input" type="submit" value="Próximo" disabled={!this.state.accept_cons} />
            </Form>
        )
    }
}

export default ExperimentSteps
