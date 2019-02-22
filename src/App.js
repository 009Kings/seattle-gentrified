import React, { Component } from 'react';
import Heatmap from './components/heatmap/Heatmap';
import Nav from './components/Nav';
import Chart from './components/chart/Chart';
import About from './components/about/About';
import AdditionalResources from './components/additionalResources/AdditionalResources';

import './App.css';
import needle from './SpaceNeedle.svg';

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
				labels: [2003,
					2004,
					2005,
					2006,
					2007,
					2008,
					2009,
					2010,
					2011,
					2012,
					2013,
					2014,
					2015,
					2016,
					2017,
					2018],
				datasets:[
					{
					label: 'relocations per year',
					data:[
						13,
						207,
						216,
						227,
						289,
						120,
						92,
						61,
						58,
						108,
						103,
						184,
						241,
						210,
						199,
						75
						],
					backgroundColor: 'lightgray'
					}
				]
			}
		});
	}

	render() {
		return (
			<div className="App">
				<Nav />
				<div className="buffer">
				<br /><br />
				</div>
				<div className="section">
					<div className="left-1" id="needle">
			            <img src={needle} alt="Seattle Space Needle" />
		            </div>
		            <div className="right-4">
						<h1>Gentrification & Displacement in Seattle</h1>
						<p><strong>&ldquo;Gentrification [is] the process of neighborhood change</strong> that results in the replacement of lower income residents with higher income ones.&rdquo;  &mdash;<em>(Kennedy and Leonard, 2001a, p. 1)</em></p>

						<p>The city of Seattle has been growing rapdily for several years. As population increases, housing costs rise. Lower-income communities and communities of color are at elevated risk for displacement.</p>
					</div>

				</div>
				<div className="section">
					<div className="left-3">
						<Heatmap />
					</div>
					<div className="right-2">
						<h2>Where gentrification is happening</h2>
						<p>Using a cross-section of datapoints including increase of police calls, increase in house prices, increase in suspicious person calls and housing code violations relating to tenant rights, a point is placed on the map with a weight based on the forementioned parameters. The more red the area, the heigher the frequency and gentrification weight of its points. For each feature, data was clustered by latitude and longitude.</p>
					</div>
				</div>
				<div className="chartContainer" className="section">
					<div className="left-2">
						<h2>Increasing relocations</h2>
						<p>Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de tipus de lletra electrònics, romanent essencialment sense canvis.</p>					

					</div>
					<div className="right-3">
						<Chart chartData={this.state.chartData} location="Seattle" legendPosition="bottom"/>
					</div>
				</div>
				<div className="section">
					<div className="left-3">
						<AdditionalResources />
					</div>
				</div>
				<div className="section" >
					<div className="full-row">
						<About />
					</div>	
				</div>
	        </div>
		);
	}
}


export default App;
