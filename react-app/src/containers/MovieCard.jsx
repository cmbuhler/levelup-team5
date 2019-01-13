import React from 'react'
import EnergyChart from '../EnergyChart';
import './MovieCard.css'

class MovieClass extends React.Component{
    render() {
        return (
            <div className="movieCard col-lg-6">
                <br/>
                <EnergyChart />
            </div>
        )
    }
}

export default MovieClass;