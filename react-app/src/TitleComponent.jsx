import React, { Component, PropTypes } from 'react'
import './TitleComponent.css'
import TextLoop from "react-text-loop";

class TitleComponent extends Component {
    constructor(props) {
        super(props)
    }

    makeTitleCallBasedOnSearch() {

    }

    render() {
        return (
<<<<<<< HEAD
            <div>
                <p className = "text">{this.props.children}</p>
=======


        	<div>
	            <h2 className = "text">
	                <TextLoop springConfig={{ stiffness: 70, damping: 31 }}>
	                    <span className = "text">Song Intensities in:</span>
	                    <span span className = "text"> Song Danceability in:</span>
	                    
	                </TextLoop>{" "}
	                Harry Potter and the Sorcerer's Stone
	            </h2>
>>>>>>> 63d91038be1660419b8f3731652ff9dc7b008eb4
            </div>
        )
    }
}



export default TitleComponent


