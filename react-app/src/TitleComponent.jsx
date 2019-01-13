import React, { Component, PropTypes } from 'react'
import './TitleComponent.css' 

class TitleComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p className = "text">{this.props.children}</p>
            </div>
        )
    }
}



export default TitleComponent


