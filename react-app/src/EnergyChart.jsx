import React, { Component, PropTypes } from 'react'
import * as d3 from "d3";
import { Line } from 'react-chartjs-2';


const data = {
    labels: ['song1', 'song2', 'song3', 'song4', 'song5', 'song6', 'song7', 'song1', 'song2', 'song3', 'song4', 'song5', 'song6', 'song7'],
    datasets: [
        {
            label: 'Energy of songs',
            backgroundColor: 'red',
            borderColor: 'black',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132red0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [.53, .4, .13, .12, .3, .9, .4, .53, .4, .13, .12, .3, .9, .4]
        }
    ]

};

class EnergyChart extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <Line
                    data={data}
                    width={60}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
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

