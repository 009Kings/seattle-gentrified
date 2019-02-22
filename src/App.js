import React, { Component } from 'react';
import './App.css';
import Heatmap from './components/heatmap/Heatmap';
import Nav from './components/Nav';
import Chart from './components/chart/Chart';


class App extends Component {
	constructor(){
		super();
		this.state = {
		chartData:{}
		}
	}


	componentWillMount(){
		this.getChartData();
	}

	getChartData(){
		// this is where we gotta get the real data
		this.setState({
			chartData:{
				labels: ['Beacon Hill', 'Columbia City', 'Greenwood', 'Northgate', 'Rainier Valley', 'White Center'],
				datasets:[
					{
					label:'2013',
					data:[
						150,
						200,
						225,
						150,
						130,
						175
						],
					backgroundColor: 'red'
					},
				{
					label:'2015',
					data:[
						200,
						300,
						205,
						100,
						220,
						205
					],
					backgroundColor: 'purple'            
					},
				{
					label:'2018',
					data:[
						220,
						305,
						200,
						150,
						230,
						180
					],
					backgroundColor: 'blue'            
					}
				]
			}
		});
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<Heatmap />
				<div className="chartContainer">
					<Chart chartData={this.state.chartData} location="Seattle" legendPosition="bottom"/>
				</div>		
	        </div>
		);
	}
}


export default App;
