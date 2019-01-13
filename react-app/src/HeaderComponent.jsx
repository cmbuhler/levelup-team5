import React, { Component, PropTypes } from 'react'
import './HeaderComponent.css'
import TextLoop from "react-text-loop";

class HeaderComponent extends Component {
    constructor() {
        super()
    }

    makeTitleCallBasedOnSearch() {

    }

    render() {
        return (


        	<div>

                <div className = "header">
                    Industria Elite
                </div >
                
	             <header className = "text">
	                 <TextLoop springConfig={{ stiffness: 70, damping: 31 }}>
	                     <span className = "text">Song Intensities in Movies</span>
	                     <span span className = "text"> Song Danceability in Movies</span>
                         <span span className = "text"> Song Mood in Movies</span>
	                    
	                 </TextLoop>{" "}
	             </header>
            </div>
        )
    }
}



export default HeaderComponent


