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


            <div className = "Container">

                <div className = "header">
                    Industria Elite
                </div >

                 <header className = "text">
                     <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                         <span className = "text" id = "int">Intensities</span>
                         <span span className = "text" id = "dance"> Danceability</span>
                         <span span className = "text" id = "mood"> Mood</span>

                     </TextLoop>{" "}
                 </header>
            </div>
        )
    }
}



export default HeaderComponent