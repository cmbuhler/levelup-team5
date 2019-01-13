import React, { Component, PropTypes } from 'react'
import { Line } from 'react-chartjs-2';
import './EnergyChart.css'
import TitleComponent from './TitleComponent'


class EnergyChart extends Component {
    constructor() {
        super();
        this.state = {
            songs: ["Prologue", "Harry's Wondrous World", "The Arrival of Baby Harry", "Visit to the Zoo and Letters from Hogwarts", "Diagon Alley and The Gringotts Vault", "Platform Nine-and-Three-Quarters and The Journey to Hogwarts", "Entry into the Great Hall and The Banquet", "Mr. Longbottom Flies", "Hogwarts Forever! and The Moving Stairs", "The Norwegian Ridgeback and A Change of Season", "The Quidditch Match", "Christmas at Hogwarts", "The Invisibility Cloak and The Library Scene", "Fluffy's Harp", "In the Devil's Snare and The Flying Keys", "The Chess Game", "The Face of Voldemort", "Leaving Hogwarts", "Hedwig's Theme"],
            energy: [0.0188, 0.264, 0.042, 0.0332, 0.0442, 0.0492, 0.0469, 0.0972, 0.00905, 0.0162, 0.299, 0.0512, 0.0256, 0.00382, 0.133, 0.187, 0.084, 0.0473, 0.162], "danceability": [0.177, 0.227, 0.0761, 0.16, 0.285, 0.257, 0.173, 0.159, 0.153, 0.306, 0.269, 0.18, 0.18, 0.303, 0.0843, 0.356, 0.0942, 0.183, 0.156],
            danceability: [0.177, 0.227, 0.0761, 0.16, 0.285, 0.257, 0.173, 0.159, 0.153, 0.306, 0.269, 0.18, 0.18, 0.303, 0.0843, 0.356, 0.0942, 0.183, 0.156],
            query: '',
            name: ["Lord Of The Rings: The Fellowship Of The Ring"],
            image: "https://i.scdn.co/image/ef83ad0899f54cf23ef5a7b3eb0023b945735a88"
        }
    }


    handleGoClick = () => {
        fetch("http://127.0.0.1:8000/api/movies?movie="+ this.search.value)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    songs: result.songs,
                    energy: result.energy,
                    danceability: result.danceability,
                    happiness: result.happiness,
                    name: result.name,
                    image: result.image
                });
            } 
        )
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }
        )
    }


    generateEnergyData() {
        const data = {
            labels: this.state.songs,
            datasets: [
                {
                    label: 'Energy of songs',
                    backgroundColor: '#8SE582',
                    borderColor: ' #223237',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132red0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    pointHitRadius: 10,
                    data: this.state.energy
                }
            ]
        };
        return data
    }

    generateHappinessData() {
        const data = {
            labels: this.state.songs,
            datasets: [
                {
                    label: "Mood of song",
                    backgroundColor: 'green',
                    borderColor: ' #223237',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132red0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    pointHitRadius: 10,
                    data: this.state.energy
                }
            ]
        };
        return data;
    }

    generateDanceData() {
        const data = {
            labels: this.state.songs,
            datasets: [
                {
                    label: 'Danceability of songs',
                    backgroundColor: '#FF3B3F',
                    borderColor: ' #223237',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132red0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    pointHitRadius: 10,
                    data: this.state.danceability
                }
            ]
        };
        return data
    }

    render() {
        return (
            <div>
                <div>
                    <div className='container'>
                        <div className='row'>
                        <input className="form-control col-md-8"
                            placeholder="Search for a soundtrack"
                            ref={input => this.search = input}
                            onChange={this.handleInputChange}
                        />
                        <button className="btn btn-outline-warning col-lg-4" onClick={this.handleGoClick}>
                        Search
                        </button>
                        </div>
                    </div>
                        

                </div>
                <br/>
                <h2 className="App-header">
                    <TitleComponent>{this.state.name}</TitleComponent>
                </h2>
                <img src={this.state.image}/>
                <br/>

                <div className="charts">
                    <Line
                        data={this.generateEnergyData()}
                        options={{
                            scales: {
                                xAxes: [{
                                    display: false,
                                    gridLines: {
                                        display: false
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        display: false
                                    },
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 1,
                                    }
                                }]
                            }
                        }
                        }
                    />
                    <br/>

                    <Line
                        data={this.generateDanceData()}
                        options={{
                            scales: {
                                xAxes: [{
                                    display: false,
                                    gridLines: {
                                        display: false
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        display: false
                                    },
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 1,
                                    }
                                }]
                            }
                        }
                        }
                    />
                    <br/>
                    <Line
                        data={this.generateHappinessData()}
                        options={{
                            scales: {
                                xAxes: [{
                                    display: false,
                                    gridLines: {
                                        display: false
                                    }
                                }],
                                yAxes: [{
                                    gridLines: {
                                        display: false
                                    },
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 1,
                                    }
                                }]
                            }
                        }
                        }
                    />
                    <hr/>
                </div>
            </div>
        )
    }
}

export default EnergyChart

