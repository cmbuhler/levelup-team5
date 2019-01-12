import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';

class Search extends Component {
    state = {
        query: '',
    }


    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1) {

            } else if (!this.state.query) {
            }
        })
    }

    render() {
        return (
            <div>
            <form>
                <input
                    placeholder="Search for a soundtrack..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
                
            </form>


            </div>

        )
    }
}

export default Search