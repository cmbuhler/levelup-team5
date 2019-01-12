import React, { Component, PropTypes } from 'react'
import * as d3 from "d3";



class D3EnergyChart extends Component {
    constructor() {
        super()
    }

    loadChart() {
        const svg = d3.select("body").append("svg").attr("width", 600).attr("height", 800);
        const exampleData = [.1,.4,.2,.3,.1,.8,.6,.6,.4];
        var barChart = svg.selectAll("rect")
        .data(exampleData)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 80)
        .attr("y", (d, i) => 80 - d)
        .attr("width", 65)
        .attr("height", 80)
        .attr("fill", "red")
       }

    componentDidMount(){
        this.loadChart();
    }

    render() {
        return (
            <div>
                <p>Chart Goes Here</p>
            </div>
        )
    }
}

export default D3EnergyChart

