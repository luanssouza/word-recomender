import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import './profilelist.css';

class ProfileList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div>
                <Button className="btn btn-primary btn-submit" id="scrollup-btn" variant="primary" onClick={() => this.handleModalShowHide()}>
                    <div className="overlay">
                        Films 
                        <svg viewBox="0 0 16 16" className="bi bi-heart profile-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        <h3>
                            {this.props.nfavs}
                        </h3>
                    </div>
                </Button>

                <Modal  
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered 
                        show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                        <Modal.Title id="m-title">Films That You Liked</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.pro_list.map(item => {
                            return  <div className="row" key={item.imdbID}>
                                        <div className="column col-lg-3  center">
                                            <img className="pro-film-poster" src={item.Poster} alt={"Poster of the film " + item.Title + " from the year " + item.Year} />
                                        </div>
                                        <div className="column col-lg-5 center">
                                            <h1 className="pro-film-title">{item.Title}</h1>
                                        </div>
                                        <div className="column col-lg-2 center">
                                            <h1 className="pro-film-year">{item.Year}</h1>
                                        </div>
                                        <div className="column col-lg-2 center">
                                            <button type="button" className="btn text-danger" onClick={() => this.props.removeMovie(item.imdbID)}>
                                            <svg viewBox="0 0 16 16" class="bi bi-trash-fill trash-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                            </svg>
                                            </button>
                                        </div>
                                    </div>
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-danger" variant="secondary" onClick={() => this.handleModalShowHide()}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default ProfileList;