import React, { Component } from 'react';

const About = () => {
  return (
    <div className="aboutContainer">
	    <a name="About"></a>
	    <h2>About this project</h2>
	    <p><strong>Project intention.</strong> Lorem Ipsum ha estat el text estàndard de la indústria des de l'any 1500, quan un impressor desconegut va fer servir una galerada de text i la va mesclar per crear un llibre de mostres tipogràfiques. No només ha sobreviscut cinc segles, sinó que ha fet el salt cap a la creació de tipus de lletra electrònics, romanent essencialment sense canvis.</p>
	    <p><strong>Team.</strong> The team that put this project together includes Sam Chakerian (data science), Victoria Baik and Serey Rachana Meng (UX design), and Sarah King and Tamis Nordling (web development).</p>
	    <p><strong>Explanation of data sources and process:</strong></p>
	    <p>

			<strong>Data Sources:</strong>

			<br />SPD Reports (Kaggle, data.seattle.gov)
			~684,000 entries, from 1965-2016
			Feature used: Reports of theft (not including car prowls). Thefts were the second highest type of report, beside car prowls. Car prowls were not included because people often report them out of obligation for insurance purposes.
			https://www.kaggle.com/sam/seattle-crime#SPD_Reports.csv

			<br /><br />Seattle Land Use Permits (Kaggle, City of Seattle Open Data)
			~14,000 entries, from 1992-2018
			Features used: Commerical and Multifamily land use permit applications.
			https://www.kaggle.com/city-of-seattle/seattle-land-use-permits

			<br /><br />Seattle Police Department 911 Incidents Response (Kaggle, City of Seattle)
			~1,430,000 entries, from 2009-2018
			Feature used: Suspicious person reports. We speculated suspicious person reports would increase with gentrification (aka the Barbeque Becky Index).
			https://www.kaggle.com/sohier/seattle-police-department-911-incident-response

			<br /><br />Seattle Code Violation Cases (Kaggle, City of Seattle Open Data)
			~41,000 entries, from 2003-2018
			Feature used: Tenant Reloction Ordinance records, indicating where low-income tenants forced to relocate due to buildings being torn down or renovated.
			https://www.kaggle.com/city-of-seattle/seattle-code-violation-cases

			<br /><br />
			House Sales in King County, USA (Kaggle, Public Domain)
			~21,000 entries, from 2014 - 2015
			Feature used: House sales, weighted by price.
			https://www.kaggle.com/harlfoxem/housesalesprediction

			<br /><br />All datasets included latitude and longitude.

			<br /><br />
			<strong>Charts:</strong>

			<br />comm.csv: Total commercial land use permit applications by year.
			<br />mfamily.csv: Total multifamily land use permit applications by year.
			<br />reloc.csv: Total tenant relocation ordinace reports by year.
			<br />sus_person.csv: Total suspicious person reports by year.
			<br />theft.csv: Total theft reports (not including car prowls) by year.

			<br /><br /><strong>Process:</strong> For each feature, data was clustered by latitude and longitude.<br />

			<br />Clustering used DBSCAN (Density-Based Spatial Clustering of Applications with Noise) with ball tree algorithm and haversine metric. Note using latitude and longitude is troublesome as the relationship between distance and degrees varies between the equator and the poles. We were not concerned with this issue because we were only dealing with a very local area. The resulting cluster midpoints were assigned a weight (count of data in cluster/total number of instances in the dataset). The resulting lat/long pairs with weights (for each feature) were then again clustered, returning one set of lat/long pairs with weights generalizing all our features. <br /><br />
			kaggle.com<br />
			Seattle Police Reports<br />
			Seattle Police Reports<br />
			kaggle.com<br />
			Seattle Land Use Permits<br />
			From City of Seattle Open Data<br />
			kaggle.com<br />
			Seattle Police Department 911 Incident Response<br />
			1.4 million responses from 2009 onwards<br />
			kaggle.com<br />
			Seattle Code Violation Cases<br />
			From City of Seattle Open Data<br />
			kaggle.com<br />
			House Sales in King County, USA<br />
			Predict house price using regression<br />
	    	
	    </p>
    </div>
  )
}

export default About;