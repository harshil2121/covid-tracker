import React from 'react';
import CanvasJSReact from '../external/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
function Multiline({active,death,recovered,total,deceased,recover,totalInfected }){ 

		const options = {
				animationEnabled: true,	
                theme: "light2",
				title:{
					text: "Covid-19 Tracker"
				},
				axisY : {
					title: "Cases"
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "India",
					showInLegend: true,
					dataPoints: [
						{ y: active, label: "Active Cases" },
					    { y: death, label: "Death" },
					    { y: recover , label: "Recovered" },
					    { y: total, label: "Total Cases" },
					]
				},
				{
					type: "spline",
					name: "State",
					showInLegend: true,
					dataPoints: [
						{ y: active, label: "Active Cases" },
					    { y: deceased, label: "Death" },
					    { y: recovered , label: "Recovered" },
					    { y: totalInfected, label: "Total Cases" },
					]
				}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
}
export default Multiline; 