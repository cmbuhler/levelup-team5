import React from 'react'
import EnergyChart from '../EnergyChart';
import './MovieCard.css'

class MovieClass extends React.Component{
    render() {
        return (
            <div className="movieCard">
                <EnergyChart />
            </div>
        )
    }
}

export default MovieClass;