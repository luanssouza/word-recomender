import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
    render(){
        return  (
            <div>
                <form>
                    <input class="form-control search" type="text" placeholder="Digite o nome do filme que queira avaliar"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;