import React, { Component, PropTypes } from 'react'
import './TitleComponent.css'
import TextLoop from "react-text-loop";

class TitleComponent extends Component {
    constructor() {
        super()
    }

    makeTitleCallBasedOnSearch() {

    }

    render() {
        return (


        	<div>
	            <h2 className = "text">
	                <TextLoop springConfig={{ stiffness: 70, damping: 31 }}>
	                    <span className = "text">Song Intensities in:</span>
	                    <span span className = "text"> Song Danceability in:</span>
	                    
	                </TextLoop>{" "}
	                Harry Potter and the Sorcerer's Stone
	            </h2>
            </div>
        )
    }
}



export default TitleComponent


