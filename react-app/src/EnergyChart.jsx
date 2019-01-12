import React, { Component, PropTypes } from 'react'
import { Line } from 'react-chartjs-2';




class EnergyChart extends Component {
    constructor() {
        super();
        this.state = {
            songs: [],
            energy: [],
            danceability: []
        }
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        songs: result.songs,
                        energy: result.energy,
                        danceability: result.danceability
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("ERROR")
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
                <Line
                    data={this.generateEnergyData()}
                    width={30}
                    height={35}
                    options={{
                        layout: {
                            padding: {
                                left: 100,
                                right: 100,
                                top: 15,
                                bottom: 0
                            }
                        },
                        animation: {
                            easing: 'easeInBounce'
                        },
                        
                        maintainAspectRatio: false,
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
                                }
                            }]
                        }
                    }
                    }
                />

                <Line
                    data={this.generateDanceData()}
                    width={30}
                    height={35}
                    options={{
                        layout: {
                            padding: {
                                left: 100,
                                right: 100,
                                top: 15,
                                bottom: 0
                            }
                        },
                
                        maintainAspectRatio: false,
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
                                }
                            }]
                        }
                    }
                    }
                />

            </div>

        )
    }
}

export default EnergyChart

